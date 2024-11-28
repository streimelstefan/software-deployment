module.exports = async function (context, req) {
  context.log('Count function processed a request.');
  
  if (!context.bindings.counter) {
    context.bindings.counter = { count: 0 };
  }
  
  context.res = {
    status: 200,
    body: { count: context.bindings.counter.count }
  };
};