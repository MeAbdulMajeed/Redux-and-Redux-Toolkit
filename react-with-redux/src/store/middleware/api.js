export const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    const BASE_URL = "https://fakestoreapi.com";
    if (action.type === "api/makeCall") {
    //   next(action);
      const { url, onSuccess, onStart, onError, transformRespone } =
        action.payload;
      dispatch({ type: onStart });
      fetch(`${BASE_URL}/${url}`)
        .then((res) => res.json())
        .then((data) => {
          const finalData = transformRespone ? transformRespone(data) : data;
          dispatch({
            type: onSuccess,
            payload: finalData,
          });
        })
        .catch((error) => {
          dispatch({
            type: onError,
          });
          console.log("error", error);
        });
    } else {
      next(action);
    }
  };

export const fetchData = (payload) => ({ type: "api/makeCall", payload });
