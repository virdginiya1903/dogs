import { createAction } from "redux-actions";

export const requestDog = createAction("REQUESTED_DOG");

export const requestDogSuccess = createAction("REQUESTED_SUCCESS_DOG");

export const requestDogError = createAction("REQUESTED_ERROR_DOG");

export const fetchDog = (dispatch) => {
  dispatch(requestDog());
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then(
      (data) => dispatch(requestDogSuccess(data.message)),
      (err) => dispatch(requestDogError())
    );
};
