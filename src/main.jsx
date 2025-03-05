import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useAppStore } from "./store";

// Import all components
import RootLayout from "./components/RootLayout";
import Dashboard from "./pages/Dashboard";
import ManageTeam from "./pages/ManageTeam";
import ContactsInformation from "./pages/ContactsInformation";
import InvoicesBalances from "./pages/InvoicesBalances";
import ProfileForm from "./pages/ProfileForm";
import Calendar from "./pages/calendar/Calendar";
import FAQPage from "./pages/FAQPage";
import BarChart from "./pages/BarChart";
import PieChart from "./pages/PieChart";
import LineChart from "./pages/LineChart";
import ErrorBoundary from "./components/ErrorBoundary";

import "./index.css";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

const root = createRoot(rootElement);

const App = () => {
  const mode = useAppStore((state) => state.theme);

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: '#1976d2',
              light: '#42a5f5',
              dark: '#1565c0',
            },
            secondary: {
              main: '#9c27b0',
              light: '#ba68c8',
              dark: '#7b1fa2',
            },
            background: {
              default: '#f5f5f5',
              paper: '#ffffff',
            },
          }
        : {
            primary: {
              main: '#90caf9',
              light: '#e3f2fd',
              dark: '#42a5f5',
            },
            secondary: {
              main: '#ce93d8',
              light: '#f3e5f5',
              dark: '#ab47bc',
            },
            background: {
              default: '#121212',
              paper: '#1e1e1e',
            },
          }),
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 600,
      },
      h2: {
        fontWeight: 600,
      },
      h3: {
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
    },
  });

  // Configure future flags for React Router v7 compatibility
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorBoundary />,
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
    ],
    {
      future: {
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true
      }
    }
  );

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  );
};

root.render(<App />);
