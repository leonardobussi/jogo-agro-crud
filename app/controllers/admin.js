module.exports.usuario = function (application, req, res){

    const usuario = req.body;


    const connection = application.config.dbConnection();
    const usuarioModel = new application.app.models.UsuarioDAO(connection);

   usuarioModel.salvarUsuario(usuario, function(error, result){
       console.log('usuario salvo')
    res.send('salvado')
    });
}