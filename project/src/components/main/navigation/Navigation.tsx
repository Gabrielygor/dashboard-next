'use client'

// Navigation.tsx
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from '../../../contexts/LocationContext';

export function Navigation() {
    const { setSelectedLocationId } = useLocation();
    const [isSelectMenuOpen, setIsSelectMenuOpen] = useState(false);
    const [isSelectMenuIcon, setIsSelectMenuIcon] = useState(false);
    const [isSelectedLocal, setIsSelectedLocal] = useState("Labican");

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

    function ReturnLocalNameAndId(id: string, name: string) {
        console.log(id);
        console.log(name);
        setIsSelectedLocal(name);
        setSelectedLocationId(id);
        OpenNavigationMenu();
    }

    return (
        <div className="select">
            <div className="select_toggle" id="select-toggle" onClick={NavigationClickMenu}>
                <span className="select_toggle__select" id="state-select-toggle__state-select">{isSelectedLocal}</span>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`select_toggle__icon ${isSelectMenuIcon ? 'select_toggle__icon__rotate' : ''}`}
                />
            </div>
            <div className={`select_list ${isSelectMenuOpen ? 'select_list__show' : ''}`} id="state-select-list">
                <input type="text" name="" id="state-select-list__search" placeholder="Pesquisar" className="select_list__search" />
                <ul>
                    <li onClick={() => ReturnLocalNameAndId("2461689", "Labican")} className="select_list__item" id="2461689">Labican</li>
                    <li onClick={() => ReturnLocalNameAndId("2311546", "Estação Climatológica UFRN")} className="select_list__item" id="2311546">Estação Climatológica UFRN</li>
                    <li onClick={() => ReturnLocalNameAndId("2507204", "Carnaúba dos Dantas")} className="select_list__item" id="2507204">Carnaúba dos Dantas</li>
                    
                </ul>
            </div>
        </div>
    );
}
