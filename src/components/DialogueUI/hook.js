import axios from 'axios';

export const setChoiceData = (chapter, scene, raw_choice) => {
    return new Promise((resolve) => {
        axios.get(`/chapter/select/${chapter}/${scene}`)
        .then(({data}) => {
            const choice = [];
            for(let i = 0; i < Object.keys(raw_choice).length; i++) {
                choice[i] = {
                    content: raw_choice[i],
                    visited: data[i],
                };
            }
            console.log(choice);
            resolve(choice);
        })
        .catch(error => console.log(error));
    });
}