import axios from "axios";

const api = axios.create({
    baseURL: "http://195.201.138.208:3010"
})

export const findAllAnnonces = () => {
    return api.get("/annonces");
}

export const newAnnonce = (data: any) => {
    return api.post("/annonces", data);
}

export const newService = (data: any) => {
    return api.post("/services", data);
}

export const findAllServices = () => {
    return api.get("/services");
}

