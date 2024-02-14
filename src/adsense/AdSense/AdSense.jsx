import styles from './AdSense.module.css';
import { useEffect } from 'react';

export default function AdSense() {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <div className={styles.container}>
            <ins className="adsbygoogle"
                style={{display: "inline-block", width: "230px", height: "500px"}}
                data-ad-client="ca-pub-2596681790141086"
                data-ad-slot="1499032855">
            </ins>
        </div>
    );
};
