import httpRequest from "@/services/httpRequest";

const readSponsors = () => {
    return httpRequest.get('sponsors');
}

const readSponsor = (id) => {
    return httpRequest.get(`sponsor/${id}`);
}

const createSponsor = (params) => {
    return httpRequest.post(`sponsor`, params);
}

const updateSponsor = (params, id) => {
    return httpRequest.put(`sponsor/${id}`, params);
}

const deleteSponsor = (id) => {
    return httpRequest.delete(`sponsor/${id}`);
}

export {
    readSponsors,
    readSponsor,
    createSponsor,
    updateSponsor,
    deleteSponsor
}