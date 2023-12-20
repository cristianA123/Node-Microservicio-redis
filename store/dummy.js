const db = {
    user: [
        {
            id: '1',
            name: 'Carlos'
        }
    ]
}

const list = async (tabla) => {
    return db[tabla] || []
}

const get = async (tabla, id) => {
    let col = await list(tabla)
    return col.find(item => item.id == id) || null
}

const upsert = async (tabla, data) => {
    if (!db[tabla]) {
        db[tabla] = [];
    }

    db[tabla].push(data);
}

const remove = async (tabla, id) => {
    return true
}

const query =async  ( tabla, q ) => {
    let col = await list(tabla);
    let keys = Object.keys(q);
    let key = keys[0];
    const algo = col.filter(item => item[key] == q[key])[0] || null;
    console.log(algo)
    return algo;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
    query,
}