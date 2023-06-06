import axios from 'axios';

export const setChoiceData = (chapter, scene, raw_choice) => {
    return new Promise((resolve) => {
        axios.get(`/chapter/select/${chapter}/${scene}`)
        .then(async ({data}) => {
            console.log(scene, raw_choice);
            const choice = [];
            for(let i = 0; i < Object.keys(raw_choice).length; i++) {
                choice[i] = {
                    content: raw_choice[i],
                    visited: (scene == "-1" || scene == "-2") && i == 0 ? true : data[i],
                };
                
            }
            console.log(chapter, scene);
            if ((chapter == "1" && scene == "-2") || (chapter == "1" && scene == "10")) {
                choice[0].visited = true;
                choice[1].visited = await progress_dialogue(1, 9);
                
            }
            if ((chapter == "3" && scene == "-2") || (chapter == "3" && scene == "12")) {
                choice[0].visited = true;
                choice[1].visited = await progress_dialogue(3, 11);
                console.log(choice);
            }
            
            resolve(choice);
        })
        .catch(error => console.log(error));
    });
}

const progress_dialogue = (chapter, scene) => {
    return new Promise((resolve) => {
        axios.get(`/chapter/progress/${chapter}/${scene}`)
        .then(({data}) => {
            console.log(data);
            resolve(data == true);
        })
        .catch(error => resolve(false));
    });
}