const db = require("../utils/db")

const mainPage = async (req) =>
{
    try{
        const query = req.query
        let page = 1
        let pageSize = 8
    
        let rules = {}
        const actives =  await db.getActionHistoryByRules(
            rules,
            page,
            pageSize
            
        )
        const positions =  await db.getOrdersByRules(
            rules,
            page,
            pageSize
        )

        const main = await db.countMainPage();

        return {
            main,
            positions,
            actives,
            
        }

    }catch(e)
    {
        console.log(e)
        return false;
    }

}

module.exports = {
    mainPage
}