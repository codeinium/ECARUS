import React, {FC} from "react";
import './footer.module.scss'

const Footer : FC = () => {
    return (
        <div className='footer'>
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