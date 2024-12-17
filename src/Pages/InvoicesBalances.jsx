import  { useMemo } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const InvoicesBalances = () => {
    const theme = useTheme();

    // Example Data for Invoices
    const invoices = useMemo(
        () => [
            { id: 1, client: "Client A", amount: 1500, status: "Paid" },
            { id: 2, client: "Client B", amount: 2400, status: "Due" },
            { id: 3, client: "Client C", amount: 1100, status: "Overdue" },
            { id: 4, client: "Client D", amount: 3100, status: "Paid" },
            { id: 5, client: "Client E", amount: 500, status: "Due" },
            { id: 6, client: "Client F", amount: 2200, status: "Overdue" },
        ],
        []
    );

    // Calculate summary balances
    const balanceSummary = useMemo(() => {
        const totalDue = invoices.filter((i) => i.status === "Due").reduce((acc, curr) => acc + curr.amount, 0);
        const totalPaid = invoices.filter((i) => i.status === "Paid").reduce((acc, curr) => acc + curr.amount, 0);
        const totalOverdue = invoices.filter((i) => i.status === "Overdue").reduce((acc, curr) => acc + curr.amount, 0);
        return { totalDue, totalPaid, totalOverdue };
    }, [invoices]);

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>
                Invoices & Balances
            </Typography>
            <Divider sx={{ marginBottom: 3 }} />

            {/* Balance Summary */}
            <Box sx={{ display: "flex", justifyContent: "space-around", mb: 3 }}>
                <Box textAlign="center">
                    <Typography variant="h6">Total Due</Typography>
                    <Typography variant="h5" color="warning.main">€{balanceSummary.totalDue.toLocaleString()}</Typography>
                </Box>
                <Box textAlign="center">
                    <Typography variant="h6">Total Paid</Typography>
                    <Typography variant="h5" color="success.main">€{balanceSummary.totalPaid.toLocaleString()}</Typography>
                </Box>
                <Box textAlign="center">
                    <Typography variant="h6">Total Overdue</Typography>
                    <Typography variant="h5" color="error.main">€{balanceSummary.totalOverdue.toLocaleString()}</Typography>
                </Box>
            </Box>

            {/* Invoices Table */}
            <TableContainer component={Paper} elevation={3}>
                <Table>
                    <TableHead>
                        <TableRow style={{ backgroundColor: theme.palette.mode === "dark" ? "#444" : "#f5f5f5" }}>
                            <TableCell>ID</TableCell>
                            <TableCell>Client</TableCell>
                            <TableCell>Amount (€)</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.id}>
                                <TableCell>{invoice.id}</TableCell>
                                <TableCell>{invoice.client}</TableCell>
                                <TableCell>€{invoice.amount.toLocaleString()}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={invoice.status}
                                        color={
                                            invoice.status === "Paid"
                                                ? "success"
                                                : invoice.status === "Due"
                                                    ? "warning"
                                                    : "error"
                                        }
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default InvoicesBalances;
