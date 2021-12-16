CREATE TABLE teams(
    TeamID SERIAL PRIMARY KEY,
    OwnerUserName VARCHAR(30) NULL,
    Players TEXT[] NULL,
    LeagueID INT NOT NULL
)
