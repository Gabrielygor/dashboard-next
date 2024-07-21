import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

interface CardProps {
    title: string
    unit: string
    className: string
    value: string | undefined
    icon: IconDefinition
}

export function Card({ value, icon, title, unit, className }: CardProps) {
    return (
        <a href="#temperaturaSection">
            <section className={className}>
                <div className="status__icon">
                    <FontAwesomeIcon
                        icon={icon}
                    />
                </div>
                <div className="info">
                    <span className="info__total" id="temperatura-valor">
                        {value}
                    </span>
                    <span>
                        {unit}
                    </span>
                    <h2 className="info__label">{title}</h2>
                </div>
            </section>
        </a>
    )
}