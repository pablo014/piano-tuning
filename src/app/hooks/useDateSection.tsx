export const getStartOfWeek = (date: Date | string): Date => {
  const today = new Date(date);
  today.setDate(today.getDate() - today.getDay());
  return today;
};
export const getEndOfWeek = (date: Date | string): Date => {
  const today = new Date(date);
  today.setDate(today.getDate() - today.getDay() + 6);
  return today;
};
export const getDateOfTheWeek = (date: Date | string, day: number): Date => {
    const today = new Date(date);
    today.setDate(today.getDate() - today.getDay() + day);
    return today;
  }