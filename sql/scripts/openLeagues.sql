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
    CAST(nfl.team_ct AS INT) teamCt,
    l.leagueID,
    l.numteams maxTeams,
    l.leaguename,
    l.ownerusername
FROM non_full_leagues nfl
INNER JOIN leagues l
    ON nfl.leagueID = l.leagueID
WHERE l.leaguename IS NOT NULL