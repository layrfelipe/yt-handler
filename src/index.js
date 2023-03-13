import { writeFile } from "fs"
import { getMP3 } from './downloader.js';
import { transcriptAudio } from "./speechToText.js";
import { fixPuntuaction, translateText } from './gptHandler.js';

async function run() {
    const destination = `${process.cwd()}\\src\\assets\\`

    try {
        // INSERT VIDEO ID HERE
        const downloadAudio = await getMP3("INSERT_VIDEO_ID_HERE");
        console.log("AUDIO DOWNLOADED")

        console.log()
        console.log("TRANSCRIPTING THE AUDIO...")
        const transcription = await transcriptAudio(`${destination}\\audio.mp3`);

        console.log()
        console.log("FIXING THE PUNTUACTION...")
        const fixedText = await fixPuntuaction(transcription);

        console.log()
        console.log("TRANSLATING TO PORTUGUESE...")
        const translatedText = await translateText(fixedText);

        console.log()
        console.log("WRITING CONTENT...")
        const writingFile = writeFile(`${destination}\\translated.txt`, translatedText, (err) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log()
                console.log("DONE!")
            }
        })
    }
    catch (error) {
        console.error(error);
    }
}

run();