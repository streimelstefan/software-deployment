const { app } = require('@azure/functions');
const increment = require('./increment');
const count = require('./count');

app.http('api/increment', {
  methods: ['POST'],
  handler: increment
});

app.http('api/count', {
  methods: ['GET'],
  handler: count
})