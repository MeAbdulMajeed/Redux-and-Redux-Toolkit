const logger = (store) => (next) => (action) => {
    console.log("store", store);
    return next(action);
  };