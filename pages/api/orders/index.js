import dbConnect from '../../../util/mongo'
import Order from '../../../models/Order'

const handler = async (req,res) => {
    const {method} = req;
    await dbConnect()
    if(method === "GET"){}
    if(method === "POST"){}
}
export default handler