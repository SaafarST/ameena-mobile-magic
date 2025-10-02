import { useState } from 'react';
import { MessageSquare, Search, Languages, FileText, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Chat from './Chat';
import SearchPage from './Search';
import Translate from './Translate';
import Documents from './Documents';

type TabType = 'chat' | 'search' | 'translate' | 'documents';

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabType>('chat');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const tabs = [
    { id: 'chat' as TabType, icon: MessageSquare, label: 'Чат' },
    { id: 'search' as TabType, icon: Search, label: 'Ҷустуҷӯ' },
    { id: 'translate' as TabType, icon: Languages, label: 'Тарҷума' },
    { id: 'documents' as TabType, icon: FileText, label: 'Ҳуҷҷатҳо' }
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Header with gradient */}
      <header className="bg-card/80 backdrop-blur-lg border-b px-4 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-2xl gradient-primary flex items-center justify-center text-2xl shadow-lg">
            ✨
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ameena
          </h1>
        </div>
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:bg-muted">
          {theme === 'light' ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </Button>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-hidden">
        {activeTab === 'chat' && <Chat />}
        {activeTab === 'search' && <SearchPage />}
        {activeTab === 'translate' && <Translate />}
        {activeTab === 'documents' && <Documents />}
      </main>

      {/* Bottom Navigation */}
      <nav className="border-t bg-card/80 backdrop-blur-lg shadow-lg">
        <div className="flex items-center justify-around px-2 py-3">
          {tabs.map(({ id, icon: Icon, label }) => (
            <Button
              key={id}
              variant="ghost"
              size="sm"
              onClick={() => setActiveTab(id)}
              className={`flex-1 flex-col h-auto py-3 gap-1 transition-all ${
                activeTab === id 
                  ? 'text-primary bg-primary/10 shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-medium">{label}</span>
            </Button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Index;
