const jokeCollection = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data["joke"]);
  } catch (error) {
    console.log(error);
  }
};
jokeCollection("https://v2.jokeapi.dev/joke/programming?type=single");
