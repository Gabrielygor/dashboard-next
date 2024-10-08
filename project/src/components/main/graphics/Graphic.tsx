import { useEffect } from "react";

interface GraphicProps {
    value: string[] | undefined;
    name: string;
    color: string;
    id: string;
    className: string;
    sectionId: string;
    height: string;
}

export function Graphic({ value, name, color, id, className, sectionId, height }: GraphicProps) {
    useEffect(() => {

        const clearChart = () => {
            const chartDiv = document.querySelector(`#${id}`);
            if (chartDiv) {
                chartDiv.innerHTML = '';
            }
        };


        import("apexcharts").then(ApexCharts => {
            if (value && value.length > 0) {
                clearChart();

                const options = {
                    chart: {
                        type: 'line',
                        height: height
                    },
                    series: [{
                        name: name,
                        data: value.map(v => parseFloat(v).toFixed(2))
                    }],
                    colors: [color],
                    xaxis: {
                        categories: [''],
                        labels: {
                            style: {
                                colors: 'var(--bg-eixos-graficos)',
                                fontSize: '12px',
                                fontFamily: 'Arial, sans-serif',
                                fontWeight: 400
                            }
                        }
                    },
                    yaxis: {
                        max: Math.max(...value.map(v => parseFloat(v))) + 1, 
                        tickAmount: 8, 
                        labels: {
                            formatter: (val: number) => val.toFixed(2), 
                            style: {
                                colors: 'var(--clr-scrollbar)',
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
                    chart.destroy();
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
