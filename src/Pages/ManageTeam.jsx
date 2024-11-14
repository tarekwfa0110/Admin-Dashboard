import { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    useColorScheme, 
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';


const ManageTeam = () => {
    const [pageSize, setPageSize] = useState(5);
    const { mode } = useColorScheme("dark");
    const [selectedRows, setSelectedRows] = useState([]);
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [newMember, setNewMember] = useState({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        phone: '',
        access: 'user'
    });
    const [teamData, setTeamData] = useState([
    { id: 1, firstName: "Jon", lastName: "Snow", fullName: "Jon Snow", age: 35, email: "jonsnow@gmail.com", phone: "(665)121-5454", access: "admin" },
    { id: 2, firstName: "Cersei", lastName: "Lannister", fullName: "Cersei Lannister", age: 42, email: "cerseilannister@gmail.com", phone: "(421)314-2288", access: "admin" },
    { id: 3, firstName: "Jaime", lastName: "Lannister", fullName: "Jaime Lannister", age: 45, email: "jaimelannister@gmail.com", phone: "(422)982-6739", access: "admin" },
    { id: 4, firstName: "Arya", lastName: "Stark", fullName: "Arya Stark", age: 16, email: "aryastark@gmail.com", phone: "(921)425-6742", access: "manager" },
    { id: 5, firstName: "Daenerys", lastName: "Targaryen", fullName: "Daenerys Targaryen", age: 31, email: "daenerystargaryen@gmail.com", phone: "(421)445-1189", access: "manager" },
    { id: 6, firstName: "Ever", lastName: "Melisandre", fullName: "Ever Melisandre", age: 150, email: "evermelisandre@gmail.com", phone: "(232)545-6483", access: "user" },
    { id: 7, firstName: "Ferrara", lastName: "Clifford", fullName: "Ferrara Clifford", age: 44, email: "ferraraclifford@gmail.com", phone: "(543)124-0123", access: "user" },
    { id: 8, firstName: "Rossini", lastName: "Frances", fullName: "Rossini Frances", age: 36, email: "rossinifrances@gmail.com", phone: "(222)444-5555", access: "user" },
    { id: 9, firstName: "Harvey", lastName: "Roxie", fullName: "Harvey Roxie", age: 65, email: "harveyroxie@gmail.com", phone: "(444)555-6239", access: "user" },
    { id: 10, firstName: "Tyrion", lastName: "Lannister", fullName: "Tyrion Lannister", age: 38, email: "tyrionlannister@gmail.com", phone: "(444)555-6240", access: "manager" },


    ]);

    const handleDeleteSelected = () => {
        setTeamData(teamData.filter(row => !selectedRows.includes(row.id)));
        setSelectedRows([]);
    };

    const handleAddMember = () => {
        const newId = Math.max(...teamData.map(item => item.id)) + 1;
        const fullName = `${newMember.firstName} ${newMember.lastName}`;

        setTeamData([...teamData, {
            ...newMember,
            id: newId,
            fullName
        }]);

        setIsAddDialogOpen(false);
        setNewMember({
            firstName: '',
            lastName: '',
            age: '',
            email: '',
            phone: '',
            access: 'user'
        });
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'firstName', headerName: 'First name', flex: 1 },
        { field: 'lastName', headerName: 'Last name', flex: 1 },
        { field: 'age', headerName: 'Age', width: 100 },
        { field: 'fullName', headerName: 'Full name', flex: 1.5 },
        { field: 'email', headerName: 'Email', flex: 1.5 },
        { field: 'phone', headerName: 'Phone', flex: 1 },
        {
            field: 'access',
            headerName: 'Access',
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        width="100%"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        bgcolor={
                            access === "admin"
                                ? "#4cceac20"
                                : access === "manager"
                                    ? "#739fe020"
                                    : "#70d8bd20"
                        }
                        borderRadius="4px"
                    >
                        {access === "admin" && <AdminPanelSettingsOutlinedIcon sx={{ color: "#4cceac", mr: "5px" }} />}
                        {access === "manager" && <SecurityOutlinedIcon sx={{ color: "#739fe0", mr: "5px" }} />}
                        {access === "user" && <LockOpenOutlinedIcon sx={{ color: "#70d8bd", mr: "5px" }} />}
                        <Typography
                            color={
                                access === "admin"
                                    ? "#4cceac"
                                    : access === "manager"
                                        ? "#739fe0"
                                        : "#70d8bd"
                            }
                            sx={{ textTransform: "capitalize" }}
                        >
                            {access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <Box m="20px" height="75vh" >
            <Box display="flex" justifyContent="space-between" alignItems="center" mb="30px">
                <Box>
                    <Typography variant="h2" fontWeight="bold" sx={{ color: '#e0e0e0', m: "0 0 5px 0" }}>
                        TEAM
                    </Typography>
                    <Typography variant="h5" sx={{ color: '#70d8bd' }}>
                        Managing the Team Members
                    </Typography>
                </Box>
                <Box>
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={() => setIsAddDialogOpen(true)}
                        sx={{
                            backgroundColor: '#70d8bd',
                            marginRight: '10px',
                            '&:hover': { backgroundColor: '#4cceac' }
                        }}
                    >
                        Add Member
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<DeleteOutlineIcon />}
                        onClick={handleDeleteSelected}
                        disabled={selectedRows.length === 0}
                        sx={{
                            backgroundColor: '#ff4081',
                            '&:hover': { backgroundColor: '#f50057' }
                        }}
                    >
                        Delete Selected
                    </Button>
                </Box>
            </Box>

            <Box
                height="calc(100% - 100px)"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                        color: mode === "light" ? "black" : "white",
                        bgcolor: mode === "light" ? "white" : ""
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: '#1F2A40',
                        color: '#70d8bd',
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        bgcolor: mode === "light" ? "white" : '#1F2A40',
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        bgcolor: mode === "light" ? "white" : "",
                        color: mode === "light" ? "black" : "white",
                    },
                    "& .MuiCheckbox-root": {
                        color: '#70d8bd',
                    },
                    "& .MuiTablePagination-root": {
                        color: mode === "light" ? "black" : "white",
                    },
                    "& .MuiSelect-icon": {
                        color: '#70d8bd',
                    },
                }}
            >
                <DataGrid
                    rows={teamData}
                    columns={columns}
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[5, 10, 20]}
                    checkboxSelection
                    onSelectionModelChange={(newSelection) => setSelectedRows(newSelection)}
                    selectionModel={selectedRows}
                />
            </Box>

            {/* Add Member Dialog */}
            <Dialog open={isAddDialogOpen} onClose={() => setIsAddDialogOpen(false)}>
                <DialogTitle>Add New Team Member</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="First Name"
                        fullWidth
                        variant="outlined"
                        value={newMember.firstName}
                        onChange={(e) => setNewMember({ ...newMember, firstName: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Last Name"
                        fullWidth
                        variant="outlined"
                        value={newMember.lastName}
                        onChange={(e) => setNewMember({ ...newMember, lastName: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Age"
                        type="number"
                        fullWidth
                        variant="outlined"
                        value={newMember.age}
                        onChange={(e) => setNewMember({ ...newMember, age: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={newMember.email}
                        onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Phone"
                        fullWidth
                        variant="outlined"
                        value={newMember.phone}
                        onChange={(e) => setNewMember({ ...newMember, phone: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsAddDialogOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAddMember} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default ManageTeam;