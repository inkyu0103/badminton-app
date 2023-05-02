export const aggregateByField = (arr, field) => {
  const result = arr.reduce((obj, item) => {
    obj[item[field]] = item._count[field.toLowerCase()];
    return obj;
  }, {});
  return result;
};
