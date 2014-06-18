
Crafty.load("img/font.png", function() {
    Crafty.sprite(8, "img/font.png", function() {
        var sprites = {};
        for (var i = 0; i < 16; i++) {
            for (var y = 0; y < 6; y++) {
                for (var x = 0; x < 16; x++) {
                    sprites["spr_" + i.toString(16) + "_"+Global.config.char.chars[y][x]] = [x, y + 2 + (16 * i)];
                }
            }
        }
        
        return sprites;
    }());
});

Crafty.c('Grid', {
    init: function() {
        this.attr({
            w: Global.config.char.width * Global.config.scale,
            h: Global.config.char.height * Global.config.scale
        });
    },
    
    at: function(x, y) {
        if (x === undefined && y === undefined) {
            return {
                x: this.x / Global.config.char.width * Global.config.scale,
                y: this.y / Global.config.char.height * Global.config.scale
            };
        } else {
            this.attr({
                x: x * Global.config.char.width * Global.config.scale,
                y: y * Global.config.char.height * Global.config.scale
            });
            return this;
        }
    }
});

Crafty.c('Char', {
    init: function() {
        this.requires('2D, Canvas, Grid, Color, spr_f_~');
        this.crop(-((Global.config.char.width - 1 - Global.config.char.getWidth('~')) / 2), 0, 6, 8);
        //this.color('rgb(178, 102, 229)');
        this.w = Global.config.char.width * Global.config.scale;
        //this.shift((Global.config.char.width - 1 ) * Global.config.scale / 2, 0, 0, 0);
        this.h = Global.config.char.height * Global.config.scale;
    }
});