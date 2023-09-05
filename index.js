// const jsonServer = require("json-server"); // importing json-server library
// const server = jsonServer.create();
// const router = jsonServer.router("data.json");
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 4200; //  chose port from here like 8080

// server.use(middlewares);
// server.use(router);

// server.listen(port);

// const gulp = require('gulp');
// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('data.json');
// const middlewares = jsonServer.defaults();

// gulp.task('json-server', () => {
//   server.use(middlewares);
//   server.use(router);
//   server.listen(4200, () => {
//     console.log('JSON Server is running on port 4200');
//   });
// });

// gulp.task('default', gulp.series('json-server'));