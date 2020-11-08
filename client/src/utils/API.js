import axios from "axios";

export function getItems() {
	return axios.get("/api/items");
}

export function saveItem() {
	return axios.post("/api/items");
}
