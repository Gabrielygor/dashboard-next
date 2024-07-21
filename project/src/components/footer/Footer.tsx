import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer__text">
                <p className="footer-text__source">DashBoard Metereológico UFRN </p>
            </div>

            <a href="#" className="back_to_top_button">
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className="back_to_top_button__icon"
                />
            </a>

        </footer>
    )
}