function UsuarioDAO(connection){
    this._connection = connection;
}

UsuarioDAO.prototype.getUsuario = function(callback)  {
    this._connection.query('select * from usuario', callback);
}


UsuarioDAO.prototype.salvarUsuario = function(usuario, callback)  {
    console.log(usuario)
    this._connection.query('insert into usuario set ? ', usuario, callback);
}

module.exports = function () {

    return UsuarioDAO; 
}