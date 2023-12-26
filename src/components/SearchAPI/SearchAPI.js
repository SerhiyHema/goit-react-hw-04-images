import axios from "axios";

const KEY_API = '40252530-8571e952a05bfbe082a85c49d';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImages( searchName, page ) {
    const params = new URLSearchParams({
        key: KEY_API,
        q: searchName,
        page: page,
        per_page: 12
    });
    const { data } = await axios.get(`${BASE_URL}?${params}`);
    return data;
}