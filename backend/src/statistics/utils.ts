export const aggregateByField = (arr: any, field: string) => {
  const result = arr.reduce((obj: any, item: any) => {
    obj[item[field]] = item._count[field.toLowerCase()];
    return obj;
  }, {});

  return result;
};
