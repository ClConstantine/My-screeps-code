var midtransporter = {

    run: function(creep) {
        if(creep.pos.x != 23 || creep.pos.y != 22){
            creep.moveTo(23,22);
        }

        else{
            var Storage = creep.room.storage;
            var Terminal = creep.room.terminal;
            // var Link = Game.getObjectById("")
    
            if(creep.memory.charging && creep.carry.energy < 0.1*creep.carryCapacity) {
                creep.memory.charging = false;
                creep.say('withdraw');
            }
            if(!creep.memory.charging && creep.carry.energy == creep.carryCapacity) {
                creep.memory.charging = true;
                creep.say('transport');
            }
    
            if(creep.memory.charging) {
                if(Terminal.store[RESOURCE_ENERGY] < 200000){
                    creep.transfer(Terminal,RESOURCE_ENERGY);
                }
            }
    
            else {
                if(Storage.store[RESOURCE_ENERGY] > 100000){
                    creep.withdraw(Storage,RESOURCE_ENERGY);
                }
            }
        }

    }
};

module.exports = midtransporter;