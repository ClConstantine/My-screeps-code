var roleMiner = {

    run: function(creep){  
        
        if(!creep.memory.StorageID){
            creep.memory.StorageID = creep.room.storage.id; 
        }

        var Mineral = Game.getObjectById(Memory.E38N6Mineral[0]);
        var Storage = Game.getObjectById(creep.memory.StorageID);

        if(creep.memory.mine && !creep.store.getFreeCapacity()){
            creep.memory.mine = false;
        }
        else if(!creep.memory.mine && creep.store.getFreeCapacity()){
            creep.memory.mine = true;
        }

        if(creep.memory.mine){
            if(creep.harvest(Mineral) == ERR_NOT_IN_RANGE){
                creep.moveTo(Mineral);
            }
        }
        else{
            if(creep.tansfer(Storage,Mineral.mineralType) == ERR_NOT_IN_RANGE){
                creep.moveTo(Storage);
            }
        }

    }
}

module.exports = roleMiner;