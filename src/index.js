import { writeFile } from "fs"
import { getMP3 } from './downloader.js';
import { transcriptAudio } from "./speechToText.js";
import { fixPuntuaction, translateText } from './gptHandler.js';

async function run() {
    try {
        console.log("DOWNLOADING AUDIO FROM YOUTUBE...")
        const downloadAudio = await getMP3("U3aXWizDbQ4");

        console.log("TRANSCRIPTING THE AUDIO...")
        const transcription = await transcriptAudio("C:/Users/layr.franca/Desktop/audios-from-yt/audio.mp3");

        console.log("FIXING THE PUNTUACTION...")
        const fixedText = await fixPuntuaction(transcription);

        console.log("TRANSLATING TO PORTUGUESE...")
        const translatedText = await translateText(fixedText);

        console.log("WRITING CONTENT ON TEXT.TXT")
        const writingFile = writeFile("C:/Users/layr.franca/Desktop/audios-from-yt/text.txt", translatedText, (err) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log("DONE!")
            }
        })
    }
    catch (error) {
        console.error(error);
    }
}

run();