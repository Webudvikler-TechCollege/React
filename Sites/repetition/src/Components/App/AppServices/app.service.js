import API_URL from "./api.url";
import authHeader from "./auth.header";
import Axios from 'axios';

const getList = endpoint => {
	return Axios.get(`${API_URL}/${endpoint}`, {
		headers: authHeader()
	})
}

export { getList }