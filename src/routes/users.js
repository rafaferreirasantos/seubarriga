module.exports =  (app) => {
    const listAll = async (req, res) => {
        const users = await app.db('users').select()
            .then((result) => res.status(200).json(result))
    };

    const create = async (req, res) => {
        const result = await app.db('users')
            .insert(req.body, '*')
        res.status(201).json(result[0])
    }
    return {
        listAll,
        create
    }
}