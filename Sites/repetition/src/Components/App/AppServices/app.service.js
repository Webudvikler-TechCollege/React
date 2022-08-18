import API_URL from "./api.url";
import authHeader from "./auth.header";
import Axios from 'axios';

const getList = endpoint => {
	return Axios.get(`${API_URL}/${endpoint}`, {
		headers: authHeader()
	})
}

const getDetails = (endpoint, id) => {
	return Axios.get(`${API_URL}/${endpoint}/${id}`, {
		headers: authHeader()
	})
}

const appService = {
	getList,
	getDetails
}

export { appService }