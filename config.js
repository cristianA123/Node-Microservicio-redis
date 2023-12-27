
module.exports = {

    api: {
        port: process.env.API_PORT || 4000,
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
