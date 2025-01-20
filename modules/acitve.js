const db = require("../utils/db")

const activeSearch = async (req) =>
{

    try{
        const query = req.query
        let page = Number(query?.page)>0? Number(query.page) :1;
        let pageSize =  Number(query?.pageSize)>0? Number(query.pageSize) :1;
        let rules = {}
        if(query?.user)
        {
            rules['user'] = String(query?.user)
        }
    
        if(query?.token)
        {
            rules['token'] = String(query?.token)
        }
    
        if(query?.userBorrowData)
        {
            rules['userBorrowData'] = String(query.userBorrowData)
        }
    
        if(query?.hash)
        {
            rules['hash'] = String(query.hash)
        }
    
        if(query?.type)
        {
            rules['type'] = String(query.type)
        }
        return await db.getActionHistoryByRules(
            rules,
            page,
            pageSize
            
        )
    }catch(e)
    {
        return false;
    }
}


module.exports = {
    activeSearch
}