var roleRepairer = {

    run: function(creep) { //函数传参

	    if(creep.memory.repairing && creep.carry.energy == 0) {
            creep.memory.repairing = false;
            creep.say('harvest');    //表明目的
	    }

	    if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.repairing = true;  //布尔值未声明
	        creep.say('repair'); 
	    }

	    if(creep.memory.repairing) {
			const targets = creep.room.find(FIND_STRUCTURES, 
			{filter: structure => structure.structureType == STRUCTURE_RAMPART && structure.hits < structure.hitsMax});
	        //需要维修的建筑

	        targets.sort((a,b) => a.hits - b.hits);

	        
			if(targets.length) {
			    if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
			        creep.moveTo(targets[0],{visualizePathStyle: {stroke: '#ffffff'}});
			    }
			}
			else{
			    creep.moveTo(35,44);
			}
	    }
	    else{
			var sources = creep.room.find(FIND_SOURCES);
			if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
				creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
			}
	    }
	}
};

module.exports = roleRepairer;
