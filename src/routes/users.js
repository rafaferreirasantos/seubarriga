module.exports = () => {
    const listAll = (req, res) => {
        const users = [
            {
                name: 'John',
                email: 'john@email.com'
            }
        ]
        res.status(200).json(users)
    };

    const create = (req, res) => {
        res.status(201).json(req.body)
    }
    return {
        listAll,
        create
    }
}