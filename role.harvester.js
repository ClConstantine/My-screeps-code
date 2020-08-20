var roleHarvester = {

    run: function(creep) {

        if(creep.memory.charging && creep.carry.energy < 0.1*creep.carryCapacity) {
            creep.memory.charging = false;
            creep.say('harvest');
        }
        if(!creep.memory.charging && creep.carry.energy == creep.carryCapacity) {
            creep.memory.charging = true;
            creep.say('charging');
        }

        if(creep.memory.charging) {
            var target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => structure.energy < structure.energyCapacity && 
                                        (structure.structureType == STRUCTURE_SPAWN ||
                                        structure.structureType == STRUCTURE_EXTENSION ||
                                        structure.structureType == STRUCTURE_TOWER)
            });

            if(target){
                if(creep.transfer(target,RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            }
            else {
                var Storage = creep.room.storage;
                if(creep.transfer(Storage,RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(Storage);
                }
            }
            
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
};

module.exports = roleHarvester;