import { Navigation } from "./navigation/Navigation";
import { CardHumidity } from "./cards/CardHumidity";
import { CardTemperature } from "./cards/CardTemperature";
import { CardPressure } from "./cards/CardPressure";
import { CardLuminosity } from "./cards/CardLuminosity";
import { GraphicTemperature } from "./graphics/GraphicTemperature";
import { GraphicLuminosity } from "./graphics/GraphicLuminosity";
import { GraphicPressure } from "./graphics/GraphicPressure";
import { GraphicHumidity } from "./graphics/GraphicHumidity";
import { OtherInformation } from "./otherinformation/OtherInformation";
import { faFire, faWind, faTree, faMountain } from "@fortawesome/free-solid-svg-icons";


export function Main() {

    return (

        <main className="container">

            <h1 className="container__title">
                Estações
            </h1>

            <Navigation />

            <div className="cards">
                <CardTemperature />
                <CardHumidity />
                <CardPressure />
                <CardLuminosity />
            </div>

            <div className="graficos">

                <GraphicTemperature />
                <GraphicLuminosity />
                <GraphicPressure />
                <GraphicHumidity />




                <section className="data-box padrao">
                    <h2 className="data-box__header">
                        ?????
                    </h2>
                    <div className="data-box__body">
                    </div>
                </section>

                <section className="data-box padrao">
                    <h2 className="data-box__header">
                        Conforto Ambiental e Qualidade do Ar
                    </h2>
                    <div className="data-box__body demais__info__container">

                        <OtherInformation
                            text="Conforto térmico:"
                            id="indeceDeConfortoTermico"
                            icon={faWind}
                            unit="°C"
                        />

                        <OtherInformation
                            text="indice de calor:"
                            id="indiceDeCalor"
                            icon={faFire}
                            unit="°C"
                        />

                        <OtherInformation
                            text="ponto de orvalho:"
                            id="pontoDeOrvalho"
                            icon={faTree}
                            unit="°C"
                        />

                        <OtherInformation
                            text="Altitude Aproximada:"
                            id="altitudeAproximada"
                            icon={faMountain}
                            unit="M"
                        />

                        {/* <div className="demais__info">
                            <i className="fa-solid fa-wind demais__info__icon"></i>
                            <h3 className="demais__info__h3">Conforto térmico: </h3><span className="demais__info__span"
                                id="indeceDeConfortoTermico"></span> <span></span>
                        </div>

                        <div className="demais__info">
                            <i className="fa-solid fa-fire demais__info__icon"></i>
                            <h3 className="demais__info__h3">indice de calor: </h3><span className="demais__info__span"
                                id="indiceDeCalor"></span> <span>°C</span>
                        </div>


                        <div className="demais__info">
                            <i className="fa-brands fa-pagelines demais__info__icon"></i>
                            <h3 className="demais__info__h3">Ponto de orvalho: </h3><span className="demais__info__span"
                                id="pontoDeOrvalho"></span> <span>°C</span>
                        </div>

                        <div className="demais__info">
                            <i className="fa-solid fa-mountain demais__info__icon"></i>
                            <h3 className="demais__info__h3">Altitude Aproximada: </h3><span className="demais__info__span"
                                id="altitudeAproximada"></span> <span>M</span>
                        </div> */}
                    </div>
                </section>

                <section className="data-box padrao">
                    <h2 className="data-box__header">
                        Localização
                    </h2>
                    <div className="data-box__body">

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.8212001289115!2d-37.08424161410223!3d-6.466588858249297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7afed7934494ec7%3A0xbc86346e5a924e94!2sLABICAN%20-%20Laborat%C3%B3rio%20de%20Intelig%C3%AAncia%20Computacional%20Aplicada%20a%20Neg%C3%B3cios!5e0!3m2!1spt-BR!2sbr!4v1721566508914!5m2!1spt-BR!2sbr"
                        width="100%" height="360" />


                    </div>
                </section>
            </div>

        </main>
    )
}