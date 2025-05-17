import { motion } from "framer-motion";
import { tournaments } from "../../data/data";
import EventCard from "../../components/EventCard/EventCard";
import { Container, Typography, Grid } from "@mui/material";
import styles from "./Home.module.scss";

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    sx={{
                        textAlign: 'center',
                        mb: 6,
                        fontWeight: 'bold',
                        background: 'linear-gradient(45deg, #6200ea 30%, #03dac6 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    Киберспортивные турниры
                </Typography>

                <Grid container spacing={4}>
                    {tournaments.map((tournament) => (
                        <Grid item xs={12} sm={6} md={4} key={tournament.id}>
                            <EventCard tournament={tournament} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </motion.div>
    );
}