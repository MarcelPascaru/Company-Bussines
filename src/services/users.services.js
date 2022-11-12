import httpRequest from "@/services/httpRequest";

const readUsers = (param) => {
    return httpRequest.get(param);
}

const readUser = (param, id) => {
    return httpRequest.get(`${param}/${id}`);
}

const createUser = (params) => {
    return httpRequest.post(`employee`, params);
}

const updateUser = (params, id) => {
    return httpRequest.put(`employee/${id}`, params);
}

const deleteUser = (id) => {
    return httpRequest.delete(`employee/${id}`);
}

export {
    readUsers,
    readUser,
    createUser,
    updateUser,
    deleteUser
}