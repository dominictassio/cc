Crafty.scene('Game', function() {
    Global.terminal.write('CraftOS 1.6', [Global.colors.YELLOW, Global.colors.BLUE], 0);
    Global.terminal.write('> ', Global.colors.YELLOW, 1);
    Crafty.e('Cursor').at(2, 1);
});
