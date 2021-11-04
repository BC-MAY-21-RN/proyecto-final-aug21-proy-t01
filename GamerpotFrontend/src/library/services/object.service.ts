export const removeNullProperties = (obj: any) => {
  for (let attribute in obj) {
    if (!obj[attribute] && obj[attribute] !== 0) {
      delete obj[attribute];
    }
  }
  return obj;
};
