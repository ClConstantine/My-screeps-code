var roleHarvester = {

    run: function(creep,target,source) {

        if(creep.memory.charging && creep.carry.energy < 0.1*creep.carryCapacity) {
            creep.memory.charging = false;
            creep.say('harvest');
        }
        if(!creep.memory.charging && creep.carry.energy == creep.carryCapacity) {
            creep.memory.charging = true;
            creep.say('charging');
        }

        if(creep.memory.charging) {

            if(creep.transfer(target,RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
};

module.exports = roleHarvester;