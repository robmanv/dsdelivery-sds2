import axios from "axios";

export function fetchProducts() {
    const API_URL = 'http://localhost:8080';
    return axios(`${API_URL}/products`);         /* devo usar crase */
}