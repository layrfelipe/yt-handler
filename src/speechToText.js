import dotenv from "dotenv"
import { Leopard } from "@picovoice/leopard-node";

dotenv.config()

export function transcriptAudio(filepath) {

    const LeopardHandle = new Leopard(process.env.LEOPARD_API_KEY, { enableAutomaticPunctuation: true });
    
    return new Promise((resolve, reject) => {
        try {
            const speechToTextResult = LeopardHandle.processFile(filepath);
            resolve(speechToTextResult.transcript);
        }
        catch (error) {
            console.log(error);
            reject(error);            
        }
    })
}