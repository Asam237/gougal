import axios from "axios";

const api = axios.create({
    baseURL: "https://gougal-api.abbasali.cm"
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

