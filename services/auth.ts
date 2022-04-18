import callAPI from "../config/api";
import { LoginTypes } from "./data-types";

const ROOT_API= process.env.NEXT_PUBLIC_API;
const API_VERSON= 'api/v1';

export async function setSignUp(data: FormData){
    const url= `${ROOT_API}/${API_VERSON}/auth/signup`;

    return callAPI({
        url,
        method: 'POST',
        data,
    });
}

export async function setLogin(data: LoginTypes) {
    const url= `${ROOT_API}/${API_VERSON}/auth/signin`;

    return callAPI({
        url,
        method: 'POST',
        data,
    });
}