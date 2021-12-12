const INIT_STATE = {
    userToken: "",
    isLoggedIn: false,
    loginError: "",
    loginInAction: false
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case "LOGIN_INITIATED":
            return {
                ...state,
                loginInAction: true,
                loginError: ""
            }
        case "LOGIN_SUCCESSFUL":
            return {
                ...state,
                userToken: action.payload,
                loginError: "",
                isLoggedIn: true
            }
        case "LOGIN_FAILED":
            return {
                ...state,
                userToken: "",
                loginError: action.payload,
                isLoggedIn: false
            }
        case "LOGIN_COMPLETED":
            return {
                ...state,
                loginInAction: false
            }
        default:
            return state
    }
}
