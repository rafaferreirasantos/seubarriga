module.exports = (app) =>{
    const create = async  (account)=>{
        return await app.db('accounts')
            .insert(account, '*')
    }
    return {
        create
    }
}