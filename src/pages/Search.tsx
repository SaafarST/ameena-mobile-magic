import { useState } from 'react';
import { Search as SearchIcon, Loader2, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { api } from '@/lib/api';

interface SearchResult {
  title: string;
  snippet: string;
  url: string;
  source?: string;
}

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSearch = async () => {
    if (!query.trim() || isLoading) return;

    setIsLoading(true);
    try {
      const data = await api.search(query);
      setResults(data);
      if (data.length === 0) {
        toast({
          title: 'Натиҷа ёфт нашуд',
          description: 'Калимаи дигареро кӯшиш кунед'
        });
      }
    } catch (error) {
      toast({
        title: 'Хатогӣ',
        description: 'Ҷустуҷӯ иҷро нашуд',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b bg-background sticky top-0 z-10">
        <div className="flex gap-2">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Ҷустуҷӯ..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button
            onClick={handleSearch}
            disabled={!query.trim() || isLoading}
            size="icon"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <SearchIcon className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {results.length === 0 && !isLoading && (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            <p>Барои ҷустуҷӯ калима нависед</p>
          </div>
        )}

        {results.map((result, idx) => (
          <Card key={idx} className="p-4">
            <a
              href={result.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block space-y-2 hover:opacity-80 transition-opacity"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-foreground line-clamp-2">
                  {result.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
              </div>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {result.snippet}
              </p>
              {result.source && (
                <p className="text-xs text-muted-foreground">{result.source}</p>
              )}
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}
