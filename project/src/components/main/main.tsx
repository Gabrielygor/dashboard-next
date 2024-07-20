import { Humidity } from "./cards/cardHumi";
import { Temperature } from "./cards/cardTemp";
import { Navigation } from "./navigation/navigation";
import { Pressure } from "./cards/cardPress";
import { Luminosity } from "./cards/cardLum";


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

        </main>
    )
}