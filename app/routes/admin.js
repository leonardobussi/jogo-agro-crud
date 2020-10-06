module.exports = function(application) {

application.post('/', function(req, res){
    application.app.controllers.admin.usuario(application, req, res);
});
}