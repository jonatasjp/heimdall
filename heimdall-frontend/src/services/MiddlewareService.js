import {HTTPv1} from '../utils/Http'

const save = (data, apiId) => {
    return HTTPv1.post('/apis/' + apiId + "/middlewares", data, {"Content-Type": "multipart/form-data"})
        .then(res => Promise.resolve(res.data))
        .catch(error => {
            console.log('Error: ', error)
            if (error.response && error.response.status === 404) {
                return null;
            }
            throw error;
        })
}

const getMiddlewares = (params = {params: {}}, apiId) => {
    return HTTPv1.get('/apis/' + apiId + "/middlewares", params)
        .then(res => {
            return Promise.resolve(res.data)
        }).catch(error => {
            console.log('Error: ', error)
            if (error.response && error.response.status === 404) {
                return null;
            }
            throw error;
        })
}

const getMiddleware = (id, apiId) => {

}

export const middlewareService = {
    save,
    getMiddlewares,
    getMiddleware
}