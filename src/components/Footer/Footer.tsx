import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography, Link as MuiLink } from "@mui/material";
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
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            CyberEvents
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            Ваш гид в мире киберспортивных турниров
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Typography variant="subtitle1" gutterBottom>
                            Навигация
                        </Typography>
                        <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
                            <li>
                                <MuiLink component={Link} to="/" color="inherit">
                                    Главная
                                </MuiLink>
                            </li>
                            <li>
                                <MuiLink component={Link} to="/about" color="inherit">
                                    О нас
                                </MuiLink>
                            </li>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant="subtitle1" gutterBottom>
                            Игры
                        </Typography>
                        <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
                            <li>Dota 2</li>
                            <li>CS2</li>
                            <li>Valorant</li>
                            <li>League of Legends</li>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="subtitle1" gutterBottom>
                            Контакты
                        </Typography>
                        <Typography variant="body2">Email: info@cyberevents.com</Typography>
                        <Typography variant="body2">Телефон: +7 (123) 456-78-90</Typography>
                    </Grid>
                </Grid>
                <Box sx={{ pt: 4, mt: 4, borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
                    <Typography variant="body2" align="center">
                        © {currentYear} CyberEvents. Все права защищены.
                    </Typography>
                </Box>
            </Container>
        </motion.footer>
    );
}