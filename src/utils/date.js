const getTodayWithFormat = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();

  return `${year}.${month}.${date}`;
};

export default {
  getTodayWithFormat,
};
