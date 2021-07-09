const argv = require('yargs')
                        .option('b',{
                            alias: 'base',
                            type:'number',
                            demandOption: true,
                            description: 'Base para la multiplicacion'
                        })
                        .check((argv,options)=>{
                            if(isNaN(argv.b)){
                                throw 'La base debe ser un numero'
                            }
                            return true;

                        })
                        .option('l', {
                            alias: 'listar',
                            type: 'boolean',
                            default: false,
                            description: 'muestra la tabla en consola'

                        }).option('h',{
                            alias:'hasta',
                            type:'number',
                            default: 10,
                            description:'Ennumera la tabla hasta el numero que indica'

                        })
                        .argv;

module.exports = argv;