import axios from "axios";
import {settingDdata} from "../../pages/chapter/Investigation/index";

// getMainNodes와 getNodes는 async 함수 내에서 await으로 값을 기다려서 받기 (스프링에서 값을 가져오는 시간)
/* example
    useEffect(async () => {
        const mainNodes = await getMainNodes();
        setMainNodes(mainNodes);
    });
*/

// 중심 노드 정보 얻기
/* return [ {name, chapter, id, content, image, place, **have(해당 노드 얻었는지 여부), visited(노드 읽었는지 여부)**}, ...] */
export const getMainNodes = async (chapter) => {
    const have_nodeIds =  await getMeets(chapter);
    const visited_nodeIds = await getVisitMeets(chapter);
    const all_nodes = await getMainNodesInfo(chapter);

    return mappingDatas(have_nodeIds, visited_nodeIds, all_nodes);
};  

// 주변 노드 정보 얻기
/* return [ {name, kind, chapter, id, content, **have(해당 노드 얻었는지 여부), visited(노드 읽었는지 여부)**}, ...] */
export const getNodes = async (chapter) => {
    const have_nodeIds =  await getItems(chapter);
    const visited_nodeIds = await getVisitItems(chapter);
    const all_nodes = await getNodesInfo(chapter);

    return mappingDatas(have_nodeIds, visited_nodeIds, all_nodes);
}

// 중심 노드 읽음 저장
export const visitMainNode = (chapter, id) => {
    axios
    .get(`node/meet/${chapter}/${id}`)
    .then((res) => {
        console.log("챕터 " + chapter + "의 중심 노드 " + id + "획득!!");
        if(chapter==1 && id==6){
            settingDdata(1, 9, 0 ,0);
        }else if(chapter==3 && id==8){
            settingDdata(1, 9, 0 ,0);
        }
    })
    .catch((error) => {
        console.log(error);
    });
}
// 주변 노드 읽음 저장
export const visitNode = (chapter, id) => {
    axios
    .get(`node/item/${chapter}/${id}`)
    .then((res) => {
        console.log("챕터 " + chapter + "의 주변 노드 " + id + "획득!!");
    })
    .catch((error) => {
        console.log(error);
    });    
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
const getMainNodesInfo = (chapter) => {
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
const getNodesInfo = (chapter) => {
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
const getVisitMeets = (chapter) => {
    return new Promise((resolve) =>
        axios
        .get(`/node/meet/${chapter}`)
        .then(({ data }) => {
            resolve(data);
        })
        .catch((error) => {
            console.log(error);
            resolve();
        })
    );
};
const getVisitItems = (chapter) => {
    return new Promise((resolve) =>
        axios
        .get(`/node/item/${chapter}`)
        .then(({ data }) => {
            resolve(data);
        })
        .catch((error) => {
            console.log(error);
            resolve();
        })
    );
};

const mappingDatas = (have_nodeIds, visited_nodeIds, all_nodes) => {
    for(let node of all_nodes) {
        node.have = false;
        node.visited = false;

        for(let i of have_nodeIds) {
            if(i != node.id) continue;
            node.have = true;

            for(let j of visited_nodeIds) {
                if(i != j) continue;
                node.visited = true;
                break;
            }
            break;
        }
    }
    return all_nodes;   
}