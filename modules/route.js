import express from "express";
export default function(app){
  if(!app)
    var app = express();

  app.set('view engine', 'jade');
  app.use("/public", express.static("./client/public")) //Публичны файлы
  app.use("/",function(request, response, next){
    response.render('main');
  })
  return app;
}
