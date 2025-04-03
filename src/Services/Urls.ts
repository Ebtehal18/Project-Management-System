
// USERS_URLS
export const USERS_URLS={
    LOGIN:`/Users/Login`,
    REGISTER:`/Users/Register`,
    CREATE_MANAGER:`/Users/Create`,
    GET_USER:(id:number)=>`/Users/${id}`,
    ACTIVE_EMPLOYEE:(id:number)=>`/Users/${id}`,
    GET_USERS_COUNT:`/Users/count`,
    GET_USERS:`/Users/Manager`,
    VERIFY_USER:`/Users/verify`,
    GET_CURRENT_USER:`/Users/currentUser`,
    GIT_FILTER_LOGGED_USER:`/Users/`,
    UPDATE_PROFILE:`/Users/`,
    UPDATE_USER_PASSWORD:`/Users/ChangePassword`,
    Request_RESET_PASSWORD:`/Users/Reset/Request`,
    RESET_PASSWORD:`/Users/Reset`,

}

export const TASKS_URLS={
    ADD_NEW_TASK:`/Task`,
    EDIT_TASK:(id:number)=>`/Task/${id}`,
    GET_TASK:(id:number)=>`/Task/${id}`,
}

//tasks count
export const TASK_Count={
    GET_TASKS_COUNT:'/Task/count'
}
