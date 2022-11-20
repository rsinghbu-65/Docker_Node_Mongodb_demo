console.log('Creating database my-db');
db = new Mongo().getDB("my-db");


console.log('Creating collection users');
db.createCollection('users', { capped: false });