import  { useMemo } from "react";
import { Box, Grid, Paper, Typography, Card, CardContent, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";

// Example Bar Chart Data
const barChartData = [
    { month: "Jan", sales: 100, expenses: 50 },
    { month: "Feb", sales: 120, expenses: 80 },
    { month: "Mar", sales: 150, expenses: 100 },
    { month: "Apr", sales: 200, expenses: 130 },
];

// Example Line Chart Data
const lineChartData = [
    {
        id: "Revenue",
        color: "hsl(200, 70%, 50%)",
        data: [
            { x: "Jan", y: 100 },
            { x: "Feb", y: 120 },
            { x: "Mar", y: 150 },
            { x: "Apr", y: 200 },
        ],
    },
];

// Example Recent Activities
const activities = [
    { id: 1, activity: "User A placed an order", status: "Completed", date: "2024-06-15" },
    { id: 2, activity: "User B updated profile", status: "Pending", date: "2024-06-14" },
    { id: 3, activity: "Admin updated pricing", status: "Completed", date: "2024-06-13" },
    { id: 4, activity: "System backup completed", status: "Success", date: "2024-06-12" },
];

const Dashboard = () => {
    const theme = useTheme();

    // Quick statistics
    const stats = useMemo(() => [
        { title: "Total Sales", value: "€8,450", color: "success.main" },
        { title: "Expenses", value: "€2,340", color: "error.main" },
        { title: "Active Users", value: "1,320", color: "info.main" },
        { title: "Pending Orders", value: "48", color: "warning.main" },
    ], []);

    return (
        <Box sx={{ padding: 3 }}>
            {/* Welcome Header */}
            <Typography variant="h4" gutterBottom>
                Welcome Back, Admin!
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                Here’s what’s happening with your dashboard today.
            </Typography>
            <Divider sx={{ mb: 3 }} />

            {/* Quick Stats Section */}
            <Grid container spacing={3} mb={3}>
                {stats.map((stat, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card elevation={3}>
                            <CardContent>
                                <Typography variant="h6" color="text.secondary">
                                    {stat.title}
                                </Typography>
                                <Typography variant="h4" sx={{ color: stat.color }}>
                                    {stat.value}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Charts Section */}
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ height: "300px", padding: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Sales vs Expenses
                        </Typography>
                        <ResponsiveBar
                            data={barChartData}
                            keys={["sales", "expenses"]}
                            indexBy="month"
                            margin={{ top: 20, right: 30, bottom: 50, left: 60 }}
                            padding={0.3}
                            colors={{ scheme: "set2" }}
                            axisBottom={{
                                legend: "Month",
                                legendPosition: "middle",
                                legendOffset: 40,
                            }}
                            axisLeft={{
                                legend: "Amount (€)",
                                legendPosition: "middle",
                                legendOffset: -50,
                            }}
                            theme={{
                                textColor: theme.palette.text.primary,
                                axis: {
                                    ticks: { text: { fill: theme.palette.text.primary } },
                                },
                            }}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ height: "300px", padding: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Revenue Growth
                        </Typography>
                        <ResponsiveLine
                            data={lineChartData}
                            margin={{ top: 20, right: 30, bottom: 50, left: 60 }}
                            xScale={{ type: "point" }}
                            yScale={{ type: "linear", min: 0, max: 250 }}
                            axisBottom={{
                                legend: "Month",
                                legendPosition: "middle",
                                legendOffset: 40,
                            }}
                            axisLeft={{
                                legend: "Revenue (€)",
                                legendPosition: "middle",
                                legendOffset: -50,
                            }}
                            colors={{ scheme: "category10" }}
                            theme={{
                                textColor: theme.palette.text.primary,
                                axis: {
                                    ticks: { text: { fill: theme.palette.text.primary } },
                                },
                            }}
                        />
                    </Paper>
                </Grid>
            </Grid>

            {/* Recent Activities */}
            <Box mt={4}>
                <Typography variant="h6" gutterBottom>
                    Recent Activities
                </Typography>
                <TableContainer component={Paper} elevation={3}>
                    <Table>
                        <TableHead>
                            <TableRow style={{ backgroundColor: theme.palette.mode === "dark" ? "#444" : "#f5f5f5" }}>
                                <TableCell>ID</TableCell>
                                <TableCell>Activity</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {activities.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.activity}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={row.status}
                                            color={
                                                row.status === "Completed" || row.status === "Success"
                                                    ? "success"
                                                    : "warning"
                                            }
                                        />
                                    </TableCell>
                                    <TableCell>{row.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default Dashboard;
