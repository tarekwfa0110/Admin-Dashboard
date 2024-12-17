import { useState, useEffect, useMemo } from "react";
import {
    Box,
    Typography,
    Button,
    useColorScheme,
    CircularProgress,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import FilterListIcon from "@mui/icons-material/FilterList";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const ContactsInformation = () => {
    const [pageSize, setPageSize] = useState(9);
    const { mode } = useColorScheme("dark");
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Simulate Data Fetching
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            const fetchedContacts = [
                { id: 1, registrarId: "123512", name: "Jon Snow", age: 35, phone: "(665)121-5454", email: "jonsnow@gmail.com", address: "0912 Won Street, Alabama", city: "New York", zipCode: "10001" },
                { id: 2, registrarId: "123512", name: "Cersei Lannister", age: 42, phone: "(421)314-2288", email: "cerseilannister@gmail.com", address: "1234 Main Street, New Y", city: "New York", zipCode: "13151" },
                { id: 3, registrarId: "4132513", name: "Jaime Lannister", age: 45, phone: "(422)982-6739", email: "jaimelannister@gmail.com", address: "3333 Want Blvd, Estanza", city: "New York", zipCode: "87281" },
                { id: 4, registrarId: "123512", name: "Anya Stark", age: 16, phone: "(921)425-6742", email: "anyastark@gmail.com", address: "1514 Main Street, New Y", city: "New York", zipCode: "15551" },
                { id: 5, registrarId: "123512", name: "Daenerys Targaryen", age: 31, phone: "(421)445-1189", email: "daenerystargaryen@gmail.com", address: "11122 Welping Ave, Tenting", city: "Tenting", zipCode: "14215" },
                { id: 6, registrarId: "123512", name: "Ever Melisandre", age: 150, phone: "(232)545-6483", email: "evermelisandre@gmail.com", address: "1234 Canvile Street, Esvazark", city: "Esvazark", zipCode: "10001" },
                { id: 7, registrarId: "123512", name: "Ferrara Clifford", age: 44, phone: "(543)124-0123", email: "ferraraclifford@gmail.com", address: "22215 Super Street, Evertin", city: "Evertin", zipCode: "51523" },
                { id: 8, registrarId: "512315", name: "Rossini Frances", age: 36, phone: "(222)444-5555", email: "rossinifrances@gmail.com", address: "4123 Ever Blvd, Wentington", city: "Esteras", zipCode: "44215" },
                { id: 9, registrarId: "928397", name: "Harvey Roxie", age: 65, phone: "(444)555-6239", email: "harveyroxie@gmail.com", address: "51234 Avery Street, Cantory", city: "Colunza", zipCode: "111234" },
            ];
            setContacts(fetchedContacts);
            setLoading(false);
        }, 200); 
    }, []);

    const columns = useMemo(
        () => [
            { field: "id", headerName: "ID", width: 90 },
            { field: "registrarId", headerName: "Registrar ID", width: 120 },
            { field: "name", headerName: "Name", flex: 1 },
            { field: "age", headerName: "Age", width: 100 },
            { field: "phone", headerName: "Phone Number", flex: 1 },
            { field: "email", headerName: "Email", flex: 1 },
            { field: "address", headerName: "Address", flex: 1.5 },
            { field: "city", headerName: "City", flex: 1 },
            { field: "zipCode", headerName: "Zip Code", width: 100 },
        ],
        []
    );

    const CustomToolbar = () => (
        <Box
            sx={{
                display: "flex",
                gap: 1,
                p: 2,
                borderBottom: "1px solid rgba(224, 224, 224, 0.2)",
            }}
        >
            <Button startIcon={<ViewColumnIcon />} sx={{ color: "#2196f3" }}>
                COLUMNS
            </Button>
            <Button startIcon={<FilterListIcon />} sx={{ color: "#2196f3" }}>
                FILTERS
            </Button>
            <Button startIcon={<DensityMediumIcon />} sx={{ color: "#2196f3" }}>
                DENSITY
            </Button>
            <Button startIcon={<FileDownloadIcon />} sx={{ color: "#2196f3" }}>
                EXPORT
            </Button>
        </Box>
    );

    return (
        <Box m="20px" height="75vh">
            {/* Header */}
            <Box mb="30px">
                <Typography
                    variant="h2"
                    fontWeight="bold"
                    sx={{ color: "#e0e0e0", m: "0 0 5px 0" }}
                >
                    CONTACTS
                </Typography>
                <Typography variant="h5" sx={{ color: "#70d8bd" }}>
                    List of Contacts for Future Reference
                </Typography>
            </Box>

            {/* DataGrid */}
            <Box height="calc(100% - 100px)">
                {loading ? (
                    <Box
                        height="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <CircularProgress size={60} sx={{ color: "#70d8bd" }} />
                    </Box>
                ) : (
                    <DataGrid
                        rows={contacts}
                        columns={columns}
                        components={{
                            Toolbar: CustomToolbar,
                        }}
                        pageSize={pageSize}
                        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                        rowsPerPageOptions={[5, 10, 20, 50]}
                        pagination
                        loading={loading} // DataGrid's loading indicator
                        disableSelectionOnClick
                        sx={{
                            "& .MuiDataGrid-root": {
                                border: "none",
                                backgroundColor: "#1F2A40",
                            },
                            "& .MuiDataGrid-columnHeaders": {
                                backgroundColor: "#1F2A40",
                                color: "#70d8bd",
                                borderBottom: "none",
                            },
                        }}
                    />
                )}
            </Box>
        </Box>
    );
};

export default ContactsInformation;
