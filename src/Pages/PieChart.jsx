import { Box, useTheme } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';

const minimumWages = [
    { year: 2020, spain: 1108, france: 1539, germany: 1584 },
    { year: 2021, spain: 1125, france: 1555, germany: 1614 },
    { year: 2022, spain: 1167, france: 1603, germany: 1645 },
    { year: 2023, spain: 1200, france: 1655, germany: 1680 },
    { year: 2024, spain: 1235, france: 1700, germany: 1720 },
];

// Transform the data for the pie chart (using latest year's data)
const transformDataForPie = (data) => {
    const latestYear = data[data.length - 1];
    return [
        { id: 'Spain', value: latestYear.spain },
        { id: 'France', value: latestYear.france },
        { id: 'Germany', value: latestYear.germany },
    ];
};

const PieChart = () => {
    const theme = useTheme();
    const pieData = transformDataForPie(minimumWages);

    return (
        <Box sx={{ height: "75vh" }}>
            <ResponsivePie
                data={pieData}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [['darker', 0.2]]
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor={theme.palette.text.primary}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [['darker', 2]]
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                colors={{ scheme: 'set2' }}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: theme.palette.text.secondary,
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: theme.palette.text.primary
                                }
                            }
                        ]
                    }
                ]}
                theme={{
                    background: "transparent",
                    textColor: theme.palette.text.primary,
                    fontSize: 11,
                    labels: {
                        text: {
                            fill: theme.palette.text.primary
                        }
                    },
                    legends: {
                        text: {
                            fill: theme.palette.text.primary
                        }
                    }
                }}
                tooltip={({ datum }) => (
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
                            {datum.id}: €{datum.value}
                        </strong>
                    </div>
                )}
            />
        </Box>
    );
};

export default PieChart;