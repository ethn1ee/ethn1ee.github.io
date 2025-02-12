export const formatDate = (start: Date, end: Date): string => {
  return `${new Date(start).toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  })} - ${new Date(end).toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  })}`.toUpperCase();
};
