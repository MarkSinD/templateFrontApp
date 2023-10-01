import {isRejectedWithValue, Middleware} from "@reduxjs/toolkit";

export const rtkQueryHandler: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const {payload} = action;

    if (payload.status === 500 || payload.status === 400) {
      console.log("Error")
    }
  }
  return next(action);
}