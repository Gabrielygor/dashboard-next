import axios from "axios";
import { useState, useEffect } from "react";

interface ThingSpeakData {
    field1?: string;
    field2?: string;
    field3?: string;
    field4?: string;
}

export function useThingSpeakData() {
    const [thingspeak, setThingSpeak] = useState<ThingSpeakData>({});

    useEffect(() => {
        const fetchData = () => {
            axios
                .get('https://api.thingspeak.com/channels/12397/feeds/last.json')
                .then((response) => setThingSpeak(response.data))
                .catch((err) => console.log(err))
                .finally(() => console.log('finally'));
        };

        fetchData();

        console.log("Requisição 3 Minutos");

        const interval = setInterval(fetchData, 180000);

        return () => clearInterval(interval);
    }, []);

    return { thingspeak };
}