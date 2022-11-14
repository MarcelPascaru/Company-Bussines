import httpRequest from "@/services/httpRequest";

const readUsers = () => {
    return httpRequest.get('employees');
}

const readUser = (id) => {
    return httpRequest.get(`employee/${id}`);
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