import React, { FC } from "react";
import {Header} from "../../../shared/ui/Header/Header.tsx";
import {Footer} from "../../../shared/ui/Footer/Footer.tsx";
import {Outlet} from "react-router";
import styles from './MainLayout.module.scss'

interface Props {
    page?: string;
}

const MainLayout : FC<Props> = ({page}) => {
    return (
        <div className={styles.app}>
            <Header />
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export {MainLayout}
