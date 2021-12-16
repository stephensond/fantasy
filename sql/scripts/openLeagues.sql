WITH non_full_leagues as (
    SELECT
        COUNT(b.teamID) team_ct,
        a.numteams,
        a.leagueID
    FROM leagues a
    LEFT JOIN teams b
        ON a.leagueID = b.leagueID
    GROUP BY a.leagueID, a.numteams
    HAVING COUNT(b.teamID) < a.numteams
)
SELECT
    nfl.team_ct,
    l.leagueID,
    l.numteams max_teams,
    l.leaguename,
    l.ownerusername
FROM non_full_leagues nfl
INNER JOIN leagues l
    ON nfl.leagueID = l.leagueID