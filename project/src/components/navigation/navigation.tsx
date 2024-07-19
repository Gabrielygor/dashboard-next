'use client'

import { useState } from "react";
import style from "./navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


//Corrigir ? 

export function Navigation() {
    const [isSelectMenuOpen, setIsSelectMenuOpen] = useState(false);

    function OpenNavigationMenu() {
        setIsSelectMenuOpen(!isSelectMenuOpen);
    }

    return (
        <div className={style.select} >
            <div className={style.select_toggle} id="select-toggle" onClick={OpenNavigationMenu}>
                <span className={style.select_toggle__select} id="state-select-toggle__state-select">Labican</span>
                {/* <i className="fas fa-chevron-down state-select-toggle__icon" id="state-select-toggle__icon"></i> */}
                <FontAwesomeIcon
                    icon={faChevronDown}
                />
            </div>
            <div className={`${style.select_list} ${isSelectMenuOpen ? style.select_list__show : ''}`} id="state-select-list">
                <input type="text" name="" id="state-select-list__search" placeholder="Pesquisar" className={style.select_list__search} />
                <ul>
                    <li className={style.select_list__item} data-id="1293177">Labican</li>
                </ul>
            </div>
        </div>
    );
}