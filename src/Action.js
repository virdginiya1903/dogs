export const fetchDog = (dispatch) => {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => console.log(data.message));
};
