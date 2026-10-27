const getBaseUrl = () => {
  // If NEXT_PUBLIC_API_URL is configured in .env.local, always prefer it
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }

  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  // Check if dev or uat domain
  if (["dev.khelclub.org", "uat.khelclub.org"].includes(hostname)) {
    console.log("Using UAT API endpoint");
    return "https://dev.api-v1.khelclub.co";
  }

  if (["app.khelclub.org"].includes(hostname)) {
    console.log("Using production API endpoint");
    return "https://api-v1.khelclub.co";
  }

  // Default to local Flask backend on 5001 for localhost, 127.0.0.1, and SSR
  return "http://localhost:5001";
};

const baseurl = getBaseUrl();

export const endpoints = {
  getBaseUrl,
  getFixtures: baseurl + "/get-match-fixtures",
  teamCheckin: baseurl + "/teams/checkin ",
  getTournamentDetails: baseurl + "/tournaments",
  getPoolWiseStandings: baseurl + "/standings",
  getOverallStandings: baseurl + "/overall-standings",
  getSecondPlaceStandings: baseurl + "/second-place-standings",
  getMatchScore: baseurl + "/score/match",
  updateMatchScore: baseurl + "/update-score",
  addTournament: baseurl + "/tournaments",
  createRound: baseurl + "/create-round",
  createMatch: baseurl + "/create-match",
  registerTeams: baseurl + "/register-teams",
  completeRound: baseurl + "/complete-round",
  generateFixtures: baseurl + "/update-pools",
  downloadDuprReport: baseurl + "/export-tournament-csv",
  PLAYER_REGISTER: baseurl + "/player/register",
  playerRegister: baseurl + "/player/register",
  playerLookup: baseurl + "/player/lookup",
  playerLookupByName: baseurl + "/player/lookup-by-name",
  playerCheckin: baseurl + "/player/checkin",
  playerSuperTournamentCheckin: baseurl + "/player/super-tournament-checkin",
  updatePlayer2: baseurl + "/player/update",
  updatePlayerDetails: baseurl + "/player/update",
  // Court Management Endpoints
  getTournamentCourts: baseurl + "/tournaments/{tournament_id}/courts",
  updateTournamentCourts: baseurl + "/tournaments/{tournament_id}/courts",
  getCourtAssignments:
    baseurl + "/tournaments/{tournament_id}/court-assignments",
  assignCourt: baseurl + "/tournaments/{tournament_id}/court-assignments",
  reorderCourtMatches:
    baseurl + "/tournaments/{tournament_id}/court-assignments/reorder",
  updateMatchStatus: baseurl + "/update-match-status",
  getMatch: "/api/matches/match",
  getCourtMatches: baseurl + "/tournaments/{tournament_id}/court-matches",

  // New Super Tournament endpoints
  getSuperTournaments: baseurl + "/super-tournaments",
  createSuperTournament: baseurl + "/super-tournaments",
  getSuperTournamentDetails: baseurl + "/super-tournaments",
  getSuperTournamentSeasons:
    baseurl + "/super-tournaments/{super_tournament_id}/seasons",

  // New Season endpoints
  getSeasons: baseurl + "/seasons",
  createSeason: baseurl + "/seasons",
  getSeasonTournaments: baseurl + "/seasons/{season_id}/tournaments",
  createSeasonInSuperTournament:
    baseurl + "/super-tournaments/{super_tournament_id}/seasons",

  // Modified Tournament endpoints
  createTournament: baseurl + "/tournaments",
  getSuperTournament: baseurl + "/super-tournaments",

  // Knockout Tournament endpoints
  getTopTeams: baseurl + "/knockout-top-teams",
  createKnockout: baseurl + "/knockout",
  knockoutFromMatches: baseurl + "/knockout-from-matches",
  checkKnockout: baseurl + "/check-knockout",
  deleteKnockout: baseurl + "/delete-knockout",

  // Tournament Meta endpoints
  getTournamentMeta: baseurl + "/tournament-meta",

  // Match Operations endpoints
  matchOps: baseurl + "/match-ops",

  // Player Operations endpoints
  getPlayers: baseurl + "/player-ops/players",
  addPlayers: baseurl + "/player-ops/players",
  updatePlayer: baseurl + "/player-ops/players",
  deletePlayer: baseurl + "/player-ops/players",
};
