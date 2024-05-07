// let gamesList = [
//     { name: 'Valorant', image: '../assets/images/valorant.jpeg', storage: '50gb', desc: 'Chutiya Game', trailerLink: '..//', downLink: '..//' },
//     { name: 'Call of duty MF-3', image: '../assets/images/Callofduty.jpeg', storage: '100gb', desc: 'Chutiya Game', trailerLink: '..//', downLink: '..//' },
//     { name: 'Phasmophobia', image: '../assets/images/Phasmophobia.jpeg', storage: '20gb', desc: 'Chutiya Game', trailerLink: '..//', downLink: '..//' },
// ];
let gamesList = [
    { name: 'Valorant', image: '../assets/images/valorant.jpeg', storage: '50 GB', desc: '"Valorant" is a tactical first-person shooter (FPS) game developed and published by Riot Games, released in 2020. Set in a near-future Earth, it pits two teams of five players against each other: attackers, who plant a bomb called the Spike, and defenders, who try to stop them. The game features a diverse cast of characters, called "agents," each with unique abilities that can be used strategically to gain an advantage in combat or support the team. Matches are fast-paced and require a mix of precise shooting skills, map knowledge, and teamwork. With its blend of tactical gameplay and character-based abilities, Valorant has gained popularity as a competitive esports title.', trailerLink: 'https://www.youtube.com/watch?v=e_E9W2vsRbQ', downLink: 'https://playvalorant.com/en-gb/download/' },
    { name: 'Call of duty MF-3', image: '../assets/images/Callofduty.jpeg', storage: '100 GB', desc: 'Call of Duty: Modern Warfare III is a 2023 first-person shooter video game developed by Sledgehammer Games and published by Activision. It is a sequel to 2022\'s Modern Warfare II, serving as the third entry in the rebooted Modern Warfare sub-series and the twentieth installment in the overall Call of Duty series. The game was released on November 10, 2023, for PlayStation 4, PlayStation 5, Windows, Xbox One, and Xbox Series X/S.', trailerLink: 'https://www.youtube.com/watch?v=mHDEDDrGYvo', downLink: 'https://www.callofduty.com/modernwarfare3' },
    { name: 'Phasmophobia', image: '../assets/images/Phasmophobia.jpeg', storage: '20 GB', desc: 'Phasmophobia is a paranormal horror game by British indie game studio Kinetic Games. The game became available in early access for Microsoft Windows with virtual reality support in September 2020. In the game, one to four players work to complete a contract where they must identify the type of ghost haunting a designated site. It is based on the popular hobby of ghost hunting.', trailerLink: 'https://www.youtube.com/watch?v=pQ3SlgA9R7k', downLink: 'https://phasmophobia.en.softonic.com/' },
];
const gamesDBInstance = require("../models/games");

const getGames = (req, res) => {
    // gamesDBInstance.insertMany(gamesList)
    gamesDBInstance
        .find({})
        .then(result => res.json(result))
        .catch(err => {
            console.error('Error fetching games:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
}

const searchGame = (req, res) => {
    const game = req.params.game;

    if (game == "") {
        gamesDBInstance
            .find({})
            .then(result => res.json(result))
            .catch(err => {
                console.error('Error fetching games:', err);
                res.status(500).json({ error: 'Internal Server Error' });
            });
        return;
    }
    gamesDBInstance
        .find({ name: game })
        .then(filteredGamesList => res.json(filteredGamesList[0]))
        .catch(err => {
            console.error(`Error searching ${game} game ${err}`);
            res.status(500).json({ error: 'Internal Server Error' });
        });
}

module.exports = {
    getGames,
    searchGame
}
