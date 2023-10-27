const express = require("express");
const app = express()
const {ApolloServer} = require("apollo-server")
const {typeDefs} = require("./model/typeDef")
const {resolvers} = require("./model/resolver")
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/demoProject")

const server = new ApolloServer({typeDefs,resolvers})

let ans = ""
for(let i=0 ; i<5 ;i++){
    for(let j=0 ; j<=i ; j++){
        ans += i
    }
    ans += "\n"
}
console.log(ans);

server.listen().then(({url,port})=>{
    console.log("Start Server Port:- ",port)
})