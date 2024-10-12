import axios from 'axios';

const openaiApi = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export const generateText = async (prompt: string) => {
  try {
    const response = await openaiApi.post('/engines/davinci-codex/completions', {
      prompt,
      max_tokens: 100,
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating text:', error);
    throw error;
  }
};