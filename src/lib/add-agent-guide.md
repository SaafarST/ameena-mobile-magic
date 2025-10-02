# How to Add a New Agent to Ameena

## Step 1: Add Backend Agent (Python)
Create a new agent file in your Modal.com project:

```python
# agents/your_new_agent.py
class YourNewAgent:
    def __init__(self):
        pass
    
    def process(self, input_data):
        # Your agent logic here
        return {"result": "processed data"}

# Create instance
your_new_agent = YourNewAgent()
```

## Step 2: Add API Endpoint
In `api.py`, add a new endpoint:

```python
@app.get("/your-feature")
async def your_feature(query: str = Query(...)):
    result = your_new_agent.process(query)
    return JSONResponse(result)
```

## Step 3: Update Frontend API Client
In `src/lib/api.ts`, add the new API method:

```typescript
export const api = {
  // ... existing methods ...
  
  yourNewFeature: async (query: string) => {
    const response = await fetch(`${BASE_URL}/your-feature?query=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error('Request failed');
    return await response.json();
  }
};
```

## Step 4: Create Frontend Page
Create `src/pages/YourFeature.tsx`:

```typescript
import { useState } from 'react';
import { YourIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { api } from '@/lib/api';

export default function YourFeature() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    try {
      const data = await api.yourNewFeature(input);
      setResult(data.result);
    } catch (error) {
      toast({
        title: 'Хатогӣ',
        description: 'Дархост иҷро нашуд',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Your Feature</h1>
      
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter something..."
      />
      
      <Button onClick={handleSubmit} disabled={isLoading}>
        Process
      </Button>
      
      {result && <div className="p-4 bg-card rounded-lg">{result}</div>}
    </div>
  );
}
```

## Step 5: Add to Navigation
In `src/pages/Index.tsx`, add your new tab:

```typescript
import YourFeature from './YourFeature';

const tabs = [
  // ... existing tabs ...
  { id: 'yourfeature' as TabType, icon: YourIcon, label: 'Your Feature' }
];

// In the main return:
{activeTab === 'yourfeature' && <YourFeature />}
```

That's it! Your new agent is integrated. 🎉
