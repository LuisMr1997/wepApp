import axios from "axios";

export async function httpServer(url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', data?: any, headers?: any) {
    const response = await axios({
        url,
        method,
        data,
        headers
    });
    return response.data;
}