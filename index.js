const gameEvents = new Map([
  [17, "⚽ Goal"],
  [36, "🔂 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔂 Substitution"],
  [64, "🔶 Yellow Card"],
  [69, "🔴 Red Card"],
  [70, "🔂 Substitution"],
  [72, "🔂 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

//2
console.log(gameEvents.delete(47));

//3
console.log(
  `An event happen on average, every ${90 / gameEvents.size} minutes`
);

//4

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}:${event}`);
}
