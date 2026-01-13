export function getParticipantId() {
  let pid = localStorage.getItem("participant_id");

  if (!pid) {
    pid = "P" + Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem("participant_id", pid);
  }

  return pid;
}
