export const makeEnum = (object) => {
  return Object.keys(object).reduce((objEnum, key) => {
    objEnum[key] = key;
    return objEnum;
  }, {});
}
