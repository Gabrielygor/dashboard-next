import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";

export function Pressure() {
    return (
        <a href="#pressaoSection">
            <section className="status pressao">
            <div className="status__icon">
                <FontAwesomeIcon
                    icon={faCompass}
                />
            </div>
            <div className="info">
                <span className="info__total" id="pressao-valor">100</span>
                <span>hpa</span>
                <h2 className="info__label">Pressão</h2>
            </div>
        </section>
        </a >
    )
} 