"use client"

import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from '../contexts/LocationContext';

interface ThingSpeakData {
    field1?: string;
    field2?: string;
    field3?: string;
    field4?: string;
}

export function useThingSpeakData() {
    const [thingspeak, setThingSpeak] = useState<ThingSpeakData>({});
    const { selectedLocationId } = useLocation();

    useEffect(() => {
        const fetchData = () => {
            axios
                .get(`https://api.thingspeak.com/channels/${selectedLocationId}/feeds/last.json`)
                .then((response) => setThingSpeak(response.data))
                .catch((err) => console.log(err));
        };

        fetchData();
        const interval = setInterval(fetchData, 180000);
        return () => clearInterval(interval);
    }, [selectedLocationId]);

    return { thingspeak };
}
