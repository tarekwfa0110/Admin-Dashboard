import { Box, useTheme } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';

const minimumWages = [
    { year: 2020, spain: 1108, france: 1539, germany: 1584 },
    { year: 2021, spain: 1125, france: 1555, germany: 1614 },
    { year: 2022, spain: 1167, france: 1603, germany: 1645 },
    { year: 2023, spain: 1200, france: 1655, germany: 1680 },
    { year: 2024, spain: 1235, france: 1700, germany: 1720 },
];

// Transform the data for the line chart
const transformDataForLine = (data) => {
    return [
        {
            id: 'Spain',
            data: data.map(d => ({
                x: d.year,
                y: d.spain
            }))
        },
        {
            id: 'France',
            data: data.map(d => ({
                x: d.year,
                y: d.france
            }))
        },
        {
            id: 'Germany',
            data: data.map(d => ({
                x: d.year,
                y: d.germany
            }))
        }
    ];
};

const LineChart = () => {
    const theme = useTheme();
    const lineData = transformDataForLine(minimumWages);

    return (
        <Box sx={{ height: "75vh" }}>
            <ResponsiveLine
                data={lineData}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: false,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Year',
                    legendOffset: 36,
                    legendPosition: 'middle',
                    truncateTickAt: 0,
                    tickColor: theme.palette.text.primary
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Minimum Wage (€)',
                    legendOffset: -40,
                    legendPosition: 'middle',
                    truncateTickAt: 0,
                    tickColor: theme.palette.text.primary
                }}
                colors={{ scheme: 'set2' }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                enableTouchCrosshair={true}
                useMesh={true}
                theme={{
                    background: "transparent",
                    textColor: theme.palette.text.primary,
                    fontSize: 11,
                    grid: {
                        line: {
                            stroke: theme.palette.divider,
                            strokeWidth: 1
                        }
                    },
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
                                fill: theme.palette.text.primary
                            }
                        },
                        legend: {
                            text: {
                                fill: theme.palette.text.primary,
                                fontSize: 12
                            }
                        }
                    },
                    crosshair: {
                        line: {
                            stroke: theme.palette.text.secondary,
                            strokeWidth: 1,
                            strokeOpacity: 0.35,
                        }
                    }
                }}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: theme.palette.text.primary,
                        itemTextColor: theme.palette.text.primary,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: theme.palette.action.hover,
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                tooltip={({ point }) => (
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
                            {point.serieId} ({point.data.x}): €{point.data.y}
                        </strong>
                    </div>
                )}
            />
        </Box>
    );
};

export default LineChart;