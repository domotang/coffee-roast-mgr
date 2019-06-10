var config = {
  dev: "development",
  test: "testing",
  prod: "production",
  port: process.env.PORT || 3000,
  db: {
    url: "mongodb://localhost/coffeebean"
  }
}

module.exports = config;