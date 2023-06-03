import { all_images } from "./config";

export default () => {
    for(let i = 0; i < all_images.length; i++) {
        if(all_images[i].endsWith(".png") || all_images[i].endsWith(".webp")) {
            const img = new Image();
            img.src = process.env.PUBLIC_URL + all_images[i];
        }
    }
}