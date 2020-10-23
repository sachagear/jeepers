const http = require('http');
const { networkInterfaces } = require('os');
let obj = {};

const interface = networkInterfaces();
let port = 80;
let host = '0.0.0.0';
let address = 'not-determined';

if(interface['eth0']){
    if(interface['eth0'][0]){
        if(interface['eth0'][0]["address"]){
            address = interface['eth0'][0]["address"];
        }
    }
}

const listener = function (req, res) {

     res.setHeader("Content-Type", "application/json");
     res.writeHead(200);
     res.end(`pod-${address} --  {"message": "This is a JSON response"}    ${ new Date()}  `);
     console.log(req);
};


const server = http.createServer(listener);
server.listen(port,host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});