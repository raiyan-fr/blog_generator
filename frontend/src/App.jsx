import { useState } from 'react';
import axios from 'axios';

function App() {
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [article, setArticle] = useState('');
  const [loading, setLoading] = useState(false);

  const generateArticle = async () => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/generate', {
        topic,
        keywords
      });
      setArticle(res.data.article);
    } catch (error) {
      console.error(error);
      alert('Failed to generate article.');
    }
    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(article);
    alert('Copied!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Article Generator</h1>

        <input
          type="text"
          placeholder="Enter topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full p-3 border rounded mb-4"
        />

        <input
          type="number"
          placeholder="Number of keywords"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          className="w-full p-3 border rounded mb-4"
        />

        <button
          onClick={generateArticle}
          disabled={loading}
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
        >
          {loading ? 'Generating...' : 'Generate Article'}
        </button>

        {article && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Generated Article</h2>
            <div className="relative bg-gray-50 p-4 rounded border overflow-auto max-h-96">
              <pre className="whitespace-pre-wrap">{article}</pre>
              <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600 transition"
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;