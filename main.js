var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');
var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer');
var roleTransporter = require('role.transporter');
var autoSpawn = require('autoSpawn');

module.exports.loop = function () {
    

    //删除内存

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    
    autoSpawn.run();

    //防御塔
    var tower1 = Game.getObjectById('5f22986377047eccac817085');
    var tower2 = Game.getObjectById('5da9af457e8c292a991e894c');
    if(tower1) {
        var closestHostile = tower1.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower1.attack(closestHostile);
        }

    }
    /*
    if(tower2) {
        var closestDamagedStructure = tower2.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax-900 && structure.hits < 100000
        });
        
        if(closestDamagedStructure) {
            tower2.repair(closestDamagedStructure);
        }
    }*/

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder'){
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        if(creep.memory.role == 'transporter') {
            roleTransporter.run(creep);
        }
    }
}
