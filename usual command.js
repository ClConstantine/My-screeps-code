// 生产单位

Game.spawns['Cons1'].spawnCreep( [WORK,CARRY,MOVE],
    'harvester1',
    { memory: { role: 'harvester' } } );

Game.spawns['Cons1'].spawnCreep( [WORK,CARRY,CARRY,MOVE],
'upgrader1',
    { memory: { role: 'upgrader' } } );

Game.spawns['Cons1'].spawnCreep( [WORK,CARRY,CARRY,MOVE],
'builder1',
    { memory: { role: 'builder' } } );

//标签

Game.creeps['repairer11185067'].memory.role = 'harvester';

//市场

Game.market.calcTransactionCost(amount, 'roomName1', 'W10N30');
// 5f3b2bf04e3638ec424be35a
Game.market.deal('5f3b2bf04e3638ec424be35a', amount, 'yourRoomName');