import { motion } from "framer-motion";
import { Container, Typography, Box } from "@mui/material";
import styles from "./About.module.scss";

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Container maxWidth="md" sx={{ py: 8 }}>
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    sx={{
                        textAlign: 'center',
                        mb: 6,
                        fontWeight: 'bold'
                    }}
                >
                    О проекте CyberEvents
                </Typography>

                <Box sx={{
                    p: 4,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    boxShadow: 3
                }}>
                    <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <Typography paragraph sx={{ mb: 3 }}>
                            CyberEvents - это платформа для отслеживания киберспортивных турниров по всему миру.
                            Мы собираем информацию о всех крупных соревнованиях по Dota 2, CS2, Valorant и League of Legends.
                        </Typography>
                        <Typography paragraph sx={{ mb: 3 }}>
                            Наш сервис помогает фанатам киберспорта быть в курсе предстоящих событий,
                            узнавать результаты завершенных турниров и следить за своими любимыми командами.
                        </Typography>
                        <Typography paragraph>
                            Мы сотрудничаем с организаторами турниров, чтобы предоставлять самую актуальную
                            информацию о расписании, составе участников и призовых фондах.
                        </Typography>
                    </motion.div>
                </Box>
            </Container>
        </motion.div>
    );
}