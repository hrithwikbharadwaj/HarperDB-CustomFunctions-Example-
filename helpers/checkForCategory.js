'use strict'

module.exports =  async (request,logger) => {
 // your functionality here
 const categories=["Product","Marketing","Design","Startups","Money","Learn","Podcasts","Crypto"];
 const category= request.params.category;
 if(!categories.includes(category)) throw new Error("Invalid Type");
 return request;
}
