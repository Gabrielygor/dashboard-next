import { Navigation } from "../navigation/navigation";
import style from "./main.module.css"



export function Main() {
    return (
        <main className={style.container}>

            <h1 className={style.container__title}>
                Estações
            </h1>

            <Navigation />
        </main>
    )
}