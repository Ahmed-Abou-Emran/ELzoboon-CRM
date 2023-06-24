// 2023-06-17T03:55:34.375999+00:00

export const formatDate = (date) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  const Time = dateObj.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${day}/${month}/${year} ${Time}`;
};
