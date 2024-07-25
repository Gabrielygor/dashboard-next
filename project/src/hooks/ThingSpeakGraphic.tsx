"use client"

import axios from "axios";
import { useState, useEffect } from "react";

interface ThingSpeakGraphic {
    field1?: string[];
    field2?: string[];
    field3?: string[];
    field4?: string[];
}

export function useThingSpeakGraphic() {
    const [graphic, setGraphic] = useState<ThingSpeakGraphic>({});

    useEffect(() => {
        const fetchData = () => {
            axios
                .get('https://api.thingspeak.com/channels/1293177/feeds.json?results=50')
                .then((response) => {
                    const feeds = response.data.feeds;
                    const field1 = feeds.map((feed: any) => feed.field1);
                    const field2 = feeds.map((feed: any) => feed.field2);
                    const field3 = feeds.map((feed: any) => feed.field3);
                    const field4 = feeds.map((feed: any) => feed.field4);
                    setGraphic({ field1, field2, field3, field4 });
                })
                .catch((err) => console.log(err))
        };

        fetchData();
    }, []);

    return { graphic };
}