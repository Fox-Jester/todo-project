

export default function parseDateTime(todo) {
  if (!todo.date) return null;

  const [month, day, year] = todo.date.split("-").map(Number);
  let hour = 0;
  let minute = 0;

  if (todo.time) {
    const time = todo.time
    const isPM = time.includes("pm");

    let [h, m] = time.replace("am", "").replace("pm", "").split(":").map(Number);

    if (isPM && h !== 12) h += 12;
    if (!isPM && h === 12) h = 0;

    hour = h;
    minute = m;
  }

  return new Date(year, month - 1, day, hour, minute);
}