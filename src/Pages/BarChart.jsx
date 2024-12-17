import React, { useMemo } from "react";
import { Box, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";

const BarChart = () => {
    const theme = useTheme();

    // Data
    const data = useMemo(
        () => [
            { year: "2020", spain: 1108, germany: 1300, france: 1539 },
            { year: "2021", spain: 1125, germany: 1300, france: 1555 },
            { year: "2022", spain: 1167, germany: 1300, france: 1603 },
            { year: "2023", spain: 1200, germany: 1300, france: 1655 },
        ],
        []
    );

    // Chart Theme
    const chartTheme = {
        axis: {
            ticks: {
                text: {
                    fill: theme.palette.mode === "dark" ? "#ffffff" : "#333333",
                },
            },
            legend: {
                text: {
                    fill: theme.palette.mode === "dark" ? "#ffffff" : "#333333",
                },
            },
        },
        legends: {
            text: {
                fill: theme.palette.mode === "dark" ? "#ffffff" : "#333333",
            },
        },
        tooltip: {
            container: {
                background: theme.palette.background.paper,
                color: theme.palette.text.primary,
                borderRadius: 4,
                padding: 8,
                boxShadow: theme.shadows[2],
            },
        },
    };

    return (
        <Box sx={{ height: "75vh" }}>
            <ResponsiveBar
                data={data}
                keys={["spain", "france", "germany"]}
                indexBy="year"
                margin={{ top: 50, right: 130, bottom: 50, left: 80 }}
                padding={0.3}
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={{ scheme: "set2" }}
                borderRadius={4}
                borderWidth={1}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 0.2]],
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Year",
                    legendPosition: "middle",
                    legendOffset: 40,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Minimum Wage (€)",
                    legendPosition: "middle",
                    legendOffset: -60,
                }}
                enableLabel={false}
                legends={[
                    {
                        dataFrom: "keys",
                        anchor: "bottom-right",
                        direction: "column",
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: "left-to-right",
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
                theme={chartTheme}
                tooltip={({ id, value }) => (
                    <div
                        style={{
                            background: theme.palette.background.paper,
                            color: theme.palette.text.primary,
                            padding: "8px",
                            borderRadius: "4px",
                            border: `1px solid ${theme.palette.divider}`,
                            boxShadow: theme.shadows[2],
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

export default React.memo(BarChart);
