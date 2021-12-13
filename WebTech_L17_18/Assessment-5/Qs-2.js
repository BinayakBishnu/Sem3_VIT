var events = require('events');
var scoreKeeper = new events.EventEmitter();
VIT_V = [false, 0];
VIT_C = [false, 0];
var shoot_a_basket = function () {
    if (VIT_V[0] == true) {
        console.log('VIT-V has scored');
        VIT_V[0] = false
        VIT_V[1] += 1
    }
    if (VIT_C[0] == true) {
        console.log('VIT-C has scored');
        VIT_C[0] = false
        VIT_C[1] += 1
    }
    console.log('VIT-V :' + VIT_V[1]);
    console.log('VIT-C :' + VIT_C[1]);
}
scoreKeeper.on('basket', shoot_a_basket);
scoreKeeper.emit('basket', VIT_V[0] = true);
scoreKeeper.emit('basket', VIT_C[0] = true);
scoreKeeper.emit('basket', VIT_V[0] = false);
scoreKeeper.emit('basket', VIT_V[0] = true);
scoreKeeper.emit('basket', VIT_C[0] = true);
scoreKeeper.emit('basket', VIT_V[0] = true);