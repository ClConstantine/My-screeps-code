var E38N5harvester = {

    run: function(creep) {

        if(!creep.memory.StorageID){
            creep.memory.StorageID = creep.room.storage.id; 
        }

        if(creep.memory.charging && creep.carry.energy < 0.1*creep.carryCapacity) {
            creep.memory.charging = false;
            creep.say('harvest');
        }
        if(!creep.memory.charging && creep.carry.energy == creep.carryCapacity) {
            creep.memory.charging = true;
            creep.say('transport');
        }

        if(creep.memory.charging) {
                var Storage = Game.getObjectById(creep.memory.StorageID);
                
                if(creep.transfer(Storage,RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(Storage);
                }
                
                var TargetRoad = creep.room.lookForAt(LOOK_STRUCTURES,creep.pos);
                
                if(TargetRoad.length){
                    if(TargetRoad[0].hits < TargetRoad[0].hitsMax - 500){
                        creep.repair(TargetRoad[0]);
                    }
                }
        }

        else {
            var workRoom = Game.rooms['E38N5'];
            if(creep.room.name != workRoom.name){
                creep.moveTo(new RoomPosition(47, 11, 'E38N5'));
            }
            else{
                var sources = creep.room.find(FIND_SOURCES);
                if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0]);
                }
            }

        }
    }
};

module.exports = E38N5harvester;