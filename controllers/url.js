const shortid=require("shortid");

const URL=require('../models/url');


async function handleGenerateNewShortURL(req, res) {
    console.log("Incoming Body from Postman:", req.body); // <-- ADD THIS LINE
    
    const body = req.body;
    if(!body.redirectURL) return res.status(400).json({error:'redirectURL is required'})
    // ... rest of your code
    const shortID=shortid();
    await URL.create({
        shortId:shortID,
        redirectURL:body.redirectURL,
        visitHistory:[],

    });

    return res.json({id:shortID});
}
async function handleGetAnalytics(req,res){
    const shortId=req.params.shortId;
    const result=await URL.findOne({shortId});
    return res.json({totalClicks:result.visitHistory.length,
        analytics:result.visitHistory,})
}

module.exports={
    handleGenerateNewShortURL,
    handleGetAnalytics,
};