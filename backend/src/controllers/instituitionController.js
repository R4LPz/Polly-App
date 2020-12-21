const db = require("../config/database");

exports.createInstituition = async (req, res) => {
    const { nome,endereco,numero,cidade, estado, telefone, email,descricao } = req.body;
    const imagem = req.file.path

    const { rows } = await db.query(
        "INSERT INTO polly_db.instituitions (image, name,address,number,city, state, phone, mail,description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
        [ imagem, nome,endereco,numero,cidade, estado, telefone, email,descricao]);

    return res.status(201).send({
        message: "Instituição inserida com sucesso!!",
        body: {
            cliente: { imagem,
                        nome,
                        endereco,
                        numero,
                        cidade,
                        estado,
                        telefone,
                        email,
                        descricao
                    }
        },
    });
}