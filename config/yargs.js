const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripción de la tarea a hacer"
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}