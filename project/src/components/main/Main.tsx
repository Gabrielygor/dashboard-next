"use client"

import { Navigation } from "./navigation/Navigation";
import { Card } from "./cards/Card";
import { GraphicTemperature } from "./graphics/GraphicTemperature";
import { GraphicLuminosity } from "./graphics/GraphicLuminosity";
import { GraphicPressure } from "./graphics/GraphicPressure";
import { GraphicHumidity } from "./graphics/GraphicHumidity";
import { OtherInformation } from "./otherinformation/OtherInformation";
import { faFire, faWind, faTree, faMountain, faTemperatureLow, faDroplet, faLightbulb, faCompass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";


interface ThingSpeakData {
    field1?: string;
    field2?: string;
    field3?: string;
    field4?: string;
}

export function Main() {

    const [thingspeak, setThingSpeak] = useState<ThingSpeakData>({});

    useEffect(() => {
        axios
            .get('https://api.thingspeak.com/channels/12397/feeds/last.json')
            .then((response) => setThingSpeak(response.data))
            .catch((err) => console.log(err))
            .finally(() => console.log('finally'));
    }, []);



    return (

        <main className="container">

            <h1 className="container__title">
                Estações
            </h1>

            <Navigation />

            <div className="cards">

                <Card
                    link="#temperaturaSection"
                    className='status temperatura'
                    title="Temperatura"
                    unit="°C"
                    icon={faTemperatureLow}
                    value={thingspeak.field1}
                />

                <Card
                    link="#pressaoSection"
                    className='status pressao'
                    title="Pressão"
                    unit="hpa"
                    icon={faCompass}
                    value={thingspeak.field1}
                />

                <Card
                    link="#umidadeSection"
                    className='status umidade'
                    title="Umidade"
                    unit="%"
                    icon={faDroplet}
                    value={thingspeak.field1}
                />

                <Card
                    link="#luminosidadeSection"
                    className='status luminosidade'
                    title="Luminosidade"
                    unit=""
                    icon={faLightbulb}
                    value={thingspeak.field1}
                />

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