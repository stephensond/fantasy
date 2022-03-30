CREATE OR REPLACE FUNCTION GrabTeams(LeagueID integer)
RETURNS TABLE(teamid int, ownerusername VARCHAR(30), numteams int)
AS $$
    SELECT
        t.teamid, t.ownerusername, l.numteams
    FROM leagues l
    INNER JOIN teams t
        ON t.leagueID = l.leagueID
    WHERE t.leagueID = $1
$$
LANGUAGE SQL;