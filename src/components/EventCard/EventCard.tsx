import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type {Tournament} from "../../data/data";
import { Card, CardMedia, CardContent, Typography, Chip, Box } from "@mui/material";
import styles from "./EventCard.module.scss";

interface EventCardProps {
    tournament: Tournament;
}

export default function EventCard({ tournament }: EventCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            layout
        >
            <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Link to={`/event/${tournament.id}`} className={styles.link}>
                    <CardMedia
                        component="img"
                        height="180"
                        image={tournament.image}
                        alt={tournament.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {tournament.title}
                        </Typography>
                        <Box display="flex" alignItems="center" mb={1}>
                            <Chip
                                label={tournament.game}
                                size="small"
                                sx={{
                                    mr: 1,
                                    bgcolor: tournament.game === 'Dota 2' ? '#f44336' :
                                        tournament.game === 'CS2' ? '#ff9800' :
                                            tournament.game === 'Valorant' ? '#e91e63' : '#4caf50',
                                    color: 'white'
                                }}
                            />
                            <Typography variant="body2" color="text.secondary">
                                {tournament.date}
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            Призовой фонд: {tournament.prizePool}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={1}>
                            Статус: {tournament.status === 'upcoming' ? 'Предстоящий' :
                            tournament.status === 'ongoing' ? 'Идет сейчас' : 'Завершен'}
                        </Typography>
                    </CardContent>
                </Link>
            </Card>
        </motion.div>
    );
}