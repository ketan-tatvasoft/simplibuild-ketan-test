import { 
  GET_USERS_SUCCESS, 
  GET_USERS_FAILED 
} from "../actions/users";

const initialState = {
  data: [],
  error: ""
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {    
    case GET_USERS_SUCCESS:
      return {
        ...state,        
        data: action.payload,
      };    
    case GET_USERS_FAILED:
      return { 
        ...state,
        error: action.payload 
      };
    default:
      return state;
  }
};

export default usersReducer;
