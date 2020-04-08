import { createAction } from "redux-actions";

export const requestDog = createAction("REQUESTED_DOG");

export const requestDogSuccess = (data) => ({
  type: "REQUESTED_SUCCESS_DOG",
  url: data,
});

export const requestDogError = createAction("REQUESTED_ERROR_DOG");

export const fetchDog = (dispatch) => {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => console.log(data.message));
};
