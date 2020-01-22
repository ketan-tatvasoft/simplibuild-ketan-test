export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILED = "GET_USERS_FAILED";

// users api return successfully with data
export const getUsersSuccess = payload => ({
  type: GET_USERS_SUCCESS,
  payload
});

// users api return error
export const getUsersFailed = payload => ({
  type: GET_USERS_FAILED,
  payload
});
