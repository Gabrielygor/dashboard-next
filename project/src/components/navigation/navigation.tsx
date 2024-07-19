'use client'

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export function Navigation() {
    const [isSelectMenuOpen, setIsSelectMenuOpen] = useState(false);
    const [isSelectMenuIcon, setIsSelectMenuIcon] = useState(false);

    function OpenNavigationMenu() {
        setIsSelectMenuOpen(!isSelectMenuOpen);
    }

    function SwitchNavigationMenuIcon() {
        setIsSelectMenuIcon(!isSelectMenuIcon);
    }

    function NavigationClickMenu() {
        OpenNavigationMenu();
        SwitchNavigationMenuIcon();
    }

    function ReturnId(id: string) {
        console.log(id);
        OpenNavigationMenu();
    }

    return (
        <div className="select">
            <div className="select_toggle" id="select-toggle" onClick={NavigationClickMenu}>
                <span className="select_toggle__select" id="state-select-toggle__state-select">Labican</span>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`select_toggle__icon ${isSelectMenuIcon ? 'select_toggle__icon__rotate' : ''}`}
                />
            </div>
            <div className={`select_list ${isSelectMenuOpen ? 'select_list__show' : ''}`} id="state-select-list">
                <input type="text" name="" id="state-select-list__search" placeholder="Pesquisar" className="select_list__search" />
                <ul>
                    <li onClick={() => ReturnId("1293177")} className="select_list__item" id="1293177">Labican</li>
                </ul>
            </div>
        </div>
    );
}
