import axios from 'axios'

import { urlAPI } from './MockDataAPI'

type httpMethods = 'GET' | 'PUT' | 'POST' | 'DELETE'

// You can manage refresh token here
// You can centralize error handling here
async function fetchWrapper(method: httpMethods, path: string, params: any) {
	const url = `${urlAPI}${path}`
	const requestParams: any = {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		url,
	}
	if (method === 'GET') {
		requestParams.params = params
	}
	const response = await axios(requestParams)
	return response.data
}

export function getData(path: string, params: unknown = {}) {
	return fetchWrapper('GET', path, params)
}

export function postData(path: string, params: unknown = {}) {
	return fetchWrapper('POST', path, params)
}
