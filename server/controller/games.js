// let gamesList = [
//     { name: 'Valorant', image: '../assets/images/valorant.jpeg', storage: '50gb', desc: 'Chutiya Game', trailerLink: '..//', downLink: '..//' },
//     { name: 'Call of duty MF-3', image: '../assets/images/Callofduty.jpeg', storage: '100gb', desc: 'Chutiya Game', trailerLink: '..//', downLink: '..//' },
//     { name: 'Phasmophobia', image: '../assets/images/Phasmophobia.jpeg', storage: '20gb', desc: 'Chutiya Game', trailerLink: '..//', downLink: '..//' },
// ];
let gamesList = [
    { name: 'Valorant', image: '../assets/images/valorant.jpeg', storage: '50gb', desc:'"Valorant" is a tactical first-person shooter (FPS) game developed and published by Riot Games, released in 2020. Set in a near-future Earth, it pits two teams of five players against each other: attackers, who plant a bomb called the Spike, and defenders, who try to stop them. The game features a diverse cast of characters, called "agents," each with unique abilities that can be used strategically to gain an advantage in combat or support the team. Matches are fast-paced and require a mix of precise shooting skills, map knowledge, and teamwork. With its blend of tactical gameplay and character-based abilities, Valorant has gained popularity as a competitive esports title.', trailerLink:'https://www.youtube.com/watch?v=e_E9W2vsRbQ', downLink:'https://playvalorant.com/en-gb/download/'  },
    { name: 'Call of duty MF-3', image: '../assets/images/Callofduty.jpeg',storage: '100gb', desc:'Chutiya Game', trailerLink:'', downLink:'..//' },
    { name: 'Phasmophobia', image: '../assets/images/Phasmophobia.jpeg',storage: '20gb',desc:'Chutiya Game', trailerLink:'..//', downLink:'..//' },
  ];
const gamesDBInstance = require("../models/games");

const getGames = (req, res) => {
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

    gamesDBInstance
        .find({ name: game })
        .then(filteredGamesList => res.json(filteredGamesList))
        .catch(err => {
            console.error(`Error searching ${game} game ${err}`);
            res.status(500).json({ error: 'Internal Server Error' });
        });
}

module.exports = {
    getGames,
    searchGame
}
