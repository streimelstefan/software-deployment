const request = require('supertest');
const app = require('../api/server/bootstrap.js');

describe('API Endpunkte', () => {

  test('/increment (POST) should increment the counter', async () => {
    const count = 1;
    const response = await request(app).post('/increment?value=' + count);
    console.log(response.body);
    expect(response.statusCode).toBe(200);
    expect(response.body.count).toBe(count + 1);
  });
});
