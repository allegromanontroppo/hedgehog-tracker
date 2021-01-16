export function timeAtMidday(time = new Date()) {
  if (time.getHours() < 12) {
    time.setDate(time.getDate() - 1);
  }

  time.setHours(12, 0, 0, 0);

  return time;
}

export function timeXHoursAgo(hours) {
  const ts = Math.round(new Date().getTime() / 1000);

  return new Date(ts - hours * 3600 * 1000);
}

export function timeDiff(previous) {
  const ts = new Date().getTime();

  return Math.round((ts - previous.getTime()) / 1000);
}
