import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"


interface OtherInformationProps {
    text: string
    id: string
    icon: IconDefinition
    unit: string
    value: String
}


export function OtherInformation({ text, id, icon, unit, value }: OtherInformationProps) {
    return (
        <div className="demais__info">

            <FontAwesomeIcon
                icon={icon}
            />
            <h3 className="demais__info__h3">
                {text}
            </h3>
            <span className="demais__info__span" id={id}>
                {value}
            </span>
            <span>
                {unit}
            </span>

        </div>
    )
}