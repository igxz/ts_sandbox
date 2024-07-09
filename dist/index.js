"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BossTank = exports.EnemyTank = exports.PlayerTank = exports.Tank = void 0;
class Tank {
    constructor() {
        this.name = "坦克";
    }
    sayHello() {
        console.log(`我是一个${this.name}`);
    }
}
exports.Tank = Tank;
class PlayerTank extends Tank {
    constructor() {
        super(...arguments);
        this.name = "玩家坦克";
        this.life = 5;
    }
    sayHello() {
        console.log("啦啦啦啦");
    }
    test() {
        super.sayHello();
        this.sayHello();
    }
}
exports.PlayerTank = PlayerTank;
class EnemyTank extends Tank {
    constructor() {
        super(...arguments);
        this.name = "敌方坦克";
        this.health = 1;
    }
}
exports.EnemyTank = EnemyTank;
class BossTank extends EnemyTank {
}
exports.BossTank = BossTank;
const t2 = new PlayerTank();
t2.sayHello();
const t = new BossTank();
