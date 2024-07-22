'use client'

import { useState, useEffect } from "react";
import axios from "axios";

export interface ThingSpeakData {
    field1?: string;
    field2?: string;
    field3?: string;
    field4?: string;
}


export const useThingSpeakData = () => {
    const [data, setData] = useState<ThingSpeakData>({});
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get("https://api.thingspeak.com/channels/12397/feeds/last.json")
            .then((response) => setData(response.data))
            .catch((err) => setError("Failed to fetch data"))
            .finally(() => console.log("finally"));
    }, []);

    return { data, error };
};
