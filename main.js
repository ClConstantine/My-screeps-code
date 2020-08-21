var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');
var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer');
var roleTransporter = require('role.transporter');
var autoSpawn = require('autoSpawn');
var roleE38N5harvester = require('E38N5harvester');
var roleE39N5harvester = require('E39N5harvester');
var rolemidTransporter = require('role.midtransporter');
var roleMiner = require('role.miner');

module.exports.loop = function () {

    // if(!Memory.E38N6Sources.length){
    //     var xsources = Game.rooms['E38N6'].find(FIND_SOURCES);
    //     console.log(xsources.length);
    //     for(i = 0;i < xsources.length;++i){
    //         Memory.E38N6Sources.push(xsources[i].id);
    //     }
    // }
    
    if(Game.cpu.bucket > 7000){
        Game.cpu.generatePixel();
    }

    //删除内存

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    
    autoSpawn.run();

    //防御塔
    var tower1 = Game.getObjectById('5f232a023b6cd74e2858dd71');
    var tower2 = Game.getObjectById('5f2903e536816ddbcc005e64');
    if(tower1) {
        var closestHostile = tower1.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower1.attack(closestHostile);
        }

    }
   
    if(tower2) {
        var closestDamagedStructure = tower2.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax-900 && 
                                    structure.hits < 900000 &&
                                    structure.structureType != STRUCTURE_RAMPART
        });
        
        if(closestDamagedStructure) {
            tower2.repair(closestDamagedStructure);
        }
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        else if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        else if(creep.memory.role == 'builder'){
            roleBuilder.run(creep);
        }
        else if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        // else if(creep.memory.role == 'transporter') {
        //     roleTransporter.run(creep);
        // }
        else if(creep.memory.role == 'E38N5harvester') {
            roleE38N5harvester.run(creep);
        }
        else if(creep.memory.role == 'E39N5harvester') {
            roleE39N5harvester.run(creep);
        }
        else if(creep.memory.role == 'midTransporter'){
            rolemidTransporter.run(creep);
        }
        else if(creep.memory.role == 'Miner'){
            roleMiner.run(creep);
        }
    }
}
