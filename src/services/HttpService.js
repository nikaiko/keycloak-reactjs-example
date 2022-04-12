import axios from "axios";

const HttpMethods = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
};

const _axios = axios.create();

const getAxiosClient = () => _axios;

const HttpService = {
    HttpMethods,
    getAxiosClient,
};

export default HttpService;
