import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureLow } from "@fortawesome/free-solid-svg-icons";

export function CardTemperature() {
    return (
        <a href="#temperaturaSection">
            <section className="status temperatura">
                <div className="status__icon">
                    <FontAwesomeIcon
                        icon={faTemperatureLow}
                    />
                </div>
                <div className="info">
                    <span className="info__total" id="temperatura-valor"> 100</span>
                    <span>°C
                    </span>
                    <h2 className="info__label">Temperatura</h2>
                </div>
            </section>
        </a>
    )
}