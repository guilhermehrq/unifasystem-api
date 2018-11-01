const request = require('request-promise');

module.exports = {
    selecionar
};

async function selecionar(params) {
    try {
        let data = [];

        let res =  await request({
            url: `http://dev2.unifacef.com.br:8000/api/disciplinaDocente/${params.codigoProfessor}`,
            method: 'GET',
            json: true
        });

        let filtrar = params.idTurma === null;

        res.forEach(item => {
            if(filtrar || item.id_serie == params.idTurma) {
                data.push({
                    id: item.id_disciplina,
                    nome: item.nome_disciplina,
                    serie: item.nome_serie
                });
            }
        });

        return data;
    } catch (error) {
        throw error;
    }
}