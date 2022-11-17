import httpRequest from "@/services/httpRequest";

const readServices = () => {
    return httpRequest.get('services');
}

const readService = (id) => {
    return httpRequest.get(`service/${id}`);
}

const createService = (params) => {
    return httpRequest.post(`service`, params);
}

const updateService = (params, id) => {
    return httpRequest.put(`service/${id}`, params);
}

const deleteService = (id) => {
    return httpRequest.delete(`service/${id}`);
}

export {
    readServices,
    readService,
    createService,
    updateService,
    deleteService
}