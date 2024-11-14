import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Dashboard from "./pages/Dashboard";
import ManageTeam from "./pages/ManageTeam";
import ContactsInformation from "./pages/ContactsInformation";
import InvoicesBalances from "./pages/InvoicesBalances";
import ProfileForm from "./pages/ProfileForm";
import Calendar from "./Pages/calendar/Calendar";
import FAQPage from "./pages/FAQPage";
import BarChart from "./pages/BarChart";
import PieChart from "./pages/PieChart";
import LineChart from "./pages/LineChart";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "manage-team",
        element: <ManageTeam />,
      },
      {
        path: "contacts-information",
        element: <ContactsInformation />,
      },
      {
        path: "invoices-balances",
        element: <InvoicesBalances />,
      },
      {
        path: "profile-form",
        element: <ProfileForm />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "faq-page",
        element: <FAQPage />,
      },
      {
        path: "bar-chart",
        element: <BarChart />,
      },
      {
        path: "pie-chart",
        element: <PieChart />,
      },
      {
        path: "line-chart",
        element: <LineChart />,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
