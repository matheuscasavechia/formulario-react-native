const connection = require('../database/connection');

module.exports = {
    async index (request, response){
        const rh_id = request.headers.authorization;

        const funcionarios = await connection('funcionarios')
            .where('rh_id', rh_id)
            .select('*');
        
        return response.json(funcionarios);
    }
}