import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

export function CardHumidity() {
    return (
        <a href="#umidadeSection">
            <section className="status umidade">
                <div className="status__icon">
                    <FontAwesomeIcon
                        icon={faDroplet}
                    />
                </div>
                <div className="info">
                    <span className="info__total" id="umidade-valor">67</span>
                    <span>%</span>
                    <h2 className="info__label">Umidade</h2>
                </div>
            </section>
        </a>
    )
}