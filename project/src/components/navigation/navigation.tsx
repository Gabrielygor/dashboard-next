'use client'

import { useState } from "react";
import style from "./navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


//Corrigir ? 

export function Navigation() {
    const [isSelectMenuOpen, setIsSelectMenuOpen] = useState(false);
    const [isSelectMenuIcon, setIsSelectMenuIcon] = useState(false)


    function OpenNavigationMenu() {
        setIsSelectMenuOpen(!isSelectMenuOpen);
    }

    function SwitchNavigationMenuIcon() {
        setIsSelectMenuIcon(!isSelectMenuIcon)
    }

    function NavigationClickMenu() {
        OpenNavigationMenu();
        SwitchNavigationMenuIcon();
    }

    return (
        <div className={style.select} >
            <div className={style.select_toggle} id="select-toggle" onClick={NavigationClickMenu}>
                <span className={style.select_toggle__select} id="state-select-toggle__state-select">Labican</span>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`${style.select_toggle__icon} ${isSelectMenuIcon ? style.select_toggle__icon__rotate : ''}`}
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