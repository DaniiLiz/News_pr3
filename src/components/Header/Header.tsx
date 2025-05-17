import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <AppBar position="static" sx={{ bgcolor: 'primary.dark' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" className={styles.logo}>
                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                CyberEvents
                            </motion.span>
                        </Link>
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            component={NavLink}
                            to="/"
                            color="inherit"
                            sx={{
                                '&.active': {
                                    bgcolor: 'primary.light'
                                }
                            }}
                        >
                            Главная
                        </Button>
                        <Button
                            component={NavLink}
                            to="/about"
                            color="inherit"
                            sx={{
                                '&.active': {
                                    bgcolor: 'primary.light'
                                }
                            }}
                        >
                            О нас
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </motion.header>
    );
}