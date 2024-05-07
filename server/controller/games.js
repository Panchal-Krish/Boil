// let gamesList = [
//     { name: 'Valorant', image: '../assets/images/valorant.jpeg', storage: '50gb', desc: 'Chutiya Game', trailerLink: '..//', downLink: '..//' },
//     { name: 'Call of duty MF-3', image: '../assets/images/Callofduty.jpeg', storage: '100gb', desc: 'Chutiya Game', trailerLink: '..//', downLink: '..//' },
//     { name: 'Phasmophobia', image: '../assets/images/Phasmophobia.jpeg', storage: '20gb', desc: 'Chutiya Game', trailerLink: '..//', downLink: '..//' },
// ];

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