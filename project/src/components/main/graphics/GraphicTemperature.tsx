"use client"

import { useEffect } from "react";

interface GraphicTemperatureProps {
    value: string[] | undefined;
}

export function GraphicTemperature({ value }: GraphicTemperatureProps) {
    useEffect(() => {
        // Importação da biblioteca ApexCharts dentro do useEffect
        import("apexcharts").then(ApexCharts => {
            if (value && value.length > 0) {
                const options = {
                    chart: {
                        type: 'line',
                        height: 500
                    },
                    series: [{
                        name: 'Temperature',
                        data: value.map(v => parseFloat(v)) // Convertendo os valores para números
                    }],
                    xaxis: {
                        categories: Array.from({ length: value.length }, (_, i) => i + 1), // Exemplo de categorias para o eixo x
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
                    }
                };

                const chart = new ApexCharts.default(document.querySelector("#temperaturaGrafico"), options);
                chart.render();

                return () => {
                    chart.destroy(); // Destruir o gráfico ao desmontar o componente
                };
            }
        });
    }, [value]);

    return (
        <section className="data-box temperatura-grafico" id="temperaturaSection">
            <h2 className="data-box__header">
                Temperatura
            </h2>
            <div className="data-box__body" id="temperaturaGrafico">
                {!value ? "Carregando..." : null}
            </div>
        </section>
    );
}