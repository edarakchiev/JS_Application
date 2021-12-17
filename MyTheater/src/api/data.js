import * as api from './api.js'

export const login = api.login
export const register = api.register
export const logout = api.logout


export async function getAll(){
    return api.get('/data/theaters?sortBy=_createdOn%20desc&distinct=title')
}

export async function getById(id){
    return api.get('/data/theaters/' + id)
}

export async function getProfileItem(userId){
    return api.get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}


export async function createItem(data) {
    return api.post('/data/theaters', data)
}

export async function editItem(id, data) {
    return api.put('/data/theaters/' + id, data)
}

export async function deleteItem(id) {
    return api.del('/data/theaters/' + id)
}