import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Tournament } from "../../data/data"; // Добавлено type-only import
import { Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";

interface EventCardProps {
    tournament: Tournament;
}

export default function EventCard({ tournament }: EventCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
        >
            <Card sx={{
                bgcolor: 'background.paper',
                border: '2px solid',
                borderColor: 'secondary.main',
                boxShadow: 'none',
                transition: 'all 0.3s',
                '&:hover': {
                    boxShadow: '0 0 20px rgba(45, 226, 230, 0.5)'
                }
            }}>
                <Link to={`/event/${tournament.id}`} style={{ textDecoration: 'none' }}>
                    <CardMedia
                        component="img"
                        height="180"
                        image={tournament.image}
                        alt={tournament.title}
                        sx={{
                            filter: 'grayscale(30%) contrast(120%)',
                            borderBottom: '2px solid',
                            borderColor: 'primary.main'
                        }}
                    />
                    <CardContent sx={{
                        bgcolor: 'rgba(38, 20, 71, 0.5)',
                        color: 'text.primary'
                    }}>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{
                                fontFamily: '"VT323", monospace',
                                fontSize: '1.8rem',
                                color: 'primary.main'
                            }}
                        >
                            {tournament.title}
                        </Typography>

                        <Chip
                            label={tournament.game}
                            size="small"
                            sx={{
                                mt: 1,
                                mb: 2,
                                bgcolor: 'primary.main',
                                color: 'background.default',
                                fontFamily: '"Courier New", monospace',
                                fontWeight: 'bold'
                            }}
                        />

                        <Typography variant="body2" sx={{
                            color: 'secondary.main',
                            fontFamily: '"Courier New", monospace',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <span style={{ color: 'text.primary' }}>PRIZE:</span>
                            {tournament.prizePool}
                        </Typography>
                    </CardContent>
                </Link>
            </Card>
        </motion.div>
    );
}