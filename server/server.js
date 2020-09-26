const bodyParser = require('body-parser')
const path = require('path')
var delay = require('express-delay');
const express = require('express')

const isProduction = process.env.NODE_ENV==='production'
const port = (process.env.PORT) ? process.env.PORT : 3001   
const jsonPort = (process.env.PORT_JSON) ? process.env.PORT_JSON : 4444

const app = express()

const jsonServer = require('json-server')
const server = jsonServer.create()
// below Route will target the file to pick the data
const router = jsonServer.router('./server/db.json');
// console.log(
//     "router",router
// )
const middelwares = jsonServer.defaults()

// app.use(bodyParser.urlencoded({
//     extended: true
//   }));

app.use(bodyParser());

//Server static assets
app.use(express.static('./build'))
app.get(/\/react-assets\//,(req,res,next)=>{
    const assetsPattern = /\/react-assets\/(.*)$/
    const match = req.path.match(assetsPattern)
    if(match.length>0){
        const assetPath = match[1].replace(/\/+$/,'')
        res.sendFile( 9)
        //here i didn't add 
        /**{
         *  root:'path'
         * maxAge:'1 year'
         * }
         * 
         * */
    }else{
        next()
    }
})

/**
 * Adding routes
*/
app.get('/',(req,res)=>{
    res.send({name:"Check"})
})

app.get('/name',(req,res)=>{
    res.send({name:"Check"})
})
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./build','index.html'))
})
app.post('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./build','index.html'))
})   


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})


//Server API requests that will be mocked to match production endpoints
server.use(middelwares)
server.use(delay(1000))
server.use('/api',router);
server.listen(jsonPort,()=>{
    console.log(`JSON Server is running on port ${jsonPort}`)
})
