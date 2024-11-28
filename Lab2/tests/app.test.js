const count = require('../api/count');
const increment = require('../api/increment');

describe('API Endpunkte', () => {

  test('/count (GET) should get the current count', async () => {
    const context = {bindings: {counter: {count: 0}}, log: console.log};
    const response = count(context, {});
    expect(context.res.body.count).toBe(0);
    expect(context.res.status).toBe(200);
  });

  test('/increment (POST) should increment the counter', async () => {
    const count = 1;
    const context = {bindings: {counter: {count: count}}, log: console.log};
    const response = increment(context, {});
    console.log(context);
    expect(context.res.body.count).toBe(count + 1);
    expect(context.res.status).toBe(200);
  });
});
