export const delay = time => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
};
export const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
