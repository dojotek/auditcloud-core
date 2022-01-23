module.exports = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "auditcloud",
    "password": "auditcloud",
    "database": "auditcloud",
    "migrations": [
        "database/migrations/*.ts",
    ],
    "cli": {
        "migrationsDir": "database/migrations"
    }
}
