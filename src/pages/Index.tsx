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
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <h1 className="text-xl font-bold text-primary">Ameena ✨</h1>
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
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
      <nav className="border-t bg-background">
        <div className="flex items-center justify-around px-2 py-2">
          {tabs.map(({ id, icon: Icon, label }) => (
            <Button
              key={id}
              variant={activeTab === id ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab(id)}
              className="flex-1 flex-col h-auto py-2 gap-1"
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{label}</span>
            </Button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Index;
