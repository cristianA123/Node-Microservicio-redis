const redis = require('redis');

const config = require('../config');

const client = redis.createClient({
    // host: config.cacheService.dbHost,
    // port: config.cacheService.dbPort,
    // password: config.cacheService.dbPass
    url: `redis://${config.redis.user}:${config.redis.password}@${config.redis.host}:${config.redis.port}`
  });
  
  (async () => {
    await client.connect();
    console.log('Conectado a REDIS');
  })();
  
    const  list = async (table) => {
      const value = await client.get(table);
      return JSON.parse(value);
    }
  
    const  get = async(table, id) => {
      const value = await client.get(`${table}_${id}`);
      return JSON.parse(value);
    }
  
    const  upsert = async (table, data) => {
      let key = table;
      if (data && data.id) {
        key += '_' + data.id;
      }
      await client.set(key,JSON.stringify(data), 'EX', 10);
      return true;
    }

module.exports = {
    list,
    get,
    upsert
}