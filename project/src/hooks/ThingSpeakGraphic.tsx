"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from '../contexts/LocationContext';

interface ThingSpeakGraphic {
    field1?: string[];
    field2?: string[];
    field3?: string[];
    field4?: string[];
    field5?: string[];
    field6?: string[];
    field7?: string[];
}

export function useThingSpeakGraphic() {
    const [graphic, setGraphic] = useState<ThingSpeakGraphic>({});
    const { selectedLocationId } = useLocation();

    useEffect(() => {
        if (!selectedLocationId) return;

        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.thingspeak.com/channels/${selectedLocationId}/feeds.json?results=70`
                );
                const feeds = response.data.feeds || [];
                const field1 = feeds.map((feed: any) => feed.field1);
                const field2 = feeds.map((feed: any) => feed.field2);
                const field3 = feeds.map((feed: any) => feed.field3);
                const field4 = feeds.map((feed: any) => feed.field4);
                const field5 = feeds.map((feed: any) => feed.field5);
                const field6 = feeds.map((feed: any) => feed.field6);
                const field7 = feeds.map((feed: any) => feed.field7);

                setGraphic({ field1, field2, field3, field4, field5, field6, field7 });
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };

        fetchData();
    }, [selectedLocationId]);

    return { graphic };
}
