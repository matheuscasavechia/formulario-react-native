const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const { page = 1 } = request.query;

        const [count] = await connection('funcionarios').count();
        
        const funcionarios = await connection('funcionarios')
        .join('rh', 'rh.id', '=', 'funcionarios.rh_id')
        .offset((page -1) * 5)
        .select([
         'funcionarios.*',
         'rh.name',
         'rh.email',
         'rh.telefone'
        ]);

        response.header('Total-Funcionarios', count['count(*)']);

        return response.json(funcionarios);
    },
    async create(request, response){
        const { nome_funcionario, email_funcionario, value } = request.body;

        const rh_id = "5279f14e";

        const [id] = await connection('funcionarios').insert({
            nome_funcionario,
            email_funcionario,
            value,
            rh_id
        });

        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;
        const rh_id = "5279f14e";

        const funcionario = await connection('funcionarios')
            .where('id', id)
            .select('rh_id')
            .first();
        
        if (funcionario.rh_id != rh_id){
            return response.status(401).json({ error: 'Operation no permitted.' });
        }

        await connection('funcionarios').where('id', id).delete();

        return response.status(204).send();
    },

    async put(request, response){
        const { nome_funcionario, email_funcionario, value, id } = request.body;
        console.log(parseFloat(value));

        await connection('funcionarios')
            .where('id', id)
            .update({nome_funcionario: nome_funcionario, email_funcionario: email_funcionario, value: parseFloat(value)});

        return response.status(204).send();
    },
};
