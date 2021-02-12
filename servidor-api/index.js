const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload =  require('express-fileupload');//npm install --save express-fileupload

const app = express();
const port = 3001;

//deixa diretorio public na internet
app.use(express.static('public'));

//Configuracao permissao de acesso client-server
app.use(cors());

//Obtem os dados da requisicao
app.use(bodyParser.json());

//upload arquivo
app.use(fileUpload({ createParentPath: true}))

//funções dos endpoints
const  upload  = require('./Controllers/upload');

//Carregar arquivo
app.post('/upload', upload);


app.listen(port, () => console.log('Servidor Inicializado na porta: ' + port));