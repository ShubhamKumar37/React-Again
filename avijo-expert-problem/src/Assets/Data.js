export const BaseUrl = "https://avijobackend-production.up.railway.app";

export const formatDate = (dateString) => {
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const date = new Date(dateString);
  const day = date.getUTCDate().toString().padStart(2, "0"); // Add leading zero if needed
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear().toString().replace(/^/, ""); // Remove leading "20"

  return `${day} ${month} ${year}`;
};
