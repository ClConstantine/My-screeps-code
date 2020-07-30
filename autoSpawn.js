var autoSpawn = {

    run: function(){
        //自动生产harvester

        var harvesternum = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        console.log('harvesternum: ' + harvesternum.length);

        if(harvesternum.length < 3) {
            var newName = 'harvester' + Game.time;  
            console.log('Spawning new harvester: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName, 
                {memory: {role: 'harvester'}});        
        }
        
        if(harvesternum.length < 2) {
            var newName = 'harvester' + Game.time;  
            console.log('Spawning new harvester: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], newName, 
                {memory: {role: 'harvester'}});        
        }

        // 自动生产transporter

        /*var transporternum = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter');
        console.log('transporternum: ' + transporternum.length);

        if(transporternum.length < 3) {
            var newName = 'transporter' + Game.time;  
            console.log('Spawning new transporter: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE], newName, 
                {memory: {role: 'transporter'}});        
        }*/

        //自动生产upgrader


        var upgradernum = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        console.log('upgradernum: ' + upgradernum.length);

        if(upgradernum.length < 4) {
            var newName = 'upgrader' + Game.time;  
            console.log('Spawning new upgrader: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE], newName, 
                {memory: {role: 'upgrader'}});        
        }
        

        //自动生产builder

        var buildernum = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        console.log('buildernum: ' + buildernum.length);

        if(buildernum.length < 1) {
            var newName = 'builder' + Game.time;  
            console.log('Spawning new builder: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName, 
                {memory: {role: 'builder'}});        
        }

        //自动生产repairer

        var repairernum = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
        console.log('repairernum: ' + repairernum.length);

        if(repairernum.length < 3) {
            var newName = 'repairer' + Game.time;  
            console.log('Spawning new repairer: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName, 
                {memory: {role: 'repairer'}});        
        }
    }
}

module.exports = autoSpawn;