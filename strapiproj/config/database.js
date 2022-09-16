module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env(
        "DATABASE_HOST",
        "strapi-mysql-service.mysql.database.azure.com"
      ),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "strapidb"),
      user: env("DATABASE_USERNAME", "vikram"),
      password: env("DATABASE_PASSWORD", "Muraly@123"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
