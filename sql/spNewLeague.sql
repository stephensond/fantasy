CREATE OR REPLACE PROCEDURE NewLeague(Params json)
LANGUAGE plpgsql
AS $$ 

    -- create a new league with specified parameters
	BEGIN

        INSERT INTO Leagues 
        (LeagueName, OwnerUserName, datecreated, numteams, numplayers)
        VALUES (Params->>'leaguename',
                Params->>'leagueowner', 
                current_timestamp, 
                CAST(Params->>'numteams' AS INT), 
                CAST(Params->>'numplayers' AS INT)
               )
        ;

        -- add the league owner's team
        INSERT INTO teams (leagueid, OwnerUserName)
        SELECT
            MAX(leagues.leagueid),
            Params->>'leagueowner'
        FROM leagues
        ;

    END
$$