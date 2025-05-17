import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import { Box } from "@mui/material";

function App() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            bgcolor: 'background.default'
        }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>
                <AnimatePresence mode="wait">
                    <Outlet />
                </AnimatePresence>
            </Box>
            <Footer />
        </Box>
    );
}

export default App;