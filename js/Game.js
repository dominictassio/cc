Game = {
    start: function() {
        Crafty.init(Global.config.width * Global.config.char.width * Global.config.scale,
                    Global.config.height * Global.config.char.height * Global.config.scale);
        Crafty.background('black');
        
        char = Crafty.e('Char').at(0, 5);
        char = Crafty.e('Char').at(1, 5);
        char = Crafty.e('Char').at(0, 4);
        
        Crafty.pixelart(true);
    }
}
