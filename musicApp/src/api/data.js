import * as api from './api.js'

export const login = api.login
export const register = api.register
export const logout = api.logout


export async function getAll(){
    return api.get('/data/albums?sortBy=_createdOn%20desc&distinct=name')
}

export async function getById(id){
    return api.get('/data/albums/' + id)
}

export async function createItem(data) {
    return api.post('/data/albums', data)
}

export async function editItem(id, data) {
    return api.put('/data/albums/' + id, data)
}

export async function deleteItem(id) {
    return api.del('/data/albums/' + id)
}