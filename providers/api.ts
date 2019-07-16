import axios from "axios";

const api = axios.create();

const onResponseSuccess = (response: any) => response;

const onResponseError = async (err: any) => {
    const status = err.status || err.response.status;

    if (status >= 500) {
        alert(
            `${status} was thrown by the API. See console for more information`
        );
        console.error(err);
    }

    return Promise.reject(err);
};

api.interceptors.response.use(onResponseSuccess, onResponseError);

export default api;
