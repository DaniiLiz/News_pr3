import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import { Box, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

function App() {
    const theme = useTheme();
    const [scanlinePosition, setScanlinePosition] = useState(0);

    // Анимация scanline эффекта (как на старых CRT мониторах)
    useEffect(() => {
        const interval = setInterval(() => {
            setScanlinePosition(prev => (prev + 1) % 100);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            bgcolor: 'background.default',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                    linear-gradient(
                        rgba(${theme.palette.primary.main}, 0.1) 1px, 
                        transparent 1px
                    ),
                    linear-gradient(
                        90deg, 
                        rgba(${theme.palette.primary.main}, 0.1) 1px, 
                        transparent 1px
                    )
                `,
                backgroundSize: '20px 20px',
                zIndex: 0,
                opacity: 0.3
            },
            '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: `linear-gradient(
                    to right,
                    transparent,
                    ${theme.palette.secondary.main},
                    transparent
                )`,
                transform: `translateY(${scanlinePosition}%)`,
                animation: 'scanline 8s linear infinite',
                zIndex: 1,
                opacity: 0.15
            },
            '@keyframes scanline': {
                '0%': { transform: 'translateY(0%)' },
                '100%': { transform: 'translateY(100%)' }
            }
        }}>
            {/* Эффект "глитч" по краям экрана */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                border: '2px solid',
                borderColor: 'primary.main',
                pointerEvents: 'none',
                zIndex: 2,
                opacity: 0.1,
                boxShadow: `
                    0 0 10px ${theme.palette.primary.main},
                    0 0 20px ${theme.palette.secondary.main} inset
                `
            }} />

            {/* Основное содержимое */}
            <Box sx={{
                position: 'relative',
                zIndex: 3,
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh'
            }}>
                <Header />
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        position: 'relative',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `
                                radial-gradient(
                                    circle at center,
                                    transparent 0%,
                                    ${theme.palette.background.default} 100%
                                )
                            `,
                            zIndex: -1
                        }
                    }}
                >
                    <AnimatePresence mode="wait">
                        <Outlet />
                    </AnimatePresence>
                </Box>
                <Footer />
            </Box>

            {/* Эффект мерцания */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'transparent',
                animation: 'flicker 0.15s infinite alternate',
                pointerEvents: 'none',
                zIndex: 4,
                '@keyframes flicker': {
                    '0%': { opacity: 0.1 },
                    '10%': { opacity: 0.2 },
                    '20%': { opacity: 0.1 },
                    '30%': { opacity: 0.3 },
                    '40%': { opacity: 0.1 },
                    '50%': { opacity: 0.2 },
                    '60%': { opacity: 0.1 },
                    '70%': { opacity: 0.2 },
                    '80%': { opacity: 0.1 },
                    '90%': { opacity: 0.3 },
                    '100%': { opacity: 0.1 }
                }
            }} />
        </Box>
    );
}

export default App;