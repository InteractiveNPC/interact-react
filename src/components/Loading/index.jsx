import { all_files } from "./config";

import { usePreload } from "./hook";
import styles from "./style.module.scss";

export default ({ App }) => {
    const [done, process] = usePreload(all_files);

    if(done) return App;
    return (
        <div className={styles.loading}>
            <img src={require("./loading.gif")}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}/>
            <div>{process}</div>
                
        </div>
    );
};