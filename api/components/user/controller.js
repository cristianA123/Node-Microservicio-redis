const { v4: uuidv4 } = require('uuid');

const auth = require('../auth')

const TABLA = 'user'

controler = (injectedStore, injectedCache) => {

    let cache = injectedCache;
    let store = injectedStore;
    if(!store) {
        store = require('../../../store/dummy')
    }

    if(!cache) {
        cache = require('../../../store/dummy')
    }

    const list = async () => {
        let users = await cache.list(TABLA)
        if(!users) {
            console.log('No estaba en cache, buscando en db')
            users = await store.list(TABLA)
            cache.upsert(TABLA, users)
        } else {
            console.log('Nos traemos datos de cache')
        }
        return users
    }

    const get = (id) => {
        return store.get(TABLA, id)
    }

    const upsert = async (body) => {

        const user = {
            name: body.name,
            username: body.username,
            password: body.password
        }

        if( body.id ) {
            user.id = body.id
        } else {
            user.id = uuidv4()
        }

        if ( body.password || body.username) {
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: user.password
            })
        }

        return store.upsert(TABLA, user)
    }


    return {
        list,
        get,
        upsert
    }

}

module.exports = controler