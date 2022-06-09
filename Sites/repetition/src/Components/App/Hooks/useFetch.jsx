import { useState, useEffect } from "react";
import axios from 'axios'

/**
 * Custom Hook til API kald
 * @param {String} url API Endpoint (Required)
 * @param {String} method HTTP Request Method (Optional)
 * @param {Object} body Request Body Data (Optional)
 * @returns Object
 */
export const useFetch = (url, method = 'GET', body = null) => {
	const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
	const [serverError, setServerError] = useState(null);

	useEffect(() => {
		setIsLoading(true)
		const fetchData = async () => {
			try {
				const response = await axios({
					method: method,
					url: url,
					data: body
				})
				const data = await response?.data
				setApiData(data);
				setIsLoading(false)
			}
			catch (error) {
				setServerError(error);
				setIsLoading(false)
			}
		}
		fetchData()
	}, [url, method, body]);

    return { isLoading, apiData, serverError }
}