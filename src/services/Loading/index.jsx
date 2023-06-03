import { all_images } from "./config";

export default () => {
    for(let i = 0; i < all_images.length; i++) {
        const url = all_images[i];
        if(url.endsWith(".png") || url.endsWith(".webp")) {
            const img = new Image();
            img.src = process.env.PUBLIC_URL + url;
        }
        else if(url.endsWith(".mp3")) {
            var audio = new Audio();
            audio.src = process.env.PUBLIC_URL + url;
        }
        else if(url.endsWith(".mp4")) {

        }
    }
}