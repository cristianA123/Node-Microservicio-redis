
module.exports = {

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


}
