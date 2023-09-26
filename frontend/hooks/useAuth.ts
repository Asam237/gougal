import {useCookies} from "react-cookie";

const useAuth = () => {
    const [cookie, setCookie, removeCookie] = useCookies(["auth"]);
    const saveToken = (uid: any, token: any) => {
        setCookie("auth", {uid, token}, {path: "/"});
    };
    const removeToken = () => {
        removeCookie("auth", {path: "/"});
    }
    return {saveToken, removeToken};
}

export {useAuth};