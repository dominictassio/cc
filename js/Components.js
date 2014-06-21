
Crafty.load(["img/font.png", "img/cursor.png"], function() {
    Crafty.sprite(8, 9, "img/font.png", function() {
        var sprites = {};
        for (var i = 0; i < 16; i++) {
            for (var y = 0; y < 6; y++) {
                for (var x = 0; x < 16; x++) {
                    sprites["spr_" + i.toString(16) + "_" + y + "_" + x] = [x, y + (6 * i)];
                }
            }
        }

        return sprites;
    }());

    Crafty.sprite(8, "img/cursor.png", {
        cursor: [0, 0]
    });
});

Crafty.c('Grid', {
    init: function() {
        this.attr({
            w: Global.config.char.width * Global.config.scale,
            h: Global.config.char.height * Global.config.scale + (Global.config.scale)
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

for (var i = 0; i < 16; i++) {
    for (var x = 0; x < 16; x++) {
        for (var y = 0; y < 6; y++) {
            if (x == 15 && y == 5) {
                break;
            }
            Crafty.c('ch_' + i.toString(16) + '_' + y + '_' + x, {
                i: i,
                x: x,
                y: y,
                init: function() {
                    var c = Global.config.char.chars[this.y][this.x];
                    var w = Global.config.char.getWidth(c);
                    var x = this.x;
                    var y = this.y;
                    this.requires('2D, Canvas, Grid, Color, spr_' + this.i.toString(16) + '_' + y + '_' + x);
                    this.crop(/*-parseInt((Global.config.char.width - 1 - w) / 2)*/0, 0, 6, 9);
                    this.w = Global.config.char.width * Global.config.scale;
                    this.h = Global.config.char.height * Global.config.scale/* + (Global.config.scale)*/;
                },
                color: function(color) {
                    this.color(Global.config.colors[color]);
                    return this;
                }
            });
        }
    }
}

Crafty.c('Cursor', {
    init: function() {
        this.requires('2D, Canvas, Grid, SpriteAnimation, cursor');
        this.crop(0, 0, 6, 8);
        this.w = Global.config.char.width * Global.config.scale;
        this.h = Global.config.char.height * Global.config.scale;
        this.reel('CursorBlink', 1000, [[0, 0], [0, 1]]);
        this.animate('CursorBlink', -1);
    }
});
