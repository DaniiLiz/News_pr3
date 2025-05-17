import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Box, Container, Typography, Link as MuiLink } from "@mui/material";
import styles from "./Footer.module.scss";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={styles.footer}
        >
            <Container maxWidth="lg" sx={{ py: 4 }}>
                {/* Заменяем Grid container на div с flex */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '32px',
                    justifyContent: 'space-between'
                }}>
                    {/* Блок логотипа и описания */}
                    <div style={{
                        flex: '1 1 300px',
                        minWidth: '250px'
                    }}>
                        <Typography variant="h6" gutterBottom>
                            CyberEvents
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            Ваш гид в мире киберспортивных турниров
                        </Typography>
                    </div>

                    {/* Навигация */}
                    <div style={{
                        flex: '0 1 150px',
                        minWidth: '120px'
                    }}>
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Навигация
                        </Typography>
                        <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <MuiLink component={Link} to="/" color="inherit" underline="hover">
                                Главная
                            </MuiLink>
                            <MuiLink component={Link} to="/about" color="inherit" underline="hover">
                                О нас
                            </MuiLink>
                        </Box>
                    </div>

                    {/* Игры */}
                    <div style={{
                        flex: '0 1 150px',
                        minWidth: '120px'
                    }}>
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Игры
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography variant="body2">Dota 2</Typography>
                            <Typography variant="body2">CS2</Typography>
                            <Typography variant="body2">Valorant</Typography>
                            <Typography variant="body2">League of Legends</Typography>
                        </Box>
                    </div>

                    {/* Контакты */}
                    <div style={{
                        flex: '1 1 300px',
                        minWidth: '250px'
                    }}>
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Контакты
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography variant="body2">Email: info@cyberevents.com</Typography>
                            <Typography variant="body2">Телефон: +7 (999) 999-99-99</Typography>
                        </Box>
                    </div>
                </div>

                {/* Копирайт */}
                <Box sx={{
                    pt: 4,
                    mt: 4,
                    borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                    textAlign: 'center'
                }}>
                    <Typography variant="body2">
                        © {currentYear} CyberEvents. Все права защищены.
                    </Typography>
                </Box>
            </Container>
        </motion.footer>
    );
}