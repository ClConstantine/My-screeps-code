var harvestE44N17 = {

    run: function() {
        var sourcse = Game.getObjectById('5bbcaf949099fc012e63acf5');
        var E44N17harvesternum = _.filter(Game.creeps, (creep) => creep.memory.role == 'E44N17harvester');

        if(E44N17harvesternum.length < 2) {
            var newName = 'harvester' + Game.time;  
            console.log('Spawning new harvester: ' + newName);
            Game.spawns['Cons1'].spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
                {memory: {role: 'E44N17harvester'}});        
        }
        
        
    }   
};

module.exports = harvestE44N17;