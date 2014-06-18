Game = {
    start: function() {
        Crafty.init(Global.config.width * Global.config.char.width * Global.config.scale,
                    Global.config.height * (Global.config.char.height + 1) * Global.config.scale + Global.config.scale);
        Crafty.background('black');
        
        Crafty.pixelart(true);
    },
    
    write: function(str, clr, y) {
        
        if (typeof clr !== "string" && typeof y === "undefined") {
            y = clr;
            clr = Global.colors.WHITE;
        }
        
        for (var x = 0; x < str.length; x++) {
            Crafty.e('ch_' + clr + '_' + Global.config.char.getCharCoords(str[x])[0] + '_' + Global.config.char.getCharCoords(str[x])[1]).at(x, y)
        }
    }
}
