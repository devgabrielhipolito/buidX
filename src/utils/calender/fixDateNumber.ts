export const fixDateNumber = (dd: number, mm: number, yyyy: number) => {
  if (dd < 10) {
    return `0${dd}/${mm}/${yyyy}`;
  }
  return `${dd}/${mm}/${yyyy}`;
};
