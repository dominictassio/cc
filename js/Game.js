Game = {
    start: function() {
        Crafty.init(Global.config.width * Global.config.char.width * Global.config.scale + Global.config.scale,
                    Global.config.height * (Global.config.char.height + 1) * Global.config.scale + Global.config.scale);
        Crafty.background('black');

        Crafty.scene('Game');

        Crafty.pixelart(true);
    },
}
