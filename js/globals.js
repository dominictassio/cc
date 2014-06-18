
/*
'event', {'key', key}
'event', {'char', ''}
 */

Global = {};

Global.config = {
    "scale": 3,
    "width": 51,
    "height": 19,
    "char": {
        "width": 6,
        "height": 8,
        "widths": [
          //    !  "  #  $  %  &  '  (  )  *  +  ,  -  .  /
            [0, 1, 4, 5, 5, 5, 5, 2, 4, 4, 4, 5, 1, 5, 1, 5],
          // 0  1  2  3  4  5  6  7  8  9  :  ;  <  =  >  ?
            [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 4, 5, 4, 5],
          // @  A  B  C  D  E  F  G  H  I  J  K  L  M  N  O
            [5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 4, 5, 5, 5, 5, 5],
          // P  Q  R  S  T  U  V  W  X  Y  Z  [  \  ]  ^  _
            [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 3, 5, 5],
          // `  a  b  c  d  e  f  g  h  i  j  k  l  m  n  o
            [2, 5, 5, 5, 5, 5, 4, 5, 5, 1, 4, 4, 2, 5, 5, 5],
          // p  q  r  s  t  u  v  w  x  y  z  {  |  }  ~  `
            [5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 4, 1, 4, 6, 0]
        ],
        "chars":   [' !"#$%&\'()*+,_./',
                    '0123456789:;<=>?',
                    '@ABCDEFGHIJKLMNO',
                    'PQRSTUVWXYZ[\\]^_',
                    '`abcdefghijklmno',
                    'pqrstuvwxyz{|}~'],
        "getWidth": function(ch) {
            for (var key in this.chars) {
                var line = this.chars[key];
                for (var i = 0; i < line.length; i++) {
                    if (line[i] == ch) {
                        return this.widths[key][i];
                    }
                }
            }
        },
    },
    "colors": {
        "0": "rgb(0, 0, 0)",       // Black
        "1": "rgb(204, 76, 76)",   // Red
        "2": "rgb(87, 166, 78)",   // Green
        "3": "rgb(127, 102, 76)",  // Brown
        "4": "rgb(37, 49, 146)",   // Blue
        "5": "rgb(178, 102, 229)", // Purple
        "6": "rgb(76, 153, 178)",  // Cyan
        "7": "rgb(153, 153, 153)", // Light gray
        "8": "rgb(76, 76, 76)",    // Gray
        "9": "rgb(242, 178, 204)", // Pink
        "a": "rgb(127, 204, 25)",  // Lime
        "b": "rgb(222, 222, 108)", // Yellow
        "c": "rgb(153, 178, 242)", // Light blue
        "d": "rgb(229, 127, 216)", // Magenta
        "e": "rgb(242, 178, 51)",  // Orange
        "f": "rgb(240, 240, 240)"  // White
    }
};
