import{ useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    TextField,
    Button,
    Box,
    IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const initialFaqs = [
    { id: 1, question: "What is your return policy?", answer: "You can return items within 30 days." },
    { id: 2, question: "How do I track my order?", answer: "You’ll receive a tracking number via email." },
    { id: 3, question: "Do you offer support?", answer: "Yes, 24/7 support is available." },
];

export default function AdminFAQPage() {
    const [faqs, setFaqs] = useState(initialFaqs);
    const [searchTerm, setSearchTerm] = useState("");

    const handleDelete = (id) => {
        setFaqs(faqs.filter((faq) => faq.id !== id));
    };

    const filteredFaqs = faqs.filter((faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Box p={3}>
            <Typography variant="h4" fontWeight="bold" mb={2}>
                Admin FAQ Management
            </Typography>

            {/* Search Bar */}
            <Box mb={2} display="flex" alignItems="center" gap={2}>
                <TextField
                    variant="outlined"
                    label="Search FAQs"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    size="small"
                    sx={{ flex: 1 }}
                />
                <Button variant="contained" startIcon={<AddIcon />} color="primary">
                    Add New FAQ
                </Button>
            </Box>

            {/* FAQ List */}
            {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => (
                    <Accordion key={faq.id} defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography fontWeight="bold">{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{faq.answer}</Typography>
                        </AccordionDetails>
                        {/* Admin Actions */}
                        <Box display="flex" justifyContent="flex-end" gap={1} p={1}>
                            <IconButton color="primary">
                                <EditIcon />
                            </IconButton>
                            <IconButton color="error" onClick={() => handleDelete(faq.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </Accordion>
                ))
            ) : (
                <Typography>No FAQs found.</Typography>
            )}
        </Box>
    );
}
