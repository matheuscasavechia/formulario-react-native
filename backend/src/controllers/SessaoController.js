const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { id } = request.body;

        const rh = await connection ('rh')
            .where('id', id)
            .select('name')
            .first();

        if (!rh){
            return response.status(400).json({ error: ' Rh employee not found with this ID'});
        }

        return response.json(rh);
    }
}