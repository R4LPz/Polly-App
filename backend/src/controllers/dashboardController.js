const db = require("../config/database");

exports.allAnimals = async (req, res) => {

    
    const { rows } = await db.query(
        "SELECT * FROM polly_db.animals")

    if(rows.length > 0){
        return res.status(201).send({
            quantidade: rows.length,
            animais: rows.map(animal =>{
                return{

                    imagem: animal.image,
                    nome: animal.name,
                    idade: animal.age,
                    especie: animal.species,
                    raca: animal.breed,
                    custo: animal.cost,
                    descricao: animal.description 
                }
                
            })
        })
    }
    else{
        return res.status(201).send({
            quantidade: rows.length,
            animais: [],
            message: 'Nenhum animal encontrado'
        });
    }
}
