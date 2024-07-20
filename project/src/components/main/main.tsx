import { Humidity } from "./cards/cardHumi";
import { Temperature } from "./cards/cardTemp";
import { Navigation } from "./navigation/navigation";
import { Pressure } from "./cards/cardPress";
import { Luminosity } from "./cards/cardLum";
import { GraphicTemperature } from "./graphics/graphicTemp";
import { GraphicLuminosity } from "./graphics/graphicLum";
import { GraphicPressure } from "./graphics/graphicPress";
import { GraphicHumidity } from "./graphics/garphicHumi";


export function Main() {
    return (
        <main className="container">

            <h1 className="container__title">
                Estações
            </h1>

            <Navigation />

            <div className="cards">
                <Temperature />
                <Humidity />
                <Pressure />
                <Luminosity />
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
                        <div className="demais__info">
                            <i className="fa-solid fa-wind demais__info__icon"></i>
                            <h3 className="demais__info__h3">Conforto térmico: </h3><span className="demais__info__span"
                                id="indeceDeConfortoTermico"></span> <span>°C</span>
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
                        </div>


                    </div>
                </section>

                <section className="data-box padrao">
                    <h2 className="data-box__header">
                        Localização
                    </h2>
                    <div className="data-box__body"></div>
                </section>
            </div>

        </main>
    )
}