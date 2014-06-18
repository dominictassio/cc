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
        "chars":   [' !"#$%&\'()*+,-./',
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
        "getCharCoords": function(ch) {
            for (var key in this.chars) {
                var line = this.chars[key];
                for (var i = 0; i < line.length; i++) {
                    if (line[i] == ch) {
                        return [key, i];
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

Global.colors = {
    "BLACK": '0',
    "RED": '1',
    "GREEN": '2',
    "BROWN": '3',
    "BLUE": '4',
    "PURPLE": '5',
    "CYAN": '6',
    "LIGHT_GRAY": '7',
    "GRAY": '8',
    "PINK": '9',
    "LIME": 'a',
    "YELLOW": 'b',
    "LIGHT_BLUE": 'c',
    "MAGENTA": 'd',
    "ORANGE": 'e',
    "WHITE": 'f',
};

Global.keys = {
    TAB: 15,
    ENTER: 28,
    PAUSE: 197,
    CAPS: 58,
    ESC: 1,
    SPACE: 57,
    PAGE_UP: 201,
    PAGE_DOWN: 209,
    END: 207,
    HOME: 199,
    LEFT_ARROW: 203,
    UP_ARROW: 200,
    RIGHT_ARROW: 205,
    DOWN_ARROW: 208,
    INSERT: 210,
    DELETE: 211,
    0: 11,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    5: 6,
    6: 7,
    7: 8,
    8: 9,
    9: 10,
    A: 30,
    B: 48,
    C: 46,
    D: 32,
    E: 18,
    F: 33,
    G: 34,
    H: 35,
    I: 23,
    J: 36,
    K: 37,
    L: 38,
    M: 50,
    N: 49,
    O: 24,
    P: 25,
    Q: 16,
    R: 19,
    S: 31,
    T: 20,
    U: 22,
    V: 47,
    W: 17,
    X: 45,
    Y: 21,
    Z: 44,
    NUMPAD_0: 82,
    NUMPAD_1: 79,
    NUMPAD_2: 80,
    NUMPAD_3: 81,
    NUMPAD_4: 75,
    NUMPAD_5: 76,
    NUMPAD_6: 77,
    NUMPAD_7: 71,
    NUMPAD_8: 72,
    NUMPAD_9: 73,
    MULTIPLY: 55,
    ADD: 78,
    SUBSTRACT: 74,
    DECIMAL: 83,
    DIVIDE: 181,
    F1: 59,
    F2: 60,
    F3: 61,
    F4: 62,
    F5: 63,
    F6: 64,
    F7: 65,
    F8: 66,
    F9: 67,
    F10: 68,
    F11: 87,
    F12: 88,
    SHIFT: 42,
    CTRL: 29,
    ALT: 56,
    PLUS: 13,
    COMMA: 51,
    MINUS: 12,
    PERIOD: 52
};
