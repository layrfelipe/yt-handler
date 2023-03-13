import YoutubeMp3Downloader from "youtube-mp3-downloader";

export function getMP3(id) {

  return new Promise((resolve, reject) => {
    
    var YD = new YoutubeMp3Downloader({
      "ffmpegPath": "C:/Users/layr.franca/Documents/ffmpeg-n6.0-latest-win64-lgpl-6.0/bin/ffmpeg.exe",
      "outputPath": "C:/Users/layr.franca/Desktop/audios-from-yt",
      "youtubeVideoQuality": "highestaudio",
      "queueParallelism": 2,
      "progressTimeout": 2000,
      "allowWebm": false
    });

    YD.download(id, "audio.mp3");

    YD.on("finished", function(err, data) {
      if (err) {
        reject(err);
      } else {
        console.log(JSON.stringify(data));
        resolve(data);
      }
    });

    YD.on("error", function(error) {
      console.log(error);
      reject(error);
    });

    YD.on("progress", function(progress) {
      console.log(JSON.stringify(progress));
    });
  });
}