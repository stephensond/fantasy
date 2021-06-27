CREATE OR REPLACE PROCEDURE EndDraft(Results json)
LANGUAGE plpgsql
AS $$
BEGIN
	create temporary table Arr (teamid INT, results TEXT[]);
	with resultSep as (
    	select 
       		CAST(json_object_keys(Results) AS INT) teamid,
        	CAST(Results -> json_object_keys(Results) AS TEXT) results
	)
	insert into Arr (teamid, results)
	select
    	teamid,
    	regexp_split_to_array(trim
                            	(leading '["' from trim 
                                                	(trailing '"]' from rs.results)
                            	)
                        	,'","') results
	from resultSep rs
	;
	-- update teams table with player array
	update teams t
	set players = a.results
	from Arr a
	where t.teamid = a.teamid;

	-- update table with one-to-one player joins
	with cte as (
    	select
        	a.teamid,
        	UNNEST(a.results) result
    	from Arr a
	)
	insert into joinPlayerTeam
	(playerid, teamid)
	select 
    	p.playerid,
    	c.teamid
	from cte c
	join players p
    	on p.playername = c.result
	;
	DROP TABLE Arr;
END
$$
