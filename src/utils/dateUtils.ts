//format : yyyy.mm.dd
export const dateFormatUtils = {
  format: (date: Date) => {
    return (
      date.getFullYear().toString().slice(0, 4) +
      '.' +
      (date.getMonth() < 9
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1) +
      '.' +
      (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
    );
  },
};
