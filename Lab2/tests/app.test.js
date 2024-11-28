const request = require('supertest');
const app = require('../bootstrap.js');

describe('API Endpunkte', () => {

  test('/count (GET) should get the current count', async () => {
    const response = await request(app).get('/count');
    expect(response.body.count).toBe(0);
    expect(response.statusCode).toBe(200);
  });

  test('/increment (POST) should increment the counter', async () => {
    const count = await request(app).get('/count');
    const response = await request(app).post('/increment');
    console.log(response.body);
    expect(response.body.count).toBe(count.body.count + 1);
    expect(response.statusCode).toBe(200);
  });
});
