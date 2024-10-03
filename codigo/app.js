//importando bibliotacas
const express = require('express');
const session = require('express-session');
const fs = require('fs');
const path = require('path');


//iniciando express
const app = express()

//classificando os arquivos da pasta 'arqEstaticos' como estáticos (não precisam ser requisitados individualmente)
app.use(express.static(path.join(__dirname, 'arqEstaticos')));

// Define o tempo máximo de cache das imagens para um dia
app.use('/image', express.static(path.join(__dirname, 'public/image'), {
    maxAge: '1d' // Define o tempo máximo de cache para um dia
}));

//criação das rotas (End-Points)

app.get('/', (req,res) => {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
            res.status(500).send('500 - Erro no servidor: ' + err);
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});

app.get('/cardapio', (req,res) => {
    fs.readFile(path.join(__dirname, 'cardapio.html'), (err, data) => {
        if (err) {
            res.status(500).send('500 - Erro no servidor: ' + err);
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});

app.get('/pedido', (req,res) => {
    fs.readFile(path.join(__dirname, 'pedido.html'), (err, data) => {
        if (err) {
            res.status(500).send('500 - Erro no servidor: ' + err);
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});

app.get('/localizacao', (req,res) => {
    fs.readFile(path.join(__dirname, 'localizacao.html'), (err, data) => {
        if (err) {
            res.status(500).send('500 - Erro no servidor: ' + err);
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});

app.get('/appPizzaria.js', (req, res) => {
    fs.readFile(path.join(__dirname, 'appPizzaria.js'), (err, data) => {
        if (err) {
            res.status(500).send('500 - Erro interno do servidor' + err);
        } else {
            res.status(200).type('text/javascript').send(data);
        }
    });
});


// Configuração do server
const PORT = 4500;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
})