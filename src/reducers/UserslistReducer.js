const initialState = {
  users: [],
  loading: true
};

export default function UserslistReducer(state = initialState, action) {
  if (action.type === "GET_USERS") {
    return {
      ...state,
      users: action.payload,
      loading: false
    };
  } else if (action.type === "USERS_ERROR") {
    return {
      ...state,
      loading: false,
      error: action.payload
    };
  }
  return state;
}
