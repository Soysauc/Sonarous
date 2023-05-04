import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  organization: 'Sonarous',
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function generateText(prompt: string): Promise<string> {
  const request = {
    prompt: prompt,
    model: 'gpt-3.5-turbo',
    max_tokens: 100,
  };

  const response = await openai.createCompletion(request);

  const text = response.data.choices[0].text;
  if (text === undefined) {
    throw new Error('Generated text is undefined');
  }

  return text;
}
