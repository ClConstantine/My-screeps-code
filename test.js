var roleHarvester = {

    run: function(creep) {

        const Container = Game.getObjectById('7d6a1e04e1622e16eebcfee1');
        
        if(!(creep.memory.onpos) && creep.pos != Container.pos){
            let pathHarvester = creep.room.findPath(creep.pos,Container.pos);
            creep.moveByPath(pathHarvester);
        }
        else{
            creep.memory.onpos = true;
        }
        
        if(creep.carry.energy == creep.carryCapacity){
            creep.drop(RESOURCE_ENERGY);
        }
        else {
            const sources = Game.getObjectById('90ef2841e139c690d2816130');
            creep.harvest(sources);
        }
    }
};

module.exports = roleHarvester;