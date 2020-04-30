const formatDate = (date: Date): string => {
  const newDate = new Date(date);

  const formatadedDate = `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
  console.log(formatadedDate);

  return formatadedDate;
};

export default formatDate;
