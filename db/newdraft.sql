UPDATE players SET isdrafted = false;
INSERT INTO leagues
    (ID, team1, team2, team3, team4)
SELECT MAX(l.ID)+1, MAX(t.teamID)+1, MAX(t.teamID)+2, MAX(t.teamID)+3, MAX(t.teamID)+4
FROM leagues AS l JOIN teams AS t ON l.ID = t.leagueID;
INSERT INTO teams
    (teamId, leagueid)
    SELECT team1, id
    FROM leagues
    WHERE ID = (SELECT MAX(ID)
    FROM leagues)
UNION
    SELECT team2, id
    FROM leagues
    WHERE ID = (SELECT MAX(ID)
    FROM leagues)
UNION
    SELECT team3, id
    FROM leagues
    WHERE ID = (SELECT MAX(ID)
    FROM leagues)
UNION
    SELECT team4, id
    FROM leagues
    WHERE ID = (SELECT MAX(ID)
    FROM leagues);
DROP TABLE IF EXISTS draftroom;
CREATE TABLE draftroom
(
    playerid int,
    playername varchar(50),
    pos varchar(3),
    team varchar(30),
    isDrafted INT,
    teamID INT NULL
);
INSERT INTO draftroom
    (playerid, playername, pos, team, isDrafted, teamID)
SELECT playerid, playername, pos, team, 0, NULL
FROM players;