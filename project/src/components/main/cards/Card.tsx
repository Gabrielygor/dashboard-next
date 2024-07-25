import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

interface CardProps {
    link: string
    title: string
    unit: string
    className: string
    value: string | undefined
    icon: IconDefinition
}

export function Card({ value, icon, title, unit, className, link }: CardProps) {

    const formattedValue = value ? parseFloat(value).toFixed(1) : "0.0";

    return (
        <a href={link}>
            <section className={className}>
                <div className="status__icon">
                    <FontAwesomeIcon
                        icon={icon}
                    />
                </div>
                <div className="info">
                    <span className="info__total" id="temperatura-valor">
                        {formattedValue}
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