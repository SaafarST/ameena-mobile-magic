import { useState } from 'react';
import { ArrowLeftRight, Loader2, Copy, Check } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { api } from '@/lib/api';

export default function Translate() {
  const [sourceText, setSourceText] = useState('');
  const [targetText, setTargetText] = useState('');
  const [sourceLang, setSourceLang] = useState('tj');
  const [targetLang, setTargetLang] = useState('en');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleSwap = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(targetText);
    setTargetText(sourceText);
  };

  const handleTranslate = async () => {
    if (!sourceText.trim() || isLoading) return;

    setIsLoading(true);
    try {
      const translation = await api.translate({
        text: sourceText,
        source_lang: sourceLang,
        target_lang: targetLang
      });
      setTargetText(translation);
    } catch (error) {
      toast({
        title: 'Хатогӣ',
        description: 'Тарҷума иҷро нашуд',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!targetText) return;
    await navigator.clipboard.writeText(targetText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({ title: 'Нусхабардорӣ шуд' });
  };

  return (
    <div className="flex flex-col h-full p-4 space-y-4">
      <Card className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button
              variant={sourceLang === 'tj' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSourceLang('tj')}
            >
              Тоҷикӣ
            </Button>
            <Button
              variant={sourceLang === 'en' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSourceLang('en')}
            >
              English
            </Button>
          </div>
          <Button variant="ghost" size="icon" onClick={handleSwap}>
            <ArrowLeftRight className="w-5 h-5" />
          </Button>
        </div>
        <Textarea
          value={sourceText}
          onChange={(e) => setSourceText(e.target.value)}
          placeholder={sourceLang === 'tj' ? 'Матнро нависед...' : 'Enter text...'}
          className="min-h-[150px] resize-none"
        />
      </Card>

      <Card className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button
              variant={targetLang === 'en' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setTargetLang('en')}
            >
              English
            </Button>
            <Button
              variant={targetLang === 'tj' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setTargetLang('tj')}
            >
              Тоҷикӣ
            </Button>
          </div>
          {targetText && (
            <Button variant="ghost" size="icon" onClick={handleCopy}>
              {copied ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </Button>
          )}
        </div>
        <Textarea
          value={targetText}
          readOnly
          placeholder={targetLang === 'tj' ? 'Тарҷума...' : 'Translation...'}
          className="min-h-[150px] resize-none bg-muted"
        />
      </Card>

      <Button
        onClick={handleTranslate}
        disabled={!sourceText.trim() || isLoading}
        className="w-full"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Тарҷума шуда истодааст...
          </>
        ) : (
          'Тарҷума кунед'
        )}
      </Button>
    </div>
  );
}
