const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const rh = await connection('rh').select('*');

        return response.json(rh);
    },

    async create(request, response){
        const { name, email, telefone } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('rh').insert({
            id,
            name,
            email,
            telefone,
        })

        return response.json({ id }); 
    }
};