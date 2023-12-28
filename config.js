
module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 4000,
    },
    post: {
        port: process.env.POST_PORT || 4002,
        host: process.env.POST_HOST || 'http://localhost',
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'secret'
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DATABASE || 'store'
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'http://localhost',
        port: process.env.MYSQL_SRV_PORT || 4001,
    },
    cacheService: {
        host: process.env.MYSQL_SRV_HOST || 'http://localhost',
        port: process.env.MYSQL_SRV_PORT || 4003,
    },
    redis: {
        host: process.env.REDIS_HOST || 'redis-13698.c321.us-east-1-2.ec2.cloud.redislabs.com',
        port: process.env.REDIS_PORT || 13698,
        user: process.env.REDIS_USER || 'default',
        password: process.env.REDIS_PASS || '7jWBBuS4HUaIshPkRN68CsFugkj0vDgP',
    }


}
