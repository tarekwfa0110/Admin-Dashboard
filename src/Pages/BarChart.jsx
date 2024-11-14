import { Box, useTheme } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';

const minimumWages = [
    { year: 2020, spain: 1108, france: 1539, germany: 1584 },
    { year: 2021, spain: 1125, france: 1555, germany: 1614 },
    { year: 2022, spain: 1167, france: 1603, germany: 1645 },
    { year: 2023, spain: 1200, france: 1655, germany: 1680 },
    { year: 2024, spain: 1235, france: 1700, germany: 1720 },
];

const BarChart = () => {
    const theme = useTheme();

    return (
        <Box sx={{ height: "75vh" }}>
            <ResponsiveBar
                data={minimumWages}
                keys={[
                    'spain',
                    'france',
                    'germany'
                ]}
                indexBy="year"
                margin={{ top: 50, right: 130, bottom: 50, left: 80 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'set2' }}
                borderRadius={4}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [['darker', 0.2]]
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Year',
                    legendPosition: 'middle',
                    legendOffset: 40
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Minimum Wage (€)',
                    legendPosition: 'middle',
                    legendOffset: -60
                }}
                enableLabel={false}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                theme={{
                    background: "transparent",
                    textColor: theme.palette.text.primary,
                    fontSize: 11,
                    axis: {
                        domain: {
                            line: {
                                stroke: theme.palette.text.primary,
                                strokeWidth: 1
                            }
                        },
                        ticks: {
                            line: {
                                stroke: theme.palette.text.primary,
                                strokeWidth: 1
                            },
                            text: {
                                fontSize: 12,
                                fill: theme.palette.text.primary
                            }
                        },
                        legend: {
                            text: {
                                fontSize: 14,
                                fontWeight: 'bold',
                                fill: theme.palette.text.primary
                            }
                        }
                    },
                    grid: {
                        line: {
                            stroke: theme.palette.divider,
                            strokeWidth: 1
                        }
                    },
                    legends: {
                        text: {
                            fontSize: 12,
                            fill: theme.palette.text.primary
                        }
                    }
                }}
                tooltip={({ id, value }) => (
                    <div
                        style={{
                            padding: 12,
                            background: theme.palette.background.paper,
                            color: theme.palette.text.primary,
                            border: `1px solid ${theme.palette.divider}`,
                            borderRadius: 4,
                        }}
                    >
                        <strong>
                            {id.charAt(0).toUpperCase() + id.slice(1)}: €{value}
                        </strong>
                    </div>
                )}
            />
        </Box>
    );
};

export default BarChart;