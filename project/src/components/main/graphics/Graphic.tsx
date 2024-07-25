"use client"

import { useEffect } from "react";

interface GraphicProps {
    value: string[] | undefined;
    name: string
    color: string
    id:string
    className:string
    sectionId:string
    height: string
}

export function Graphic({ value , name, color, id , className, sectionId, height}: GraphicProps) {
    useEffect(() => {
        // Importação da biblioteca ApexCharts dentro do useEffect
        import("apexcharts").then(ApexCharts => {
            if (value && value.length > 0) {
                const options = {
                    chart: {
                        type: 'line',
                        height: height
                    },

                    series: [{
                        name: name,
                        data: value.map(v => parseFloat(v)) // Convertendo os valores para números
                    }],
                    
                    colors: [color],

                    xaxis: {
                        categories: [''], 
                        
                        labels: {
                            style: {
                                colors: 'var(--bg-eixos-graficos)', // Define a cor da fonte dos rótulos
                                fontSize: '12px',
                                fontFamily: 'Arial, sans-serif',
                                fontWeight: 400
                            }
                        }
                    },

                    yaxis: {
                        labels: {
                            style: {
                                colors: 'var(--clr-scrollbar)', // Define a cor da fonte do eixo y
                                fontSize: '12px',
                                fontFamily: 'Arial, sans-serif',
                                fontWeight: 400
                            }
                        }
                    },

                    legend: {
                        labels: {
                            useSeriesColors: false,
                        }
                    }
                };

                const chart = new ApexCharts.default(document.querySelector(`#${id}`), options);
                chart.render();

                return () => {
                    chart.destroy(); // Destruir o gráfico ao desmontar o componente
                };
            }
        });
    }, [value, name, color, id, className, sectionId, height]);

    return (
        <section className={className} id={sectionId}>
            <h2 className="data-box__header">
                {name}
            </h2>
            <div className="data-box__body" id={id}>
                {!value ? "Carregando..." : null}
            </div>
        </section>
    );
}

//'11:20' , '11:22' , '11:23' , '11:25' , '11:27' , '11:28' , '11:30' , '11:32' , '11:34' , '11:35'