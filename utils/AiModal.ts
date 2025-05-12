// import {
//     GoogleGenAI,
//   } from '@google/genai';
  
//   async function main() {
//     const ai = new GoogleGenAI({
//       apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
//     });
//     const config = {
//       responseMimeType: 'text/plain',
//     };
//     const model = 'gemini-1.5-flash';
//     const contents = [
//       {
//         role: 'user',
//         parts: [
//           {
//             text: `INSERT_INPUT_HERE`,
//           },
//         ],
//       },
//     ];
  
//     const response = await ai.models.generateContentStream({
//       model,
//       config,
//       contents,
//     });
//     for await (const chunk of response) {
//       console.log(chunk.text);
//     }
//   }
  
//   main();


  import { GoogleGenAI } from '@google/genai';

export const generateContentFromGemini = async (userPrompt: string): Promise<string> => {
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || '',
  });

  const config = {
    responseMimeType: 'text/plain',
  };

  const model = 'gemini-1.5-flash';

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: userPrompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let finalOutput = '';
  for await (const chunk of response) {
    finalOutput += chunk.text;
  }

  return finalOutput;
};
