/**
 * Format a date (Date object or string like "2025-10-7" / "2025-10-07" / ISO)
 * into: "October 7th, 2025"
 *
 * @param {string|Date|number} input
 * @returns {string}
 */
function formatDate(input) {
  if (!input) return "";

  let d;
  if (input instanceof Date) {
    d = input;
  } else if (typeof input === "number") {
    d = new Date(input);
  } else if (typeof input === "string") {
    // Accept "YYYY-M-D" or "YYYY-MM-DD" or full ISO strings
    const dashMatch = input.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    if (dashMatch) {
      const [, y, m, day] = dashMatch;
      d = new Date(Number(y), Number(m) - 1, Number(day));
    } else {
      d = new Date(input);
    }
  } else {
    d = new Date(input);
  }

  if (Number.isNaN(d.getTime())) return "";

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = d.getFullYear();
  const day = d.getDate();
  const month = months[d.getMonth()];

  const ord = (() => {
    const rem100 = day % 100;
    if (rem100 >= 11 && rem100 <= 13) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  })();

  return `${month} ${day}${ord}, ${year}`;
}

export default formatDate;
