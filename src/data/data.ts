import { z } from "zod";

export const TournamentSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.string(),
    location: z.string(),
    image: z.string().url(),
    game: z.enum(['Dota 2', 'CS2', 'Valorant', 'League of Legends', 'Overwatch 2', 'Rainbow Six', 'Fortnite']),
    prizePool: z.string(),
    teams: z.array(z.string()),
    status: z.enum(['upcoming', 'ongoing', 'completed']),
});

export type Tournament = z.infer<typeof TournamentSchema>;

export const tournaments: Tournament[] = [
    // Dota 2
    {
        id: "ti12",
        title: "The International 2023",
        game: "Dota 2",
        date: "12-22 октября 2023",
        location: "Сиэтл, США",
        image: "https://dota2.net/images/cdn/MjMwNQ==/SGJzdTViSEQ3dg==.jpg",
        prizePool: "$3,000,000",
        teams: ["Team Spirit", "LGD Gaming", "Gaimin Gladiators", "Tundra Esports"],
        description: "Главный турнир года по Dota 2 с самым большим призовым фондом в киберспорте. The International собирает лучшие команды со всего мира для борьбы за чемпионский титул и многомиллионный призовой фонд.",
        status: "completed"
    },
    {
        id: "dreamleague-s19",
        title: "DreamLeague Season 19",
        game: "Dota 2",
        date: "14-24 марта 2024",
        location: "Онлайн",
        image: "https://photobooth.cdn.sports.ru/preset/message/d/f3/3762e50814391be4a29f7928310b5.jpeg",
        prizePool: "$1,000,000",
        teams: ["OG", "Team Liquid", "Evil Geniuses", "Nigma Galaxy"],
        description: "Очередной сезон популярного онлайн-турнира по Dota 2 с участием топовых команд мира.",
        status: "completed"
    },

    // CS2
    {
        id: "blast2024",
        title: "BLAST Premier World Final 2024",
        game: "CS2",
        date: "13-17 декабря 2024",
        location: "Абу-Даби, ОАЭ",
        image: "https://origin.pb06e2-resources.com/ContentPB/Media/Forecasts/Start_BLAST_Premier._World_Final_2024.jpg",
        prizePool: "$1,000,000",
        teams: ["Natus Vincere", "Vitality", "FaZe Clan", "G2 Esports"],
        description: "Финал мирового турнира по CS2 с участием лучших команд года. Турнир пройдет в роскошном отеле Emirates Palace с трансляцией на всех основных платформах.",
        status: "completed"
    },
    {
        id: "iem-katowice-2024",
        title: "IEM Katowice 2024",
        game: "CS2",
        date: "31 января - 12 февраля 2024",
        location: "Катовице, Польша",
        image: "https://photobooth.cdn.sports.ru/preset/wysiwyg/f/9d/5df58e8f745be89b3f479cd448839.jpeg",
        prizePool: "$1,000,000",
        teams: ["Heroic", "Virtus.pro", "MOUZ", "Astralis"],
        description: "Легендарный турнир в Польше, один из самых престижных в CS2. Особенность - зрители создают уникальную атмосферу на Spodek Arena.",
        status: "completed"
    },

    // Valorant
    {
        id: "valorant-champs-2024",
        title: "VALORANT Champions 2024",
        game: "Valorant",
        date: "1-12 августа 2024",
        location: "Лос-Анджелес, США",
        image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/f2ea8eee6659a0359a19934e1379a584f3197796-1920x1080.jpg?auto=format&fit=fill&q=80&w=1082",
        prizePool: "$2,250,000",
        teams: ["Fnatic", "DRX", "LOUD", "Evil Geniuses"],
        description: "Чемпионат мира по Valorant 2024 года. 16 лучших команд со всего мира сразятся за звание чемпионов и крупный призовой фонд.",
        status: "completed"
    },
    {
        id: "valorant-masters-madrid",
        title: "VALORANT Masters Madrid",
        game: "Valorant",
        date: "8-24 марта 2024",
        location: "Мадрид, Испания",
        image: "https://valo2asia.com/wp-content/uploads/2024/01/VCT24_Masters_Madrid_Ticket_Announcement_HEADER.jpg",
        prizePool: "$1,000,000",
        teams: ["Sentinels", "Team Liquid", "Paper Rex", "EDward Gaming"],
        description: "Первый международный турнир VCT 2024 года в Мадриде. Команды будут бороться за очки в рейтинге и призовые.",
        status: "completed"
    },

    // League of Legends
    {
        id: "lol-worlds-2023",
        title: "League of Legends Worlds 2023",
        game: "League of Legends",
        date: "10 октября - 19 ноября 2023",
        location: "Сеул, Южная Корея",
        image: "https://media.sportstiger.com/media/league-of-legends-worlds-2023-sportstiger-1673357714695-original.jpg",
        prizePool: "$2,225,000",
        teams: ["T1", "JD Gaming", "Gen.G", "Weibo Gaming"],
        description: "Чемпионат мира по League of Legends 2023 года проходил в Южной Корее. Турнир завершился победой T1, обыгравшей Weibo Gaming в финале со счетом 3:0.",
        status: "completed"
    },
    {
        id: "msi-2024",
        title: "Mid-Season Invitational 2024",
        game: "League of Legends",
        date: "1-19 мая 2024",
        location: "Чэнду, Китай",
        image: "https://cdn.oneesports.gg/cdn-data/2024/04/LeagueOfLegends_MSI2024_KeyVisual_Chengdu_ONEEsports.jpg",
        prizePool: "$1,500,000",
        teams: ["G2 Esports", "T1", "Top Esports", "Gen.G"],
        description: "Ключевой международный турнир в середине сезона. Победитель получает прямой слот на Worlds для своего региона.",
        status: "completed"
    },

    // Дополнительные игры
    {
        id: "overwatch-league-2023",
        title: "Overwatch League 2023 Finals",
        game: "Overwatch 2",
        date: "30 сентября - 1 октября 2023",
        location: "Торонто, Канада",
        image: "https://esportsinsider.com/wp-content/uploads/2023/02/Screenshot-2023-02-09-at-15.07.02-large.png",
        prizePool: "$1,000,000",
        teams: ["Dallas Fuel", "San Francisco Shock", "Seoul Dynasty", "Hangzhou Spark"],
        description: "Гранд-финал Overwatch League 2023 с новым форматом и картами из Overwatch 2.",
        status: "completed"
    },
    {
        id: "six-invitational-2024",
        title: "Six Invitational 2024",
        game: "Rainbow Six",
        date: "13-25 февраля 2024",
        location: "Монреаль, Канада",
        image: "https://cdn4.idcgames.com/storage/image/1107/six-invitational-2024/default.jpeg",
        prizePool: "$3,000,000",
        teams: ["Team BDS", "FaZe Clan", "DarkZero Esports", "w7m esports"],
        description: "Чемпионат мира по Rainbow Six Siege - самый престижный турнир года с крупнейшим призовым фондом.",
        status: "completed"
    },
    {
        id: "fortnite-chapter5",
        title: "Fortnite Chapter 5 Championship",
        game: "Fortnite",
        date: "15-17 марта 2024",
        location: "Онлайн",
        image: "https://staticg.sportskeeda.com/editor/2022/11/445cc-16674141187555-1920.jpg?w=640",
        prizePool: "$5,000,000",
        teams: ["Bugha", "Mongraal", "Tayson", "Kami"],
        description: "Первое крупное соревнование по Fortnite в новом Chapter 5 с обновленной механикой и картой.",
        status: "completed"
    }
];

const result = TournamentSchema.array().safeParse(tournaments);

if (!result.success) {
    console.error("Ошибка валидации!", result.error.format());
}