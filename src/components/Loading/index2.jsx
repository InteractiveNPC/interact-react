import { useState } from "react";
import { image_files } from "./config";

var Preload = require('react-preload').Preload;

export default ({ App }) => {


    return (
        <Preload
        loadingIndicator={<div>로딩 중</div>}
        images={image_files}
        autoResolveDelay={3000}
        onError={(err) => {
            console.log("[ERROR] image loading: " + err);
            onLoad();
        }}
        onSuccess={onLoad}
        resolveOnError={true}
        mountChildren={true}
        >
        </Preload>
    )
  }