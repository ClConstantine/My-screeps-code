var Link = {

    run: function(creep) {
        var Link1 = Game.getObjectById('5da20122b541ee0001bf2c6c');
        var Link2 = Game.getObjectById('5da2113d53642e000149d3d2');
        var Link3 = Game.getObjectById('5da5feaa7a7d064bd0461526');
        if(Link1.store[RESOURCE_ENERGY] == 0){
            //if(Link3.store[RESOURCE_ENERGY]<=800){
                Link2.transferEnergy(Link1);
            //}

        }
    }
};

module.exports = Link;