const path = require("path");

// Require the fastify framework and instantiate it
const fastify = require("fastify")({
  // set this to true for detailed logging:
  logger: false,
});

// Setup our static files
fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "public"),
  prefix: "/", // optional: default '/'
});

// fastify-formbody lets us parse incoming forms
fastify.register(require("@fastify/formbody"));

// point-of-view is a templating manager for fastify
fastify.register(require("@fastify/view"), {
  engine: {
    handlebars: require("handlebars"),
  },
});

// Our main GET home page route, pulls from src/pages/index.hbs
fastify.get("/", function (request, reply) {
  // params is an object we'll pass to our handlebars template
  let params = {
    greeting: "Hello Node!",
  };  
  // request.query.paramName <-- a querystring example
  return reply.view("/src/pages/1home.hbs", params);
});

fastify.get('/2acad_cal', async (request, reply) => {
  return reply.view("/src/pages/2acad_cal.hbs");
})

fastify.get('/3map', async (request, reply) => {
  return reply.view("/src/pages/3map.hbs");
})

fastify.get('/4a_clubs', async (request, reply) => {
  return reply.view("/src/pages/4a_clubs.hbs");
})

fastify.get('/4b_rec', async (request, reply) => {
  return reply.view("/src/pages/4b_rec.hbs");
})

fastify.get('/4c_perf', async (request, reply) => {
  return reply.view("/src/pages/4c_perf.hbs");
})

fastify.get('/4d_sports', async (request, reply) => {
  return reply.view("/src/pages/4d_sports.hbs");
})

fastify.get('/5mini_games', async (request, reply) => {
  return reply.view("/src/pages/5mini_games.hbs");
})

fastify.get('/6about_us', async (request, reply) => {
  return reply.view("/src/pages/6about_us.hbs");
})

fastify.get('/7triviagham', async (request, reply) => {
  return reply.view("/src/pages/7triviagham.hbs");
})

// A POST route to handle form submissions
fastify.post("/", function (request, reply) {
  let params = {
    greeting: "Hello Form!",
  };
  // request.body.paramName <-- a form post example
  return reply.view("/src/pages/1home.hbs", params);
});

// Run the server and report out to the logs
fastify.listen(
  { port: process.env.PORT, host: "0.0.0.0" },
  function (err, address) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Your app is listening on ${address}`);
  }
);
