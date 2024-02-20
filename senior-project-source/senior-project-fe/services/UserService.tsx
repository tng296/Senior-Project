import axios from './customizedAxios';


const fetchAllUser = (page: number) => {
    return axios.get("/api/users?page=" + page);
}
const postUser = (email: string, password: string) => {
    return axios.post("/api/users", { email, password });
}

const updateUser = (email: string, password: string) => {
    return axios.put("/api/users/2", { email, password });
}
export { fetchAllUser, postUser, updateUser }