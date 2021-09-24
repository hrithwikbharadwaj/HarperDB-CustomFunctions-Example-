'use strict';

const checkForCategory = require('../helpers/checkForCategory');
const checkUser = require('../helpers/checkUser');

module.exports = async (server, { hdbCore, logger }) => {
  server.route({
    url: '/',
    method: 'GET',
    handler: async () => {
      return "Hello World";
    }});
        
    

  server.route({
    url: '/resources',
    method: 'GET',
    handler: (request) => {
      const size = request.query.size|| 10;
      const page = request.query.page || 0;
      const skip = parseInt(page)*parseInt(size);
      request.body= {
        operation: 'sql',
        sql: `SELECT * FROM example.resources ORDER BY category LIMIT ${size} OFFSET ${skip}`
      };
      return hdbCore.requestWithoutAuthentication(request);
    }
  });

  server.route({
    url: '/resources/:category',
    method: 'GET',
    preValidation: (request) => checkForCategory(request, logger),
    

    handler: (request) => {
      request.body= {
        operation: 'sql',
        sql: `select * from example.resources where category="${request.params.category}"`
      };
      return hdbCore.requestWithoutAuthentication(request);
  }
});
  
  
 

  
};


    
      
         
     
