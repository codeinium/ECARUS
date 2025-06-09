import React, {FC} from "react";
import styles from './Footer.module.scss'

const Footer : FC = () => {
    return (
        <div className={styles.mainFooter}>
            <span>
                info@ecorus.ru
            </span>
            <span>
                +7 (800) 880-88-88
            </span>
        </div>
    )
}

export {Footer}