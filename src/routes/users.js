module.exports =  (app) => {
    const listAll = (req, res) =>{
        return app.services.user.listAll()
        .then(result => res.status(200).json(result))
    }
    const create = async (req, res) => {
        const result = await app.services.user.create(req.body);
        if (result.error) return res.status(400).json(result)
        return res.status(201).json(result[0]);
    }
    return {
        listAll,
        create
    }
}