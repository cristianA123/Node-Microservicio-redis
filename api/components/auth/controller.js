const { sign } = require('../../../auth');
const bcrypt = require('bcrypt');

const {error} = require("./../../../utils/error");

const TABLA = 'auth'

controler = (injectedStore) => {

    let store = injectedStore;
    if(!store) {
        store = require('../../../store/dummy')
    }

    const login = async (username, password) => {
   
        const data = await store.query(TABLA, {username})

        return bcrypt.compare(password, data.password)
            .then(sonIguales => {
                if (sonIguales === true) {
                    // Generar token
                    return sign(data)
                } else {
                    throw error('No puedes hacer esto', 401);
                }
            })
    }


    const upsert = async (data) => {

        const authData = {
            id: data.id
        }


        if( data.username ) {
            authData.username = data.username
        }

        if( data.password ) {
            authData.password = await bcrypt.hash(data.password, 10)
        }

        return store.upsert(TABLA, authData)
    }


    return {
        upsert,
        login
    }

}

module.exports = controler