CREATE OR REPLACE PROCEDURE NewLeague(Params json)
LANGUAGE plpgsql
AS $$ 

    -- create a default new league
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

    END
$$