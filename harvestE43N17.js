
var harvestE43N17 = {

    run: function(creep) {
        var harvest = require('role.sharvester');


        var target = Game.getObjectById('5da2113d53642e000149d3d2');
        var source = Game.getObjectById('5bbcaf839099fc012e63ab2a');

        harvest(creep,target,source);
};

module.exports = harvestE43N17;