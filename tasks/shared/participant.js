export function getParticipantId() {
  return localStorage.getItem("participantId") || "P000";
}
