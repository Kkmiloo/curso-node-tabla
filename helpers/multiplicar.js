const fs = require("fs");
var colors = require('colors');

let nombreArchivo = "";

const crearArchivo = async (base = 5, listar = false, hasta) => {
  try {
   

    let salida = "";

    for (i = 1; i <= hasta; i++) {
      let producto = base * i;
      salida += `${base} x ${i}= ${producto}\n`.green;
    }
    if(listar){
      console.log("====================".inverse);
      console.log(` Tabla del: ${base}`);
      console.log("====================".inverse);

      console.log(salida );
    }
    nombreArchivo = `tabla-${base}.txt`;

    fs.writeFileSync(`./out/${nombreArchivo}`, salida);
    return nombreArchivo;
  } catch (error) {
    return error;
  }
};

module.exports = {
  crearArchivo,
};
