import axios from "axios";
import { Order } from "./types";
/*const API_URL = 'http://192.168.15.22:8080' */
const API_URL = 'https://robson-sds2.herokuapp.com'

export function fetchOrders() {
    return axios(`${API_URL}/orders`)
}

export default function setDelivered(orderId: number) {
    return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}

