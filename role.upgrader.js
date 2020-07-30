var roleUpgrader = {

    run: function(creep) {

        if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
            creep.say('harvest');
	    }
	    if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.upgrading = true;
	        creep.say('upgrade');
	    }

	    if(creep.memory.upgrading) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
        else {
            var link = Game.getObjectById('5da20122b541ee0001bf2c6c');
            if(creep.harvest(link) == ERR_NOT_IN_RANGE) {
                creep.moveTo(link);
            }
        }
	}
};

module.exports = roleUpgrader;