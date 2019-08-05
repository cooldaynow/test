export const delay = time => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
};
export const random = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);
export const sortByField = field => (a, b) => {
  let [wordCountFirst, wordCountSecond] = [
    a[field].split(' ').length,
    b[field].split(' ').length,
  ];
  return wordCountSecond - wordCountFirst;
};

export const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
  navigator.userAgent,
);
