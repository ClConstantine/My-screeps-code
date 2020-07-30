var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');
var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer');
var roleTransporter = require('role.transporter');
var E43N17 = require('harvestE43N17');


module.exports.loop = function () {
    
    //显示房间能量

    for(var name in Game.rooms) {
        console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');  
    }

    //删除内存

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

     //自动生产harvester

    var harvesternum = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('harvesternum: ' + harvesternum.length);

    if(harvesternum.length < 2) {
        var newName = 'harvester' + Game.time;  
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Cons1'].spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'harvester'}});        
    }
    
    if(harvesternum.length < 1) {
        var newName = 'harvester' + Game.time;  
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Cons1'].spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE], newName, 
            {memory: {role: 'harvester'}});        
    }

    // 自动生产transporter

    var transporternum = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter');
    console.log('transporternum: ' + transporternum.length);

    if(transporternum.length < 3) {
        var newName = 'transporter' + Game.time;  
        console.log('Spawning new transporter: ' + newName);
        Game.spawns['Cons1'].spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE], newName, 
            {memory: {role: 'transporter'}});        
    }

    //自动生产upgrader


    var upgradernum = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('upgradernum: ' + upgradernum.length);

    if(upgradernum.length < 5) {
        var newName = 'upgrader' + Game.time;  
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Cons1'].spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'upgrader'}});        
    }


    //自动生产builder

    var buildernum = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    console.log('buildernum: ' + buildernum.length);

    if(buildernum.length < 0) {
        var newName = 'builder' + Game.time;  
        console.log('Spawning new builder: ' + newName);
        Game.spawns['Cons1'].spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'builder'}});        
    }

    //自动生产repairer

    var repairernum = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    console.log('repairernum: ' + repairernum.length);

    if(repairernum.length < 0) {
        var newName = 'repairer' + Game.time;  
        console.log('Spawning new repairer: ' + newName);
        Game.spawns['Cons1'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName, 
            {memory: {role: 'repairer'}});        
    }
    

    //防御塔
    var tower1 = Game.getObjectById('5d9866499c30e60001317cee');
    var tower2 = Game.getObjectById('5d9c3688248aa30001a7ae8a');
    if(tower1) {
        var closestHostile = tower1.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower1.attack(closestHostile);
        }

    }
    if(tower2) {
        var closestDamagedStructure = tower2.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax-900 && structure.hits < 1000000
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
        if(creep.memory.role == 'E43N17harvester') {
            E43N17.run(creep);
        }
    }
}