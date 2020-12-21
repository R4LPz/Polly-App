const db = require('../config/database'); //conexao com o bd
const bcrypt = require('bcrypt')


exports.createUser = async (req, res) => {
    const { nome, telefone, email,senha } = req.body;
    
    bcrypt.hash(senha, 10, (errBcrypt, hash)=>{
        if(errBcrypt) { 
            return res.status(500).send({error: errBcrypt})
        }

        const { rows } = db.query(
            "INSERT INTO polly_db.users (name, phone, mail, password) VALUES ($1, $2, $3, $4)",
            [ nome, telefone, email, hash]);
    })
    return res.status(201).send({
        message: "Usuário inserido com sucesso!!",
        body: {
            cliente: { nome,
                        telefone,
                        email }
        },
    });
}
