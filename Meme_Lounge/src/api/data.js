import * as api from './api.js'

export const login = api.login
export const register = api.register
export const logout = api.logout


export async function getAll(){
    return api.get('/data/memes?sortBy=_createdOn%20desc')
}

// export async function getById(id){
//     return api.get(edndpoints.byId + id)
// }

// export async function getMyItems(userId){
//     return api.get(edndpoints.myItems(userId))
// }

// export async function createItem(data) {
//     return api.post(edndpoints.create, data)
// }

// export async function editItem(id, data) {
//     return api.put(edndpoints.edit + id, data)
// }

// export async function deleteItem(id, data) {
//     return api.del(edndpoints.delete + id)
// }