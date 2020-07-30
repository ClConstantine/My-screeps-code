var roleTransporter = {

    run: function(creep) {

        if(creep.memory.transporting && creep.carry.energy < 0.1*creep.carryCapacity) {
            creep.memory.transporting = false;
            creep.say('getting');
        }
        if(!creep.memory.transporting && creep.carry.energy == creep.carryCapacity) {
            creep.memory.transporting = true;
            creep.say('charging');
        }

        if(!creep.memory.transporting) {
            var stor = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {   //过滤
                        return (structure.structureType == STRUCTURE_STORAGE) 
                    }   
            });

            if(creep.withdraw(RESOURCE_ENERGY,stor[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(stor[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }

        }
        
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {   //过滤
                        return (structure.structureType == STRUCTURE_EXTENSION || 
                            structure.structureType == STRUCTURE_TOWER || 
                            structure.structureType == STRUCTURE_SPAWN ) &&
                            structure.energy < structure.energyCapacity;
                    }   //能量结构&&巢穴并检查其能量负荷
            });
            
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
    }
};

module.exports = roleTransporter;