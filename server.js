const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./route")

const server = express()

server.use(express.urlencoded({ extended: true })) //faz o método post ser do body
server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


server.listen(5000, function () {
    console.log("server is running")
})