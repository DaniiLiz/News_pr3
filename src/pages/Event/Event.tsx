import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { tournaments } from "../../data/data";
import { Button, Container, Typography, Box, Chip, Stack, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Event.module.scss";

export default function Event() {
    const { eventId } = useParams();
    const tournament = tournaments.find((e) => e.id === eventId);

    if (!tournament) {
        return (
            <Container sx={{ textAlign: 'center', py: 10 }}>
                <Typography variant="h4">Турнир не найден</Typography>
                <Button
                    component={Link}
                    to="/"
                    variant="contained"
                    sx={{ mt: 3 }}
                >
                    Вернуться на главную
                </Button>
            </Container>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Button
                    component={Link}
                    to="/"
                    variant="outlined"
                    startIcon={<span>←</span>}
                    sx={{ mb: 4 }}
                >
                    Назад
                </Button>

                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 4,
                    mb: 4
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ flex: 1 }}
                    >
                        <Box
                            component="img"
                            src={tournament.image}
                            alt={tournament.title}
                            sx={{
                                width: '100%',
                                borderRadius: 2,
                                boxShadow: 3
                            }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ flex: 1 }}
                    >
                        <Typography variant="h3" component="h1" gutterBottom>
                            {tournament.title}
                        </Typography>

                        <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                            <Chip
                                label={tournament.game}
                                color="primary"
                                sx={{
                                    bgcolor: tournament.game === 'Dota 2' ? '#f44336' :
                                        tournament.game === 'CS2' ? '#ff9800' :
                                            tournament.game === 'Valorant' ? '#e91e63' : '#4caf50'
                                }}
                            />
                            <Chip
                                label={tournament.status === 'upcoming' ? 'Предстоящий' :
                                    tournament.status === 'ongoing' ? 'Идет сейчас' : 'Завершен'}
                                color={tournament.status === 'upcoming' ? 'info' :
                                    tournament.status === 'ongoing' ? 'success' : 'default'}
                            />
                        </Stack>

                        <Box sx={{ mb: 3 }}>
                            <Typography variant="h6" color="text.secondary" gutterBottom>
                                Дата проведения:
                            </Typography>
                            <Typography variant="body1">{tournament.date}</Typography>
                        </Box>

                        <Box sx={{ mb: 3 }}>
                            <Typography variant="h6" color="text.secondary" gutterBottom>
                                Место проведения:
                            </Typography>
                            <Typography variant="body1">{tournament.location}</Typography>
                        </Box>

                        <Box sx={{ mb: 3 }}>
                            <Typography variant="h6" color="text.secondary" gutterBottom>
                                Призовой фонд:
                            </Typography>
                            <Typography variant="body1">{tournament.prizePool}</Typography>
                        </Box>
                    </motion.div>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom>
                        Описание турнира
                    </Typography>
                    <Typography paragraph>
                        {tournament.description}
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="h5" gutterBottom>
                        Участники
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                        {tournament.teams.map((team) => (
                            <Chip
                                key={team}
                                label={team}
                                variant="outlined"
                            />
                        ))}
                    </Stack>
                </Box>
            </Container>
        </motion.div>
    );
}