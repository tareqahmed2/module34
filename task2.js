const tellJoke = () => {
  console.log("why don't");
};
const jokeInterval = setInterval(() => {
  tellJoke();
}, 2000);

setTimeout(() => {
  clearInterval(jokeInterval);
}, 10000);
