const initialState = {
  url: "https://images.dog.ceo/breeds/australian-shepherd/sadie.jpg",
  loading: false,
  error: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUESTED_DOG":
      return {
        url: "https://images.dog.ceo/breeds/australian-shepherd/sadie.jpg",
        loading: true,
        error: false,
      };

    case "REQUESTED_SUCCESS_DOG":
      return {
        url: action.url,
        loading: false,
        error: false,
      };

    case "REQUESTED_ERROR_DOG":
      return {
        url:
          "https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_15602.jpg",
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
