var MongoClient = require('mongodb').MongoClient;
require('dotenv').config()
const mainConnection = process.env.DB_HOST;
const mainDB = process.env.DB_NAME
/**
 * Public sheet
 */
const sOrder = "orders";
const sActionHistory = "actions_history";

/**
 * Public functions
 */
async function connect()
{
    const pool =  await MongoClient.connect(mainConnection);
    const db =  pool.db(mainDB);
    return{
        pool,
        db,
        close:async ()=>{
            await pool.close()
        }
    }
}
async function getOrderByDeadline(deadline , page = 1 , pageSize = 1) {
    const db = await connect()
    var ret = await db.db.collection(sOrder).find({
        deadline: { $gt: deadline }
    })
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .project({_id:0}).toArray();
    await db.close();
    return ret;
}
async function getOrdersByRules(rules,page = 1 , pageSize = 1) {
    const db = await connect()
    var ret = await db.db.collection(sOrder).find(rules)
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .project({_id:0}).toArray();
    await db.close();
    return ret;
}
async function getActionHistoryByRules(rules, page = 1 , pageSize = 1) {
    const db = await connect()
    var ret = await db.db.collection(sActionHistory).find(rules)
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .project({_id:0}).toArray();
    await db.close();
    return ret;
}

module.exports = {
    getOrderByDeadline,
    getActionHistoryByRules,
    getOrdersByRules
}