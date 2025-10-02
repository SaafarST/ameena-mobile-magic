import { useState, useEffect } from 'react';
import { FileText, Download, Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { api } from '@/lib/api';

interface DocumentTemplate {
  id: string;
  name: string;
  name_tj: string;
  category: string;
  icon: string;
  description: string;
  fields: any[];
}

export default function Documents() {
  const [templates, setTemplates] = useState<DocumentTemplate[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<DocumentTemplate | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadTemplates();
  }, []);

  const loadTemplates = async () => {
    setIsLoading(true);
    try {
      const data = await api.getDocumentTemplates();
      setTemplates(data);
    } catch (error) {
      toast({
        title: 'Хатогӣ',
        description: 'Шаблонҳо бор нашуданд',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerate = async () => {
    if (!selectedTemplate || isGenerating) return;

    setIsGenerating(true);
    try {
      const result = await api.generateDocument({
        template_id: selectedTemplate.id,
        data: formData
      });
      
      // Open PDF in new tab
      window.open(result.pdf_url, '_blank');
      
      toast({
        title: 'Муваффақ!',
        description: 'Ҳуҷҷат тайёр шуд'
      });
      
      setFormData({});
      setSelectedTemplate(null);
    } catch (error) {
      toast({
        title: 'Хатогӣ',
        description: 'Ҳуҷҷат тайёр нашуд',
        variant: 'destructive'
      });
    } finally {
      setIsGenerating(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (selectedTemplate) {
    return (
      <div className="flex flex-col h-full">
        <div className="p-4 border-b bg-background">
          <Button variant="ghost" onClick={() => setSelectedTemplate(null)}>
            ← Бозгашт
          </Button>
          <h2 className="mt-2 text-xl font-semibold">{selectedTemplate.name_tj}</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {selectedTemplate.fields.map((field: any) => (
            <div key={field.name} className="space-y-2">
              <Label htmlFor={field.name}>
                {field.label}
                {field.required && <span className="text-destructive ml-1">*</span>}
              </Label>
              {field.type === 'textarea' ? (
                <Textarea
                  id={field.name}
                  value={formData[field.name] || ''}
                  onChange={(e) =>
                    setFormData({ ...formData, [field.name]: e.target.value })
                  }
                  placeholder={field.placeholder}
                  rows={field.rows || 4}
                />
              ) : (
                <Input
                  id={field.name}
                  type={field.type || 'text'}
                  value={formData[field.name] || ''}
                  onChange={(e) =>
                    setFormData({ ...formData, [field.name]: e.target.value })
                  }
                  placeholder={field.placeholder}
                />
              )}
            </div>
          ))}
        </div>

        <div className="p-4 border-t bg-background">
          <Button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Тайёр шуда истодааст...
              </>
            ) : (
              <>
                <Download className="w-5 h-5 mr-2" />
                Ҳуҷҷат тайёр кунед
              </>
            )}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-3 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">Ҳуҷҷатҳо</h1>
      
      {templates.length === 0 && (
        <div className="flex items-center justify-center h-[50vh] text-muted-foreground">
          <p>Шаблонҳо ёфт нашуданд</p>
        </div>
      )}

      {templates.map((template) => (
        <Card
          key={template.id}
          className="p-4 cursor-pointer hover:bg-accent transition-colors"
          onClick={() => setSelectedTemplate(template)}
        >
          <div className="flex items-start gap-3">
            <div className="text-3xl">{template.icon}</div>
            <div className="flex-1">
              <h3 className="font-semibold">{template.name_tj}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {template.description}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                {template.category}
              </p>
            </div>
            <FileText className="w-5 h-5 text-muted-foreground" />
          </div>
        </Card>
      ))}
    </div>
  );
}
