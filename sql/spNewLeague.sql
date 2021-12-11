CREATE OR REPLACE FUNCTION NewLeague(Params json)
LANGUAGE plpgsql
AS $$ 

    -- create a default new league
	BEGIN

        INSERT INTO Leagues 
        (LeagueName, OwnerUserName, datecreated, numteams, numplayers)
        SELECT
            (rec->>'leaguename')::text,
            (rec->>'leagueowner')::text,
            current_timestamp as datecreated,
            (rec->>'numteams')::integer,
            (rec->>'numplayers')::integer
        FROM
        json_array_elements(Params->'data') rec;

    END
$$
