import axios from "axios";

// 중심 노드 얻기
/* [ {name, chapter, id, content, image, place, visited(노드 읽었는지 여부)}, ...] */
export const getMainNodes = async (chapter) => {
    const have_nodeIds =  await getMeets(chapter);
    const all_nodes = await mappingMainNodesInfo(chapter);

    const nodes = [];
    for(let i of have_nodeIds) {
        for(let j = 0; j < all_nodes.length; j++) {
            if(i === all_nodes[j].id) {
                nodes.push({...all_nodes[j], visited: false});
            }
        } 
    }
    return nodes.sort((a, b) => a.id - b.id);
};

// 주변 노드 얻기
/* [ {name, kind, chapter, id, content, visited(노드 읽었는지 여부)}, ...] */
export const getNodes = async (chapter) => {
    const have_nodeIds =  await getItems(chapter);
    const all_nodes = await mappingNodesInfo(chapter);

    const nodes = [];
    for(let i of have_nodeIds) {
        for(let j = 0; j < all_nodes.length; j++) {
            if(i === all_nodes[j].id) {
                nodes.push({...all_nodes[j], visited: false});
            }
        } 
    }
    return nodes.sort((a, b) => a.id - b.id);
}

const getMeets = (chapter) => {
    return new Promise((resolve) =>
        axios
        .get(`/meet/${chapter}`)
        .then(({ data }) => {
            resolve(data);
        })
        .catch((error) => {
            console.log(error);
            resolve();
        })
    );
};
const getItems = (chapter) => {
    return new Promise((resolve) =>
        axios
        .get(`/item/${chapter}`)
        .then(({ data }) => {
            resolve(data);
        })
        .catch((error) => {
            console.log(error);
            resolve();
        })
    );
};
const mappingMainNodesInfo = (chapter) => {
    return new Promise((resolve) =>
        axios
        .get(`/item/getCharacters/${chapter}`)
        .then(({ data }) => {
            resolve(data);
        })
        .catch((error) => {
            console.log(error);
            resolve();
        })
    );
};
const mappingNodesInfo = (chapter) => {
    return new Promise((resolve) =>
        axios
        .get(`/item/getItems/${chapter}`)
        .then(({ data }) => {
            resolve(data);
        })
        .catch((error) => {
            console.log(error);
            resolve();
        })
    );
};