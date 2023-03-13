import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function fixPuntuaction(textInput) {

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Fix the puntuaction on the following text: ${textInput}`,
            max_tokens: 2048
          });

          return response.data.choices[0].text;
    }
    catch (error) {
        console.log(error);
    }
}

export async function translateText(textInput) {

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Translate the following text to portuguese: ${textInput}`,
            max_tokens: 2048
          });
          
          return response.data.choices[0].text;
    }
    catch (error) {
        console.log(error);
    }
}