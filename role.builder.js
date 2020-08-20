 var roleBuilder = {

    run: function(creep) {
        
     
	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('harvest');    //表明目的
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;  //布尔值未声明
	        creep.say('build'); 
	    }

	    if(creep.memory.building) {
	        var buildTargets = creep.room.find(FIND_CONSTRUCTION_SITES); 
            var repairTargets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => structure.hits < structure.hitsMax - 2000
                                        && structure.structureType != STRUCTURE_WALL
                                        && structure.structureType != STRUCTURE_RAMPART
            });


            if(buildTargets.length) {         //数组长度
                if(creep.build(buildTargets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(buildTargets[0]);       //画一条路线
                }
            }
            else if(repairTargets.length && creep.room.name != 'E38N6'){
                if(creep.repair(repairTargets[0]) == ERR_NOT_IN_RANGE){
                    creep.moveTo(repairTargets[0]);
                }
            }
            else{
                var newRoom = Game.rooms['E39N5'];
                if(creep.room != newRoom){
                    creep.moveTo(new RoomPosition(13, 28, 'E39N5'));
                }
            }
	    }
	    else {
            if(creep.room.name == 'E38N6'){
                var Storage = creep.room.storage;
                if(creep.withdraw(Storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(Storage);
                }
            }
            
            else{
                var sources = creep.room.find(FIND_SOURCES);
                if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
	    }
	}
};

module.exports = roleBuilder;