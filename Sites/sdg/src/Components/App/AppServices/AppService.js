import API_URL from "./ApiUrl";
import AuthHeader from "./AuthHeader";
import Axios from 'axios';

const getList = endpoint => {
	return Axios.get(`${API_URL}/${endpoint}`, {
		headers: AuthHeader()
	})
}

const getDetails = (endpoint, id) => {
	return Axios.get(`${API_URL}/${endpoint}/${id}`, {
		headers: AuthHeader()
	})
}

const AppService = {
	getList,
	getDetails
}

export { AppService }