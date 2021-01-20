const db = require("../config/database");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.logUser = async (req, res) => {
    const { email,senha } = req.body;

    const mailConsult =  (await db.query('select * from polly_db.users where mail = $1', [email])).rows

    if( mailConsult.length > 0){

        bcrypt.compare(senha, mailConsult[0].password, (err,result)=>{
            if(err){
                return res.status(401).send({message: 'falha na autenticação'})
            }
            if(result){
                const token = jwt.sign({
                    user_id: mailConsult[0].user_id,
                    user_name: mailConsult[0].name,
                    user_mail: mailConsult[0].mail
                },
                process.env.JWT_KEY,
                {
                    expiresIn: "1d"
                })
                console.log("estou retornando")
                db.query('insert into polly_db.user_logs (user_id,access_hour ) values ($1,now())',
                [mailConsult[0].user_id])
                console.log('conectado')
                return res.status(201)
                            .send({
                                message: 'Autenticado com sucesso',
                               token:  token
                            })
            }
            return res.status(401).send({message: 'falha na autenticação'})
        })
    }
}