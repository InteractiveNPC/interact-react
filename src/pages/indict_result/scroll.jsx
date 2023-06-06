import { useState, useEffect, useMemo } from "react";
import { throttle } from 'lodash';

import styles from './paperResult.module.css';
import Axios from "axios";

export default function Scroll() {
    const scrollDiv = document.getElementById('scrollDiv');

    const [scrollEvent, setScrollEvent] = useState(false);

    const onScrollFn = useMemo(() => throttle(() => {
        console.log("scroll");
        if (scrollDiv.scrollY > 60) {
            setScrollEvent(true);
        } else {
            setScrollEvent(false);
        }
    }, 800), []);

    useEffect(() => {
        // console.log(scrollDiv);
        // scrollDiv.addEventListener('scroll', onScrollFn);
    //     return () => {
    //         scrollDiv.removeEventListener('scroll', onScrollFn);
    //     }
    }, []);

    return (
        <div>
            <div className={styles.scrollDiv} id="scrollDiv">
                <div className={styles.scrollDivContent}>test</div>
            </div>
        </div>
    );
}