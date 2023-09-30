import axios from "axios";

const useApi = axios.create({
    baseURL: "https://gougal-api.abbasali.cm"
})

export const findAllAnnonces = () => {
    return useApi.get("/annonces");
}

export const newAnnonce = (data: any) => {
    return useApi.post("/annonces", data);
}

export const newService = (data: any) => {
    return useApi.post("/services", data);
}

export const findAllServices = () => {
    return useApi.get("/services");
}

