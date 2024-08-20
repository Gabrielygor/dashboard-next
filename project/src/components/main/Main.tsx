"use client"

import { Navigation } from "./navigation/Navigation";
import { Card } from "./cards/Card";
import { Graphic } from "./graphics/Graphic";
import { OtherInformation } from "./otherinformation/OtherInformation";
import { faFire, faWind, faTree, faMountain, faTemperatureLow, faDroplet, faLightbulb, faCompass } from "@fortawesome/free-solid-svg-icons";
import { useThingSpeakData } from "@/hooks/ThingSpeakData";
import { useThingSpeakGraphic } from "@/hooks/ThingSpeakGraphic";
import { useLocation } from "@/contexts/LocationContext";

export function Main() {

    const { selectedLocationId } = useLocation();
    const { thingspeak } = useThingSpeakData();
    const { graphic } = useThingSpeakGraphic();


    const temperaturaAtual: number = Number(thingspeak.field1);
    const umidadeAtual: number = Number(thingspeak.field2);
    const pressaoAtual: number = Number(thingspeak.field5)

    function calcHeatIndex() {
        const heatIndex = temperaturaAtual - (0.55 - 0.0055 * umidadeAtual) * (temperaturaAtual - 14.5);
        return heatIndex
    }

    function calcIndiceDeCalor() {

        let indiceCalor = temperaturaAtual - ((0.55 - 0.0055 * umidadeAtual) * (temperaturaAtual - 58));
        indiceCalor = Math.round(indiceCalor * 10) / 10;
        return indiceCalor;
    }

    function calcPontoDeOrvalho() {
        const pontodeOrvalho = temperaturaAtual - ((100 - umidadeAtual) / 5);
        return pontodeOrvalho;
    }

    function calcAltitudeAproximada() {
        const P0 = 1013.25; // Pressão padrão ao nível do mar em hPa
        const T = 288.15;   // Temperatura padrão ao nível do mar em Kelvin
        const L = 0.0065;   // Taxa de decréscimo da temperatura em K/m
        const R = 287.05;   // Constante dos gases perfeitos para ar seco em J/(kg·K)
        const g = 9.80665;  // Aceleração da gravidade em m/s²
        const h = (T / L) * (1 - Math.pow(pressaoAtual / P0, R * L / g));

        return h;
    }

    // 2311546assssssssssssssssssssssssss
    // 2311546assssssssssssssssssssssssss


    const temp: number = Number(thingspeak.field2);
    const umi: number = Number(thingspeak.field1);
    const pres2311546: number = Number(thingspeak.field7)
    const pres2507204: number = Number(thingspeak.field6)

    function calcHeatIndex2311546() {
        const heatIndex = temp - (0.55 - 0.0055 * umi) * (temp - 14.5);
        return heatIndex
    }

    function calcIndiceDeCalor2311546() {

        let indiceCalor = temp - ((0.55 - 0.0055 * umi) * (temp - 58));
        indiceCalor = Math.round(indiceCalor * 10) / 10;
        return indiceCalor;
    }

    function calcPontoDeOrvalho2311546() {
        const pontodeOrvalho = temp - ((100 - umi) / 5);
        return pontodeOrvalho;
    }

    function calcAltitudeAproximada2311546() {
        const P0 = 1013.25; // Pressão padrão ao nível do mar em hPa
        const T = 288.15;   // Temperatura padrão ao nível do mar em Kelvin
        const L = 0.0065;   // Taxa de decréscimo da temperatura em K/m
        const R = 287.05;   // Constante dos gases perfeitos para ar seco em J/(kg·K)
        const g = 9.80665;  // Aceleração da gravidade em m/s²
        const h = (T / L) * (1 - Math.pow(pres2311546 / P0, R * L / g));

        return h;
    }

    function calcAltitudeAproximada2507204() {
        const P0 = 1013.25; // Pressão padrão ao nível do mar em hPa
        const T = 288.15;   // Temperatura padrão ao nível do mar em Kelvin
        const L = 0.0065;   // Taxa de decréscimo da temperatura em K/m
        const R = 287.05;   // Constante dos gases perfeitos para ar seco em J/(kg·K)
        const g = 9.80665;  // Aceleração da gravidade em m/s²
        const h = (T / L) * (1 - Math.pow(pres2507204 / P0, R * L / g));

        return h;
    }


    const heatIndexValue = calcHeatIndex();
    const indiceCalorValue = calcIndiceDeCalor();
    const pontoDeOrvalhoValue = calcPontoDeOrvalho();
    const altitudeValue = calcAltitudeAproximada();

    //Gambiarra

    const Ct = calcHeatIndex2311546()
    const IDC = calcIndiceDeCalor2311546()
    const PDO = calcPontoDeOrvalho2311546()
    const Press1 = calcAltitudeAproximada2311546()
    const Press2 = calcAltitudeAproximada2507204()


    return (

        <main className="container">

            <h1 className="container__title">
                Estações
            </h1>

            <Navigation />

            <div className="cards">

                {/* 
                    2461689 Labican
                    2311546 Estação Meteorológica UFRN
                    2507204 Carnaúba dos Dantas 
                */}

                {selectedLocationId === '2461689' && ( //LABICAN
                    <>
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
                            value={thingspeak.field5}
                        />

                        <Card
                            link="#umidadeSection"
                            className='status umidade'
                            title="Umidade"
                            unit="%"
                            icon={faDroplet}
                            value={thingspeak.field2}
                        />

                        <Card
                            link="#luminosidadeSection"
                            className='status luminosidade'
                            title="Luminosidade"
                            unit=""
                            icon={faLightbulb}
                            value={thingspeak.field3}
                        />
                    </>
                )}

                {selectedLocationId === '2311546' && ( //Estação Meteorológica UFRN
                    <>
                        <Card
                            link="#temperaturaSection"
                            className='status temperatura'
                            title="Temperatura"
                            unit="°C"
                            icon={faTemperatureLow}
                            value={thingspeak.field2}
                        />

                        <Card
                            link="#pressaoSection"
                            className='status pressao'
                            title="Pressão"
                            unit="hpa"
                            icon={faCompass}
                            value={thingspeak.field7}
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
                            value={thingspeak.field3}
                        />
                    </>
                )}

                {selectedLocationId === '2507204' && ( //Carnauba dos Dantas
                    <>
                        <Card
                            link="#temperaturaSection"
                            className='status temperatura'
                            title="Temperatura"
                            unit="°C"
                            icon={faTemperatureLow}
                            value={thingspeak.field2}
                        />

                        <Card
                            link="#pressaoSection"
                            className='status pressao'
                            title="Pressão"
                            unit="hpa"
                            icon={faCompass}
                            value={thingspeak.field6}
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
                            value={thingspeak.field3}
                        />
                    </>
                )}

            </div>

            <div className="graficos">

                {selectedLocationId == '2461689' && (
                    <>
                        <Graphic
                            value={graphic.field1}
                            name="Temperatura"
                            color="#DC143C"
                            id="temperaturaGrafico"
                            className="data-box temperatura-grafico"
                            sectionId='temperaturaSection'
                            height='500'
                        />

                        <Graphic
                            value={graphic.field3}
                            name="Luminosidade"
                            color="#FFD700"
                            id="luminosidadeGrafico"
                            className="data-box"
                            sectionId='luminosidadeSection'
                            height='200'

                        />

                        <Graphic
                            value={graphic.field5}
                            name="Pressão"
                            color="#00FF00"
                            id="pressaoGrafico"
                            className="data-box pressao-grafico"
                            sectionId='pressaoSection'
                            height='200'

                        />

                        <Graphic
                            value={graphic.field2}
                            name="Umidade"
                            color="#4169E1"
                            id="umidadeGrafico"
                            className="data-box humidade-grafico"
                            sectionId='umidadeSection'
                            height='350'

                        />
                    </>
                )}

                {selectedLocationId == '2311546' && (
                    <>
                        <Graphic
                            value={graphic.field2}
                            name="Temperatura"
                            color="#DC143C"
                            id="temperaturaGrafico"
                            className="data-box temperatura-grafico"
                            sectionId='temperaturaSection'
                            height='500'
                        />

                        <Graphic
                            value={graphic.field3}
                            name="Luminosidade"
                            color="#FFD700"
                            id="luminosidadeGrafico"
                            className="data-box"
                            sectionId='luminosidadeSection'
                            height='200'

                        />

                        <Graphic
                            value={graphic.field7}
                            name="Pressão"
                            color="#00FF00"
                            id="pressaoGrafico"
                            className="data-box pressao-grafico"
                            sectionId='pressaoSection'
                            height='200'

                        />

                        <Graphic
                            value={graphic.field1}
                            name="Umidade"
                            color="#4169E1"
                            id="umidadeGrafico"
                            className="data-box humidade-grafico"
                            sectionId='umidadeSection'
                            height='350'

                        />
                    </>
                )}

                {selectedLocationId == '2507204' && (
                    <>
                        <Graphic
                            value={graphic.field2}
                            name="Temperatura"
                            color="#DC143C"
                            id="temperaturaGrafico"
                            className="data-box temperatura-grafico"
                            sectionId='temperaturaSection'
                            height='500'
                        />

                        <Graphic
                            value={graphic.field3}
                            name="Luminosidade"
                            color="#FFD700"
                            id="luminosidadeGrafico"
                            className="data-box"
                            sectionId='luminosidadeSection'
                            height='200'

                        />

                        <Graphic
                            value={graphic.field6}
                            name="Pressão"
                            color="#00FF00"
                            id="pressaoGrafico"
                            className="data-box pressao-grafico"
                            sectionId='pressaoSection'
                            height='200'

                        />

                        <Graphic
                            value={graphic.field1}
                            name="Umidade"
                            color="#4169E1"
                            id="umidadeGrafico"
                            className="data-box humidade-grafico"
                            sectionId='umidadeSection'
                            height='350'

                        />
                    </>
                )}

                <section className="data-box padrao">
                    <h2 className="data-box__header">
                        Conforto Ambiental e Qualidade do Ar
                    </h2>
                    <div className="data-box__body demais__info__container">

                        {selectedLocationId === '2461689' && (
                            <>
                                <OtherInformation
                                    text="Conforto térmico:"
                                    id="indeceDeConfortoTermico"
                                    icon={faWind}
                                    unit="°C"
                                    value={heatIndexValue.toFixed(1)}
                                />

                                <OtherInformation
                                    text="indice de calor:"
                                    id="indiceDeCalor"
                                    icon={faFire}
                                    unit="°C"
                                    value={indiceCalorValue.toFixed(1)}
                                />

                                <OtherInformation
                                    text="ponto de orvalho:"
                                    id="pontoDeOrvalho"
                                    icon={faTree}
                                    unit="°C"
                                    value={pontoDeOrvalhoValue.toFixed(1)}
                                />

                                <OtherInformation
                                    text="Altitude Aproximada:"
                                    id="altitudeAproximada"
                                    icon={faMountain}
                                    unit="M"
                                    value={altitudeValue.toFixed(1)}
                                />
                            </>
                        )}

                        {selectedLocationId === '2311546' && (
                            <>
                                <OtherInformation
                                    text="Conforto térmico:"
                                    id="indeceDeConfortoTermico"
                                    icon={faWind}
                                    unit="°C"
                                    value={Ct.toFixed(1)}
                                />

                                <OtherInformation
                                    text="indice de calor:"
                                    id="indiceDeCalor"
                                    icon={faFire}
                                    unit="°C"
                                    value={IDC.toFixed(1)}
                                />

                                <OtherInformation
                                    text="ponto de orvalho:"
                                    id="pontoDeOrvalho"
                                    icon={faTree}
                                    unit="°C"
                                    value={PDO.toFixed(1)}
                                />

                                <OtherInformation
                                    text="Altitude Aproximada:"
                                    id="altitudeAproximada"
                                    icon={faMountain}
                                    unit="M"
                                    value={Press1.toFixed(1)}
                                />
                            </>
                        )}

                        {selectedLocationId === '2507204' && (
                            <>
                                <OtherInformation
                                    text="Conforto térmico:"
                                    id="indeceDeConfortoTermico"
                                    icon={faWind}
                                    unit="°C"
                                    value={Ct.toFixed(1)}
                                />

                                <OtherInformation
                                    text="indice de calor:"
                                    id="indiceDeCalor"
                                    icon={faFire}
                                    unit="°C"
                                    value={IDC.toFixed(1)}
                                />

                                <OtherInformation
                                    text="ponto de orvalho:"
                                    id="pontoDeOrvalho"
                                    icon={faTree}
                                    unit="°C"
                                    value={PDO.toFixed(1)}
                                />

                                <OtherInformation
                                    text="Altitude Aproximada:"
                                    id="altitudeAproximada"
                                    icon={faMountain}
                                    unit="M"
                                    value={Press2.toFixed(1)}
                                />
                            </>
                        )}

                    </div>
                </section>

                <section className="data-box padrao map">
                    <h2 className="data-box__header">
                        Localização
                    </h2>
                    <div className="data-box__body">

                        {selectedLocationId === '2461689' && (
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.8212001289115!2d-37.08424161410223!3d-6.466588858249297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7afed7934494ec7%3A0xbc86346e5a924e94!2sLABICAN%20-%20Laborat%C3%B3rio%20de%20Intelig%C3%AAncia%20Computacional%20Aplicada%20a%20Neg%C3%B3cios!5e0!3m2!1spt-BR!2sbr!4v1721566508914!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="360"
                            />
                        )}

                        {selectedLocationId === '2311546' && (
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.750399699382!2d-37.08443176050649!3d-6.467647038933336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7afedab1b879121%3A0x55a2f46645b6dbd2!2sCentro%20de%20Ensino%20Superior%20do%20Serid%C3%B3%20-%20UFRN!5e0!3m2!1spt-BR!2sbr!4v1722548731103!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="360"
                            />
                        )}

                        {selectedLocationId === '2507204' && (
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15854.918672107133!2d-36.60374613949603!3d-6.555771744996462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ae4a9f5006e7a7%3A0x285056c80b1677e0!2sCarna%C3%BAba%20dos%20Dantas%2C%20RN%2C%2059374-000!5e0!3m2!1spt-BR!2sbr!4v1722548846720!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="360"
                            />
                        )}

                    </div>
                </section>
            </div>

        </main >
    )
}