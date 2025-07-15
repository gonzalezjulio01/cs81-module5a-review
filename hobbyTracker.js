// hobbyTracker.js
// GitHub repo: https://github.com/gonzalezjulio01/cs81-module5a-review

// This is a log of hobbies done during the week
const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// This function adds up total minutes spent on all hobbies
function totalTime(log) {
  // reduce goes through each session and adds the minutes together
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

// This function returns a list of different hobbies done during the week
function uniqueHobbies(log) {
  // map creates a list of just the hobby names
  const names = log.map(entry => entry.hobby);
  // Set removes duplicates
  return [...new Set(names)];
}

// This function returns sessions that were longer than the given minutes
function longSessions(log, minMinutes) {
  // filter checks if each session's minutes are greater than minMinutes
  return log.filter(entry => entry.minutes > minMinutes);
}

// This function counts how many sessions had a specific mood
function countMood(log, moodType) {
  // filter keeps only entries where the mood matches, then we count the length
  return log.filter(entry => entry.mood === moodType).length;
}

// Console output to show the results
console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));

//  New test: count how many sessions had the mood "focused"
console.log("Number of focused sessions:", countMood(hobbyLog, "focused"));

//  Improvement Suggestion:
// The longSessions() function could be renamed to something clearer like filterByLength()
// It would better describe what it's doing (filtering, not returning raw data)
