import { useState } from "react";
import { image_files } from "./config";

var Preload = require('react-preload').Preload;

export default ({ App }) => {
    const [ load, setLoad ] = useState(false);
    return (
        <>
        {
            load ? App 
            : <Preload
                loadingIndicator={<div>로딩 중</div>}
                images={image_files}
                autoResolveDelay={3000}
                onError={(err) => {
                    console.log("[ERROR] image loading: " + err);
                    setLoad(true);
                }}
                onSuccess={() => setLoad(true)}
                resolveOnError={true}
                mountChildren={true}
                >
            </Preload>
        }
        </>
    )
};