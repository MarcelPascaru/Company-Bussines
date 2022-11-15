import httpRequest from "@/services/httpRequest";

const readBrands = () => {
    return httpRequest.get('brands');
}

const readBrand = (id) => {
    return httpRequest.get(`brand/${id}`);
}

const createBrand = (params) => {
    return httpRequest.post(`brand`, params);
}

const updateBrand = (params, id) => {
    return httpRequest.put(`brand/${id}`, params);
}

const deleteBrand = (id) => {
    return httpRequest.delete(`brand/${id}`);
}

export {
    readBrands,
    readBrand,
    createBrand,
    updateBrand,
    deleteBrand
}