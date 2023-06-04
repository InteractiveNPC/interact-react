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
                loadingIndicator={
                    <div style={{
                        width: "1920px",
                        height: "1080px",
                        background: "black",
                    }}>
                        <img src={require("./loading.gif")}
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}/>
                    </div>
                }
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