export const formatDate = (start: Date, end: Date | null): string => {
  const startString = start.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
  const endString = end
    ? end.toLocaleString("en-US", {
        month: "short",
        year: "numeric",
        timeZone: "UTC",
      })
    : "Present";

  return `${startString} - ${endString}`.toUpperCase();
};
