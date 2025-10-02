// API client for Modal.com backend
// TODO: Update BASE_URL with your Modal.com API endpoint
const BASE_URL = import.meta.env.VITE_API_URL || 'https://your-app.modal.run';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface SearchResult {
  title: string;
  snippet: string;
  url: string;
  source?: string;
}

interface TranslateRequest {
  text: string;
  source_lang: string;
  target_lang: string;
}

interface DocumentRequest {
  template_id: string;
  data: Record<string, any>;
}

export const api = {
  chat: async (messages: ChatMessage[]): Promise<string> => {
    const response = await fetch(`${BASE_URL}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages })
    });
    if (!response.ok) throw new Error('Chat request failed');
    const data = await response.json();
    return data.response;
  },

  search: async (query: string): Promise<SearchResult[]> => {
    const response = await fetch(`${BASE_URL}/search?q=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error('Search request failed');
    const data = await response.json();
    return data.results || [];
  },

  translate: async (req: TranslateRequest): Promise<string> => {
    const response = await fetch(`${BASE_URL}/translate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req)
    });
    if (!response.ok) throw new Error('Translation request failed');
    const data = await response.json();
    return data.translation;
  },

  getDocumentTemplates: async () => {
    const response = await fetch(`${BASE_URL}/documents/templates`);
    if (!response.ok) throw new Error('Failed to fetch templates');
    const data = await response.json();
    return data.templates || [];
  },

  generateDocument: async (req: DocumentRequest): Promise<{ pdf_url: string }> => {
    const response = await fetch(`${BASE_URL}/documents/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req)
    });
    if (!response.ok) throw new Error('Document generation failed');
    return await response.json();
  }
};
