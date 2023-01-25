module.exports = (app) => {
    const listAll = (filter = {}) => {
        return app.db('users').where(filter).select()
    };
    const create = async (user) => {
        if (!user.name) return {error: 'Nome é um parâmetro obrigatório'}
        if (!user.email) return {error: 'Email é um parâmetro obrigatório'}
        if (!user.password) return {error: 'Password é um parâmetro obrigatório'}

        const userDB = await listAll({email: user.email})
        if(userDB && userDB.length > 0) return {error: 'Já existe um usuário com este email'}
        return await app.db('users')
            .insert(user, '*')
    }
    return {
        listAll,
        create
    }
}