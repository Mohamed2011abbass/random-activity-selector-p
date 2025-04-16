let activities = [
  "Go for a run",
  "Read a book",
  "Watch a documentary",
  "Cook a new recipe",
  "Try a new hobby",
  "Visit a museum",
  "Learn a new skill",
];
function addBnt() {
  const suggestAnActivities = document
    .getElementById("newActivity")
    .value.trim();
  if (suggestAnActivities !== "") activities.push(suggestAnActivities);
  document.getElementById("newActivity").value = "";
}
function suggeatBtn() {
  const randomIndex = Math.floor(Math.random() * activities.length);
  document.getElementById("activityDisplay").innerHTML =
    activities[randomIndex];
}
