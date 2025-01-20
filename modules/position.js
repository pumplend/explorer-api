const db = require("../utils/db")

const positionSearch = async (req) =>
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
    
        if(query?.deadline)
        {
            rules['deadline'] = { $gt: Number(deadline) }
        }
        return await db.getOrdersByRules(
            rules,
            page,
            pageSize
            
        )
    }catch(e)
    {
        return false;
    }

}

const liquidationSearch = async (req) =>
    {
        try{
            const query = req.query
            let page = Number(query?.page)>0? Number(query.page) :1;
            let pageSize =  Number(query?.pageSize)>0? Number(query.pageSize) :1;
            let deadline = query?.deadline ? Number(query.deadline) : Math.floor(Date.now()/1000);
            let rules = {
                deadline: { $gt: deadline }
            }
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
        
            return await db.getOrdersByRules(
                rules,
                page,
                pageSize
            )
        }catch(e)
        {
            return false
        }
    }

module.exports = {
    positionSearch,
    liquidationSearch
}