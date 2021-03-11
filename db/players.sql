DROP TABLE IF EXISTS players

CREATE TABLE players
(
    playerID int,
    playername VARCHAR(50),
    pos VARCHAR(30),
    team VARCHAR(30),
    college VARCHAR(30),
    PRIMARY KEY (playerID)
)

TRUNCATE TABLE players;
COPY players
(playerID, playername, pos, team, college)
FROM '~/ffball/players.csv'
DELIMITER ','
CSV