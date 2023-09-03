import axios from 'axios'

// export const urlAPI = 'https://615f5fb4f7254d0017068109.mockapi.io/api/v1/'
const urlAPI = 'http://localhost:4200/api/'

type httpMethods = 'GET' | 'PUT' | 'POST' | 'DELETE'

// You can manage refresh token here
// You can centralize error handling here
async function fetchWrapper(method: httpMethods, path: string, params: any) {
	// try {
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
	// const response = await axios(requestParams)
	await axios(requestParams)
		.then((response) => {
			// Traitement des données en cas de succès
			console.log('fetchWrapper response : ', response)
			return response.data
		})
		.catch((error) => {
			// Gestion des erreurs ici
			console.error('fetchWrapper error : ', error)
		})
	// console.log('fetchWrapper response : ', response)
	// return response.data
	// 	} catch (error) {
	// 		console.log('fetchWrapper error : ', error)
	// 		throw error
	// 	}
}

export function getData(path: string, params: unknown = {}) {
	return fetchWrapper('GET', path, params)
}

export function postData(path: string, params: unknown = {}) {
	return fetchWrapper('POST', path, params)
}
