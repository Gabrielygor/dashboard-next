import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export function Luminosity() {
    return (
        <a href="#luminosidadeSection">
            <section className="status luminosidade">
                <div className="status__icon">
                    <FontAwesomeIcon
                        icon={faLightbulb}
                    />
                </div>
                <div className="info">
                    <span className="info__total" id="luminosidade-valor">1000</span>
                    <h2 className="info__label">Luminosidade</h2>
                </div>
            </section>
        </a>
    )
} 