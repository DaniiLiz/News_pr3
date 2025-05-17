import { motion } from "framer-motion";
import { tournaments } from "../../data/data";
import EventCard from "../../components/EventCard/EventCard";
import { Container, Typography } from "@mui/material";

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Container maxWidth="lg" sx={{
                py: 4,
                border: '1px solid',
                borderColor: 'secondary.main',
                boxShadow: '0 0 15px rgba(45, 226, 230, 0.5)',
                background: 'rgba(13, 2, 33, 0.8)'
            }}>
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    sx={{
                        textAlign: 'center',
                        mb: 6,
                        fontWeight: 'bold',
                        color: 'primary.main',
                        textShadow: '0 0 10px #ff3864',
                        fontFamily: '"VT323", monospace',
                        fontSize: '3rem',
                        letterSpacing: '3px'
                    }}
                >
                    [CYBER_TOURNAMENTS]
                </Typography>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem',
                    padding: '1rem',
                    border: '1px dashed',
                    borderColor: '#6d44bd'
                }}>
                    {tournaments.map((tournament) => (
                        <motion.div
                            key={tournament.id}
                            whileHover={{
                                y: -5,
                                boxShadow: '0 0 15px rgba(255, 56, 100, 0.7)'
                            }}
                            style={{
                                background: 'rgba(38, 20, 71, 0.6)',
                                border: '1px solid',
                                borderColor: '#2de2e6',
                                padding: '1rem'
                            }}
                        >
                            <EventCard tournament={tournament} />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </motion.div>
    );
}