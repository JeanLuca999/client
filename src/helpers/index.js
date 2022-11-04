export const validateName = (value) => {
  return value.length > 1;
};

export const validateEmail = (value) => {
  return value.includes("@");
};

export const validatePassword = (value) => {
  return value.length > 2;
};

export const validateIsPasswordsEqual = (value, compare) => {
  return value === compare && value !== "";
};

export const validateNotEmpty = (value) => {
  return value !== "";
};
