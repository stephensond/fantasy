CREATE OR REPLACE FUNCTION NewDraft()
RETURNS TABLE(teamid int)
LANGUAGE plpgsql
AS $$ 

	declare
        max_league_id int;
        num_teams int ;
	
    -- create a default new league
	BEGIN
	    insert into leagues
        (datecreated)
        values
        (current_timestamp);
	
	    max_league_id := (select MAX(leagueid) from leagues);
	    num_teams := (select numteams from leagues where leagueid = max_league_id);
	
        -- add enough teams as per league size
        for counter in 1..num_teams loop
            insert into teams (leagueid)
            values (max_league_id);
        end loop;

        -- return relevant teamIDs for this draft
	    return query
		    select ID from teams where leagueid = max_league_id;
    END
$$
