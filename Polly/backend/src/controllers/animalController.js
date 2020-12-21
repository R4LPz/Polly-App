const db = require("../config/database");


exports.createAnimal = async (req, res) => {
    const { nome, idade,especie,raca,custo,descricao } = req.body;
    const imagem = req.file.path
    
    const { rows } = await db.query(
        "INSERT INTO polly_db.animals ( image, name, age,species,breed,cost,description) VALUES ($1, $2, $3, $4, $5, $6, $7)",
        [imagem , nome, idade,especie,raca,custo,descricao ]);

    return res.status(201).send({
        message: "Animal inserido com sucesso!!",
        body: {
            cliente: {
                imagem,
                nome,
                idade,
                especie,
                raca,
                custo,
                descricao 
            }
        },
    });
}