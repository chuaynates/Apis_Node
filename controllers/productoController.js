let db = require('../models/dbconexion');

let medicamento = {
  listar( req, res ){
    let sql = "SELECT * FROM usuario";
    db.query(sql,function(err, result){
      if( err ){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(result);
      }
    });
  },
  store( req, res ){
    val_nombre = req.body.nombre;
    val_apellido = req.body.apellido;
    val_sexo = req.body.sexo;
    val_fecha = req.body.fecha;

    let sql = "INSERT INTO usuario(id,nombre,apellido,sexo,fecha) VALUES(null,?,?,?,?)";
    db.query(sql,[val_nombre,val_apellido,val_sexo,val_fecha],function(err, newData){
      if(err){
        console.log(err);
        res.sendStatus(500); 
      }else{
        res.json(newData);
      }
    });
  },
  show( req, res ){
    val_id = req.params.id;
    let sql = "SELECT * FROM usuario WHERE id=?";
    db.query(sql,[val_id],function(err, rowData){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(rowData);
      }
    });
  },
  edit( req, res ){
    val_id = req.params.id;
    console.log(val_id);
    val_nombre = req.body.nombre;
    val_apellido = req.body.apellido;
    val_sexo = req.body.sexo;
    val_fecha = req.body.fecha;
  
    let sql = "UPDATE usuario SET nombre=?, apellido=?, sexo=?, fecha=? WHERE id=?";
    db.query(sql,[val_nombre,val_apellido,val_sexo,val_fecha,val_id],function(err, newData){
      if(err){
        res.sendStatus(500);
      }else{
        res.json(newData);
      }
    });
  },
  delete( req, res ){
    val_id = req.params.id;
    let sql = "DELETE FROM usuario WHERE id=?";
    db.query(sql,[val_id],function(err, newData){
      if(err){
        res.sendStatus(500);
      }else{
        res.sendStatus(200);
      }
    });
  }
}

module.exports = medicamento;
