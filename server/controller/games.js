let gamesList = [
    { name: 'valorant', image: '../assets/images/valorant.jpeg', storage: '50 GB', desc: '"Valorant" is a tactical first-person shooter (FPS) game developed and published by Riot Games, released in 2020. Set in a near-future Earth, it pits two teams of five players against each other: attackers, who plant a bomb called the Spike, and defenders, who try to stop them. The game features a diverse cast of characters, called "agents," each with unique abilities that can be used strategically to gain an advantage in combat or support the team. Matches are fast-paced and require a mix of precise shooting skills, map knowledge, and teamwork. With its blend of tactical gameplay and character-based abilities, Valorant has gained popularity as a competitive esports title.', trailerLink: 'https://www.youtube.com/watch?v=e_E9W2vsRbQ', downLink: 'https://playvalorant.com/en-gb/download/' },
    { name: 'call of duty MF-3', image: '../assets/images/Callofduty.jpeg', storage: '100 GB', desc: 'Call of Duty: Modern Warfare III is a 2023 first-person shooter video game developed by Sledgehammer Games and published by Activision. It is a sequel to 2022\'s Modern Warfare II, serving as the third entry in the rebooted Modern Warfare sub-series and the twentieth installment in the overall Call of Duty series. The game was released on November 10, 2023, for PlayStation 4, PlayStation 5, Windows, Xbox One, and Xbox Series X/S.', trailerLink: 'https://www.youtube.com/watch?v=mHDEDDrGYvo', downLink: 'https://fitgirl-repacks.site/call-of-duty-modern-warfare-3/' },
    { name: 'phasmophobia', image: '../assets/images/Phasmophobia.jpeg', storage: '20 GB', desc: 'Phasmophobia is a paranormal horror game by British indie game studio Kinetic Games. The game became available in early access for Microsoft Windows with virtual reality support in September 2020. In the game, one to four players work to complete a contract where they must identify the type of ghost haunting a designated site. It is based on the popular hobby of ghost hunting.', trailerLink: 'https://www.youtube.com/watch?v=pQ3SlgA9R7k', downLink: 'https://www.skidrowreloaded.com/phasmophobia-v0-9-6-1-0xdeadcode/' },
    { name: 'apex legends', image: '../assets/images/apex.jpeg', storage: '60 GB', desc: 'Apex Legends is a free-to-play battle royale game developed by Respawn Entertainment and published by Electronic Arts. It features squads of three players competing in a last-team-standing match within an ever-shrinking safe zone.', trailerLink: 'https://www.youtube.com/watch?v=oQtHENM_GZU', downLink: 'https://www.ea.com/games/apex-legends' },
    { name: 'overwatch', image: '../assets/images/overwatch.jpg', storage: '30 GB', desc: 'Overwatch is a team-based multiplayer first-person shooter developed and published by Blizzard Entertainment. Players choose from a diverse cast of heroes, each with their own unique abilities, and work together to secure objectives.', trailerLink: 'https://www.youtube.com/watch?v=FqnKB22pOC0', downLink: 'https://store.steampowered.com/app/2357570/Overwatch_2/' },
    { name: 'counter-strike: global offensive', image: '../assets/images/csgo.jpeg', storage: '20 GB', desc: 'Counter-Strike: Global Offensive is a multiplayer first-person shooter developed by Valve and Hidden Path Entertainment. It features classic gameplay modes such as bomb defusal and hostage rescue, requiring teamwork and strategy.', trailerLink: 'https://www.youtube.com/watch?v=edYCtaNueQY', downLink: 'https://store.steampowered.com/app/730/CounterStrike_2/' },
    { name: 'rainbow six siege', image: '../assets/images/rainbow.jpeg', storage: '60 GB', desc: 'Tom Clancy\'s Rainbow Six Siege is a tactical shooter game developed by Ubisoft. It emphasizes environmental destruction and cooperation between players, with each match focusing on sieges between two teams.', trailerLink: 'https://www.youtube.com/watch?v=hLjEHanGIuI', downLink: 'https://www.skidrowreloaded.com/tom-clancys-rainbow-six-siege-vy8s3-1/' },
    { name: 'call of duty: warzone', image: '../assets/images/cod.jpeg', storage: '100 GB', desc: 'Call of Duty: Warzone is a free-to-play battle royale game developed by Infinity Ward and Raven Software, published by Activision. It features a large map, allowing for up to 150 players in a match, with various game modes.', trailerLink: 'https://www.youtube.com/watch?v=0E44DClsX5Q', downLink: 'https://store.steampowered.com/app/1962663/Call_of_Duty_Warzone/' },
    { name: 'paladins', image: '../assets/images/paladins.jpeg', storage: '20 GB', desc: 'Paladins is a free-to-play hero shooter developed and published by Hi-Rez Studios. It offers a wide variety of champions, each with their own unique abilities, and multiple game modes, including siege and team deathmatch.', trailerLink: 'https://www.youtube.com/watch?v=g4WHiMVq1-8', downLink: 'https://store.steampowered.com/app/444090/Paladins/' },
    { name: 'destiny 2', image: '../assets/images/destiny.jpg', storage: '105 GB', desc: 'Destiny 2 is a free-to-play online-only multiplayer first-person shooter developed by Bungie. It combines elements from traditional shooters with MMO and RPG elements, featuring both player versus environment and player versus player modes.', trailerLink: 'https://www.youtube.com/watch?v=vNh1KBRluC0', downLink: 'https://store.steampowered.com/app/1085660/Destiny_2/' },
    { name: 'team fortress 2', image: '../assets/images/teamfortress.jpg', storage: '20 GB', desc: 'Team Fortress 2 is a multiplayer first-person shooter developed and published by Valve. It offers a variety of game modes, including capture the flag and king of the hill, with a distinct art style and humorous tone.', trailerLink: 'https://www.youtube.com/watch?v=N7ZafWA2jd8', downLink: 'https://store.steampowered.com/app/440/Team_Fortress_2/' },
    { name: 'splitgate: arena warfare', image: '../assets/images/split.jpg', storage: '15 GB', desc: 'Splitgate: Arena Warfare is a free-to-play multiplayer first-person shooter developed and published by 1047 Games. It combines elements of classic arena shooters with portal mechanics, allowing players to create portals to outmaneuver opponents.', trailerLink: 'https://www.youtube.com/watch?v=BkwurBIrWgk', downLink: 'https://store.steampowered.com/app/677620/Splitgate/' },
    { name: 'warframe', image: '../assets/images/warframe.jpeg', storage: '25 GB', desc: 'Warframe is a free-to-play cooperative third-person shooter developed and published by Digital Extremes. Players control members of the Tenno, a race of ancient warriors who have awoken from centuries of cryosleep to find themselves at war in a planetary system.', trailerLink: 'https://www.youtube.com/watch?v=MsbL8lFHrZI', downLink: 'https://store.steampowered.com/app/230410/Warframe/' },
    { name: 'battlefield v', image: '../assets/images/battlefield.jpeg', storage: '50 GB', desc: 'Battlefield V is a first-person shooter video game developed by EA DICE and published by Electronic Arts. It is the sixteenth installment in the Battlefield series, set during World War II, where players engage in large-scale battles with various weapons and vehicles.', trailerLink: 'https://www.youtube.com/watch?v=LCZLabOywYU', downLink: 'https://fitgirl-repacks.site/battlefield-v/' },
    { name: 'gears 5', image: '../assets/images/gears.jpeg', storage: '80 GB', desc: 'Gears 5 is a third-person shooter game developed by The Coalition and published by Xbox Game Studios. It is the sixth installment of the Gears of War series, featuring intense action, cooperative gameplay, and a compelling story set in a post-apocalyptic world.', trailerLink: 'https://www.youtube.com/watch?v=APqBWniRQbQ', downLink: 'https://fitgirl-repacks.site/gears-5/' },
    { name: 'borderlands 3', image: '../assets/images/borderlands.jpeg', storage: '75 GB', desc: 'Borderlands 3 is a first-person shooter action role-playing game developed by Gearbox Software. Players embark on a journey through the chaotic world of Pandora and beyond, exploring new planets, encountering diverse enemies, and collecting loot.', trailerLink: 'https://www.youtube.com/watch?v=n7mUwX5IPRs', downLink: 'https://fitgirl-repacks.site/borderlands-3/' },
    { name: 'DOOM eternal', image: '../assets/images/doom.jpg', storage: '50 GB', desc: 'DOOM Eternal is a first-person shooter game developed by id Software and published by Bethesda Softworks. It is the fifth main game in the Doom series, featuring fast-paced combat against hordes of demons, with an emphasis on mobility and brutal glory kills.', trailerLink: 'https://www.youtube.com/watch?v=_UuktemkCFI', downLink: 'https://fitgirl-repacks.site/doom-eternal/' },
    { name: 'halo: the master chief collection', image: '../assets/images/halo.jpeg', storage: '120 GB', desc: 'Halo: The Master Chief Collection is a compilation of first-person shooter video games in the Halo series developed by 343 Industries and published by Xbox Game Studios. It includes remastered versions of Halo: Combat Evolved, Halo 2, Halo 3, Halo 4, and Halo: Reach, offering players the complete Master Chief saga.', trailerLink: 'https://www.youtube.com/watch?v=_DtftmGZpgE', downLink: 'https://fitgirl-repacks.site/halo-the-master-chief-collection/' },
    { name: 'titanfall 2', image: '../assets/images/titanfall.jpeg', storage: '50 GB', desc: 'Titanfall 2 is a first-person shooter game developed by Respawn Entertainment and published by Electronic Arts. It features fast-paced multiplayer combat and a captivating single-player campaign, where players control pilots and their powerful Titans in futuristic battles.', trailerLink: 'https://www.youtube.com/watch?v=ktw2k3m7Qko', downLink: 'https://fitgirl-repacks.site/titanfall-2/' },
    
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
    const game = req.params.game.toLowerCase();

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
