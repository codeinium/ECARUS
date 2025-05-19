import React, {FC} from "react";
import styles from './header.module.scss'

const Header: FC = () => {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.mainHeaderWrapper}>
                <span>LOGO-ECARUS</span>
                <nav>
                    <a>Главная</a>
                    <a>Пункт сбора</a>
                    <a>Экомаркет</a>
                    <a>О сервисе</a>
                </nav>
            </div>
        </header>
    )
}

export {Header}