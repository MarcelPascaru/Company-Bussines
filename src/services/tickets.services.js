import httpRequest from "@/services/httpRequest";

const readTickets = () => {
    return httpRequest.get('tickets');
}

const readTicket = (id) => {
    return httpRequest.get(`ticket/${id}`);
}

const createTicket = (params) => {
    return httpRequest.post(`ticket`, params);
}

const updateTicket = (params, id) => {
    return httpRequest.put(`ticket/${id}`, params);
}

const deleteTicket = (id) => {
    return httpRequest.delete(`ticket/${id}`);
}

export {
    readTickets,
    readTicket,
    createTicket,
    updateTicket,
    deleteTicket
}