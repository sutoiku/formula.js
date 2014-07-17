(function(scope) {
    var FORMULA_TESTS = [
      {"function": "ACCRINT", "tests": [
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 0, true)", "result": 183.88888888888889},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 0, true)", "result": 183.88888888888889},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 0, true)", "result": 183.88888888888889},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 1, true)", "result": 183.58413132694938},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 1, true)", "result": 183.58413132694938},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 1, true)", "result": 183.58413132694938},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 2, true)", "result": 186.38888888888889},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 2, true)", "result": 186.38888888888889},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 2, true)", "result": 186.38888888888889},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 3, true)", "result": 183.83561643835617},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 3, true)", "result": 183.83561643835617},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 3, true)", "result": 183.83561643835617},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 4, true)", "result": 183.88888888888889},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 4, true)", "result": 183.88888888888889},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 4, true)", "result": 183.88888888888889},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 0, false)", "result": 183.88888888888889},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 0, false)", "result": 183.88888888888889},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 0, false)", "result": 183.88888888888889},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 1, false)", "result": 183.58413132694938},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 1, false)", "result": 183.58413132694938},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 1, false)", "result": 183.58413132694938},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 2, false)", "result": 186.38888888888889},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 2, false)", "result": 186.38888888888889},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 2, false)", "result": 186.38888888888889},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 3, false)", "result": 183.83561643835617},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 3, false)", "result": 183.83561643835617},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 3, false)", "result": 183.83561643835617},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 4, false)", "result": 183.88888888888889},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 4, false)", "result": 183.88888888888889},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 4, false)", "result": 183.88888888888889},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 0, true)", "result": 16.11111111111111},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 0, true)", "result": 16.11111111111111},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 0, true)", "result": 16.11111111111111},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 1, true)", "result": 15.573770491803279},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 1, true)", "result": 15.573770491803279},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 1, true)", "result": 15.573770491803279},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 2, true)", "result": 15.833333333333332},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 2, true)", "result": 15.833333333333332},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 2, true)", "result": 15.833333333333332},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 3, true)", "result": 15.616438356164384},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 3, true)", "result": 15.616438356164384},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 3, true)", "result": 15.616438356164384},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 4, true)", "result": 16.111111111111111},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 4, true)", "result": 16.111111111111111},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 4, true)", "result": 16.111111111111111},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 0, false)", "result": 16.111111111111111},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 0, false)", "result": 16.11111111111111},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 0, false)", "result": 16.11111111111111},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 1, false)", "result": 15.573770491803279},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 1, false)", "result": 15.573770491803279},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 1, false)", "result": 15.573770491803279},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 2, false)", "result": 15.833333333333332},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 2, false)", "result": 15.833333333333332},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 2, false)", "result": 15.833333333333332},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 3, false)", "result": 15.616438356164384},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 3, false)", "result": 15.616438356164384},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 3, false)", "result": 15.616438356164384},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 4, false)", "result": 16.111111111111111},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 4, false)", "result": 16.11111111111111},
        {"call": "ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 4, false)", "result": 16.11111111111111},
        {"call": "ACCRINT('Hello World!', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 0)", "result": "#VALUE!"},
        {"call": "ACCRINT('2/2/2012', 'Hello World!', '12/4/2013', 0.1, 1000, 2, 0)", "result": "#VALUE!"},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', 'Hello World!', 0.1, 1000, 2, 0)", "result": "#VALUE!"},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0, 1000, 2, 0)", "result": "#NUM!"},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', -0.1, 1000, 2, 0)", "result": "#NUM!"},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 0, 2, 0)", "result": "#NUM!"},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, -1000, 2, 0)", "result": "#NUM!"},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 3, 0)", "result": "#NUM!"},
        {"call": "ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 5)", "result": "#NUM!"},
      ]},
      {"function": "AVEDEV", "tests": [
        {"call": "AVEDEV(2, 4, 8, 16)", "result": 4.5},
        {"call": "AVEDEV([2,4,8,16])", "result": 4.5},
        {"call": "AVEDEV([2,4], [8,16])", "result": 4.5}
      ]},
      {"function": "AVERAGEA", "tests": [
        {"call": "AVERAGEA(2, 4, 8, 16)", "result": 7.5},
        {"call": "AVERAGEA([2,4,8,16])", "result": 7.5},
        {"call": "AVERAGEA([2,4], [8,16])", "result": 7.5}
      ]},
      {"function": "AVERAGEIF", "tests": [
        {"call": "AVERAGEIF([2,4,8,16], '>5')", "result": 12},
        {"call": "AVERAGEIF([2,4,8,16], '>5', [1, 2, 3, 4])", "result": 3.5}
      ]},
      {"function": "BIN2DEC", "tests": [
        {"call": "BIN2DEC(101010)", "result": 42},
        {"call": "BIN2DEC('101010')", "result": 42},
        {"call": "BIN2DEC(111111111)", "result": 511},
        {"call": "BIN2DEC(1000000000)", "result": -512},
        {"call": "BIN2DEC(1111111111)", "result": -1},
        {"call": "BIN2DEC(1234567890)", "result": "#NUM!"},
        {"call": "BIN2DEC('Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "BIN2HEX", "tests": [
        {"call": "BIN2HEX(101010)", "result": "2a"},
        {"call": "BIN2HEX('101010')", "result": "2a"},
        {"call": "BIN2HEX(111111111)", "result": "1ff"},
        {"call": "BIN2HEX(1000000000)", "result": "fffffffe00"},
        {"call": "BIN2HEX(1111111111)", "result": "ffffffffff"},
        {"call": "BIN2HEX(101010, 2)", "result": "2a"},
        {"call": "BIN2HEX(101010, 4)", "result": "002a"},
        {"call": "BIN2HEX(101010, 4.5)", "result": "002a"},
        {"call": "BIN2HEX('Hello World!')", "result": "#NUM!"},
        {"call": "BIN2HEX(1234567890)", "result": "#NUM!"},
        {"call": "BIN2HEX(101010101010)", "result": "#NUM!"},
        {"call": "BIN2HEX(101010, 1)", "result": "#NUM!"},
        {"call": "BIN2HEX(101010, -4)", "result": "#NUM!"},
        {"call": "BIN2HEX(101010, 'Hello World!')", "result": "#VALUE!"}
      ]},
      {"function": "BIN2OCT", "tests": [
        {"call": "BIN2OCT(101010)", "result": "52"},
        {"call": "BIN2OCT('101010')", "result": "52"},
        {"call": "BIN2OCT(111111111)", "result": "777"},
        {"call": "BIN2OCT(1000000000)", "result": "7777777000"},
        {"call": "BIN2OCT(1111111111)", "result": "7777777777"},
        {"call": "BIN2OCT(101010, 2)", "result": "52"},
        {"call": "BIN2OCT(101010, 4)", "result": "0052"},
        {"call": "BIN2OCT(101010, 4.5)", "result": "0052"},
        {"call": "BIN2OCT('Hello World!')", "result": "#NUM!"},
        {"call": "BIN2OCT(1234567890)", "result": "#NUM!"},
        {"call": "BIN2OCT(101010101010)", "result": "#NUM!"},
        {"call": "BIN2OCT(101010, 1)", "result": "#NUM!"},
        {"call": "BIN2OCT(101010, -4)", "result": "#NUM!"},
        {"call": "BIN2OCT(101010, 'Hello World!')", "result": "#VALUE!"}
      ]},
      {"function": "BITAND", "tests": [
        {"call": "BITAND(0, 0)", "result": 0},
        {"call": "BITAND(0, 1)", "result": 0},
        {"call": "BITAND(1, 1)", "result": 1},
        {"call": "BITAND(42, 24)", "result": 8},
        {"call": "BITAND(1, -1)", "result": "#NUM!"},
        {"call": "BITAND(1, 1.5)", "result": "#NUM!"},
        {"call": "BITAND(281474976710656, 1)", "result": "#NUM!"},
        {"call": "BITAND('Hello World!', 1)", "result": "#VALUE!"}
      ]},
      {"function": "BITLSHIFT", "tests": [
        {"call": "BITLSHIFT(0, 0)", "result": 0},
        {"call": "BITLSHIFT(0, 1)", "result": 0},
        {"call": "BITLSHIFT(1, 1)", "result": 2},
        {"call": "BITLSHIFT(42, 24)", "result": 704643072},
        {"call": "BITLSHIFT(1, -1)", "result": 0},
        {"call": "BITLSHIFT(1, 1.5)", "result": 2},
        {"call": "BITLSHIFT(1.5, 1)", "result": "#NUM!"},
        {"call": "BITLSHIFT(281474976710656, 1)", "result": "#NUM!"},
        {"call": "BITLSHIFT('Hello World!', 1)", "result": "#VALUE!"}
      ]},
      {"function": "BITOR", "tests": [
        {"call": "BITOR(0, 0)", "result": 0},
        {"call": "BITOR(1, 0)", "result": 1},
        {"call": "BITOR(1, 1)", "result": 1},
        {"call": "BITOR(42, 24)", "result": 58},
        {"call": "BITOR(1, -1)", "result": "#NUM!"},
        {"call": "BITOR(1.5, 1)", "result": "#NUM!"},
        {"call": "BITOR(281474976710656, 1)", "result": "#NUM!"},
        {"call": "BITOR('Hello World!', 1)", "result": "#VALUE!"}
      ]},
      {"function": "BITRSHIFT", "tests": [
        {"call": "BITRSHIFT(0, 0)", "result": 0},
        {"call": "BITRSHIFT(0, 1)", "result": 0},
        {"call": "BITRSHIFT(1, 1)", "result": 0},
        {"call": "BITRSHIFT(42, 2)", "result": 10},
        {"call": "BITRSHIFT(1, -1)", "result": 2},
        {"call": "BITRSHIFT(1, 1.5)", "result": 0},
        {"call": "BITRSHIFT(1.5, 1)", "result": "#NUM!"},
        {"call": "BITRSHIFT(281474976710656, 1)", "result": "#NUM!"},
        {"call": "BITRSHIFT('Hello World!', 1)", "result": "#VALUE!"}
      ]},
      {"function": "BITXOR", "tests": [
        {"call": "BITXOR(0, 0)", "result": 0},
        {"call": "BITXOR(0, 1)", "result": 1},
        {"call": "BITXOR(1, 1)", "result": 0},
        {"call": "BITXOR(42, 24)", "result": 50},
        {"call": "BITXOR(1, -1)", "result": "#NUM!"},
        {"call": "BITXOR(1.5, 1)", "result": "#NUM!"},
        {"call": "BITXOR(281474976710656, 1)", "result": "#NUM!"},
        {"call": "BITXOR('Hello World!', 1)", "result": "#VALUE!"}
      ]},
      {"function": "CEILING", "tests": [
        {"call": "CEILING(4.1)", "result": 5},
        {"call": "CEILING(4.9)", "result": 5},
        {"call": "CEILING(-4.1)", "result": -4},
        {"call": "CEILING(-4.9)", "result": -4},
        {"call": "CEILING(4.1, 0)", "result": 0},
        {"call": "CEILING(4.1, 1)", "result": 5},
        {"call": "CEILING(4.1, 2)", "result": 6},
        {"call": "CEILING(-4.1, 2)", "result": -4},
        {"call": "CEILING(-4.1, -2)", "result": -4},
        {"call": "CEILING(1.234, 0.1)", "result": 1.3},
        {"call": "CEILING(-1.234, 0.1)", "result": -1.2},
        {"call": "CEILING(-1.234, -0.1)", "result": -1.2},
        {"call": "CEILING(-1.234, -0.01)", "result": -1.23},
        {"call": "CEILING(-1.234, -0.001)", "result": -1.234},
        {"call": "CEILING(-4.1, 2, 0)", "result": -4},
        {"call": "CEILING(-4.1, 2, -1)", "result": -6},
        {"call": "CEILING(-4.1, -2, 0)", "result": -4},
        {"call": "CEILING(-4.1, -2, -1)", "result": -6}
      ]},
      {"function": "CHAR", "tests": [
        {"call": "CHAR(65)", "result": "A"},
        {"call": "CHAR(255)", "result": "ÿ"},
        {"call": "CHAR(1000)", "result": "Ϩ"},
      ]},
      {"function": "COMBIN", "tests": [
        {"call": "COMBIN(0, 0)", "result": 1},
        {"call": "COMBIN(1, 0)", "result": 1},
        {"call": "COMBIN(1, 1)", "result": 1},
        {"call": "COMBIN(2, 1)", "result": 2},
        {"call": "COMBIN(2, 2)", "result": 1},
        {"call": "COMBIN(3, 1)", "result": 3},
        {"call": "COMBIN(3, 2)", "result": 3},
        {"call": "COMBIN(3, 3)", "result": 1},
        {"call": "COMBIN(10, 3)", "result": 120}
      ]},
      {"function": "COMBINA", "tests": [
        {"call": "COMBINA(0, 0)", "result": 1},
        {"call": "COMBINA(1, 0)", "result": 1},
        {"call": "COMBINA(1, 1)", "result": 1},
        {"call": "COMBINA(2, 1)", "result": 2},
        {"call": "COMBINA(2, 2)", "result": 3},
        {"call": "COMBINA(3, 1)", "result": 3},
        {"call": "COMBINA(3, 2)", "result": 6},
        {"call": "COMBINA(3, 3)", "result": 10},
        {"call": "COMBINA(10, 3)", "result": 220}
      ]},
      {"function": "COMPLEX", "tests": [
        {"call": "COMPLEX(0, 0)", "result": 0},
        {"call": "COMPLEX(1, 0)", "result": '1'},
        {"call": "COMPLEX(0, 1)", "result": "i"},
        {"call": "COMPLEX(2, 0)", "result": "2"},
        {"call": "COMPLEX(0, 2)", "result": "2i"},
        {"call": "COMPLEX(3, 4)", "result": "3+4i"},
        {"call": "COMPLEX(-3, 4)", "result": "-3+4i"},
        {"call": "COMPLEX(3, -4)", "result": "3-4i"},
        {"call": "COMPLEX(-3, -4)", "result": "-3-4i"},
        {"call": "COMPLEX(3, 4, 'i')", "result": "3+4i"},
        {"call": "COMPLEX(3, 4, 'j')", "result": "3+4j"},
        {"call": "COMPLEX(3, 4, 'I')", "result": "#VALUE!"},
        {"call": "COMPLEX(3, 4, 'J')", "result": "#VALUE!"},
        {"call": "COMPLEX(3, 4, 'Hello World!')", "result": "#VALUE!"},
        {"call": "COMPLEX('Hello World!', 1)", "result": "#VALUE!"},
        {"call": "COMPLEX(1, 'Hello World!')", "result": "#VALUE!"}
      ]},
      {"function": "CONVERT", "tests": [
        {"call": "CONVERT(2, 'mi', 'yd')", "result": 3520},
        {"call": "CONVERT(2, 'nm', 'mm')", "result": 0.000002},
        {"call": "CONVERT(2, 'kg', 'lbm')", "result": 4.409245243697551},
        {"call": "CONVERT(2, 'g', 'lbm')", "result": 0.004409245243697552},
        {"call": "CONVERT(2, 'mg', 'lbm')", "result": 0.000004409245243697551},
        {"call": "CONVERT(3583, 'byte', 'kbyte')", "result": 3.583},
        {"call": "CONVERT(3583, 'byte', 'bit')", "result": 28664},
        {"call": "CONVERT(64, 'kibyte', 'bit')", "result": 524288},
        {"call": "CONVERT('Lots of', 'mi', 'yard')", "result": "#VALUE!"},
        {"call": "CONVERT(1, 'mi', 'yard')", "result": "#N/A"}
      ]},
      {"function": "COUNT", "tests": [
        {"call": "COUNT()", "result": 0},
        {"call": "COUNT(1, 2, 3, 4)", "result": 4},
        {"call": "COUNT([1,2,3,4])", "result": 4},
        {"call": "COUNT([1,2], [3,4])", "result": 4}
      ]},
      {"function": "COUNTA", "tests": [
        {"call": "COUNTA()", "result": 0},
        {"call": "COUNTA(1, null, 3, 'a', '', 'c')", "result": 4},
        {"call": "COUNTA([1,null,3,'a','','c'])", "result": 4},
        {"call": "COUNTA([1,null,3], ['a','','c'])", "result": 4}
      ]},
      {"function": "COUNTBLANK", "tests": [
        {"call": "COUNTBLANK()", "result": 0},
        {"call": "COUNTBLANK(1, null, 3, 'a', '', 'c')", "result": 2},
        {"call": "COUNTBLANK([1,null,3,'a','','c'])", "result": 2},
        {"call": "COUNTBLANK([1,null,3], ['a','','c'])", "result": 2}
      ]},
      {"function": "COUNTUNIQUE", "tests": [
        {"call": "COUNTUNIQUE()", "result": 0},
        {"call": "COUNTUNIQUE(1, 1, 2, 2, 3, 3)", "result": 3},
        {"call": "COUNTUNIQUE([1,1,2,2,3,3])", "result": 3},
        {"call": "COUNTUNIQUE([1,1,2], [2,3,3])", "result": 3}
      ]},
      {"function": "CUMIPMT", "tests": [
        {"call": "CUMIPMT('0.1/12', '30*12', 100000, 13, 24, 0)", "result": -9916.77251395708},
        {"call": "CUMIPMT('0.1/12', '30*12', 100000, 13, 24, 1)", "result": -9834.815716321069},
        {"call": "CUMIPMT('-0.1/12', '30*12', 100000, 13, 24, 0)", "result": "#NUM!"},
        {"call": "CUMIPMT('0.1/12', '-30*12', 100000, 13, 24, 0)", "result": "#NUM!"},
        {"call": "CUMIPMT('0.1/12', '30*12', -100000, 13, 24, 0)", "result": "#NUM!"},
        {"call": "CUMIPMT('0.1/12', '30*12', 100000, 0, 24, 0)", "result": "#NUM!"},
        {"call": "CUMIPMT('0.1/12', '30*12', 100000, 13, 0, 0)", "result": "#NUM!"},
        {"call": "CUMIPMT('0.1/12', '30*12', 100000, 24, 13, 0)", "result": "#NUM!"},
        {"call": "CUMIPMT('0.1/12', '30*12', 100000, 13, 24, 2)", "result": "#NUM!"}
      ]},
      {"function": "CUMPRINC", "tests": [
        {"call": "CUMPRINC('0.1/12', '30*12', 100000, 13, 24, 0)", "result": -614.0863271085149},
        {"call": "CUMPRINC('0.1/12', '30*12', 100000, 13, 24, 1)", "result": -609.0112334960476},
        {"call": "CUMPRINC('-0.1/12', '30*12', 100000, 13, 24, 0)", "result": "#NUM!"},
        {"call": "CUMPRINC('0.1/12', '-30*12', 100000, 13, 24, 0)", "result": "#NUM!"},
        {"call": "CUMPRINC('0.1/12', '30*12', -100000, 13, 24, 0)", "result": "#NUM!"},
        {"call": "CUMPRINC('0.1/12', '30*12', 100000, 0, 24, 0)", "result": "#NUM!"},
        {"call": "CUMPRINC('0.1/12', '30*12', 100000, 13, 0, 0)", "result": "#NUM!"},
        {"call": "CUMPRINC('0.1/12', '30*12', 100000, 24, 13, 0)", "result": "#NUM!"},
        {"call": "CUMPRINC('0.1/12', '30*12', 100000, 13, 24, 2)", "result": "#NUM!"}
      ]},
      {"function": "ATE(B", "tests": [
        {"call": "DB(1000000, 100000, 6, 1)", "result": 319000},
        {"call": "DB(1000000, 100000, 6, 2)", "result": 217239},
        {"call": "DB(1000000, 100000, 6, 3)", "result": 147939.759},
        {"call": "DB(1000000, 100000, 6, 4)", "result": 100746.97587900002},
        {"call": "DB(1000000, 100000, 6, 5)", "result": 68608.690573599},
        {"call": "DB(1000000, 100000, 6, 6)", "result": 46722.518280620934},
        {"call": "DB(1000000, 100000, 6, 1, 6)", "result": 159500},
        {"call": "DB(1000000, 100000, 6, 2, 6)", "result": 268119.50},
        {"call": "DB(1000000, 100000, 6, 3, 6)", "result": 182589.3795},
        {"call": "DB(1000000, 100000, 6, 4, 6)", "result": 124343.36743949998},
        {"call": "DB(1000000, 100000, 6, 5, 6)", "result": 84677.83322629951},
        {"call": "DB(1000000, 100000, 6, 6, 6)", "result": 57665.60442710997},
        {"call": "DB(1000000, 100000, 6, 1, 9)", "result": 239250},
        {"call": "DB(1000000, 100000, 6, 2, 9)", "result": 242679.25},
        {"call": "DB(1000000, 100000, 6, 3, 9)", "result": 165264.56925},
        {"call": "DB(1000000, 100000, 6, 4, 9)", "result": 112545.17165925002},
        {"call": "DB(1000000, 100000, 6, 5, 9)", "result": 76643.26189994926},
        {"call": "DB(1000000, 100000, 6, 6, 9)", "result": 52194.061353865436},
        {"call": "DB('Hello World!', 100000, 6, 1, 6)", "result": "#VALUE!"},
        {"call": "DB(1000000, 'Hello World!', 6, 1, 6)", "result": "#VALUE!"},
        {"call": "DB(1000000, 100000, 'Hello World!', 1, 6)", "result": "#VALUE!"},
        {"call": "DB(1000000, 100000, 6, 'Hello World!', 6)", "result": "#VALUE!"},
        {"call": "DB(1000000, 100000, 6, 1, 'Hello World!')", "result": "#VALUE!"},
        {"call": "DB(-1000000, 100000, 6, 1, 6)", "result": "#NUM!"},
        {"call": "DB(1000000, -100000, 6, 1, 6)", "result": "#NUM!"},
        {"call": "DB(1000000, 100000, -6, 1, 6)", "result": "#NUM!"},
        {"call": "DB(1000000, 100000, 6, -1, 6)", "result": "#NUM!"},
        {"call": "DB(1000000, 100000, 6, 1, -1)", "result": "#NUM!"},
        {"call": "DB(1000000, 100000, 6, 1, 13)", "result": "#NUM!"},
        {"call": "DB(1000000, 100000, 6, 7, 6)", "result": "#NUM!"},
        {"call": "DB(1000000, 1000000, 6, 1, 6)", "result": 0},
        {"call": "DB(100000, 1000000, 6, 1, 6)", "result": 0},
      ]},
      {"function": "DAVERAGE", "tests": [
        {"call": "DAVERAGE([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,8]," +
          "['Age',20,12,14,15,8,9],['Yield',14,10,9,10,8,6]]" +
          ",'Yield', [['Height','>10'],['Age','>14']])", "result": 12},
        {"call": "DAVERAGE([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,8]," +
          "['Age',20,12,14,15,8,9],['Yield',14,10,9,10,8,6]]" +
          ",'Yield', [['Height','>10','>9'],['Age','>14']])", "result": 10.75},
      ]},
      {"function": "DCOUNT", "tests": [
        {"call": "DCOUNT([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12]," +
          "['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]]" +
          ",'Yield', [['Height','>10'],['Age','>14']])", "result": 2},
      ]},
      {"function": "DCOUNTA", "tests": [
        {"call": "DCOUNTA([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12]," +
          "['Age',20,12,14,16,8,11],['Yield',null,10,9,10,8,6]]" +
          ",'Yield', [['Height','>10'],['Age','>14']])", "result": 1},
      ]},
      {"function": "DGET", "tests": [
        {"call": "DGET([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12]," +
          "['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]]" +
          ",'Yield', [['Height','>10'],['Age','>16']])", "result": 14},
        {"call": "DGET([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12]," +
          "['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]]" +
          ",'Yield', [['Height','>10'],['Age','>14']])", "result": '#NUM!'},
        {"call": "DGET([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12]," +
          "['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]]" +
          ",'Yield', [['Height','>10'],['Age','>20']])", "result": '#VALUE!'},
      ]},
      {"function": "DMAX", "tests": [
        {"call": "DMAX([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12]," +
          "['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]]" +
          ",'Yield', [['Height','>10'],['Age','>14']])", "result": 14},
      ]},
      {"function": "DMIN", "tests": [
        {"call": "DMIN([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12]," +
          "['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]]" +
          ",'Yield', [['Height','>10'],['Age','>14']])", "result": 10},
      ]},
      {"function": "DPRODUCT", "tests": [
        {"call": "DPRODUCT([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12]," +
          "['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]]" +
          ",'Yield', [['Height','>10'],['Age','>14']])", "result": 140},
      ]},
      {"function": "DSTDEV", "tests": [
        {"call": "DSTDEV([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12]," +
          "['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]]" +
          ",'Yield', [['Height','>10']])", "result": 2.8635642126552705},
      ]},
      {"function": "DSTDEVP", "tests": [
        {"call": "DSTDEVP([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12]," +
          "['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]]" +
          ",'Yield', [['Height','>10']])", "result": 2.5612496949731396},
      ]},
      {"function": "DSUM", "tests": [
        {"call": "DSUM([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12]," +
          "['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]]" +
          ",'Yield', [['Height','>10'],['Age','>14']])", "result": 24},
      ]},
      {"function": "DVAR", "tests": [
        {"call": "DVAR([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12]," +
          "['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]]" +
          ",'Yield', [['Height','>10'],['Age','>14']])", "result": 8},
      ]},
      {"function": "DVARP", "tests": [
        {"call": "DVARP([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12]," +
          "['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]]" +
          ",'Yield', [['Height','>10'],['Age','>14']])", "result": 4},
      ]},
      {"function": "DDB", "tests": [
        {"call": "DDB(1000000, 100000, 6, 1)", "result": 333333.3333333333},
        {"call": "DDB(1000000, 100000, 6, 2)", "result": 222222.22222222225},
        {"call": "DDB(1000000, 100000, 6, 3)", "result": 148148.14814814815},
        {"call": "DDB(1000000, 100000, 6, 4)", "result": 98765.43209876546},
        {"call": "DDB(1000000, 100000, 6, 5)", "result": 65843.62139917696},
        {"call": "DDB(1000000, 100000, 6, 6)", "result": 31687.242798353895},
        {"call": "DDB(1000000, 100000, 6, 1, 1.5)", "result": 250000},
        {"call": "DDB(1000000, 100000, 6, 2, 1.5)", "result": 187500},
        {"call": "DDB(1000000, 100000, 6, 3, 1.5)", "result": 140625},
        {"call": "DDB(1000000, 100000, 6, 4, 1.5)", "result": 105468.75},
        {"call": "DDB(1000000, 100000, 6, 5, 1.5)", "result": 79101.5625},
        {"call": "DDB(1000000, 100000, 6, 6, 1.5)", "result": 59326.171875},
        {"call": "DDB('Hello World!', 100000, 6, 6, 1.5)", "result": "#VALUE!"},
        {"call": "DDB(1000000, 'Hello World!', 6, 6, 1.5)", "result": "#VALUE!"},
        {"call": "DDB(1000000, 100000, 'Hello World!', 6, 1.5)", "result": "#VALUE!"},
        {"call": "DDB(1000000, 100000, 6, 'Hello World!', 1.5)", "result": "#VALUE!"},
        {"call": "DDB(1000000, 100000, 6, 6, 'Hello World!')", "result": "#VALUE!"},
        {"call": "DDB(-1000000, 100000, 6, 1, 1.5)", "result": "#NUM!"},
        {"call": "DDB(1000000, -100000, 6, 1, 1.5)", "result": "#NUM!"},
        {"call": "DDB(1000000, 100000, -6, 1, 1.5)", "result": "#NUM!"},
        {"call": "DDB(1000000, 100000, 6, -1, 1.5)", "result": "#NUM!"},
        {"call": "DDB(1000000, 100000, 6, 1, -1.5)", "result": "#NUM!"},
        {"call": "DDB(1000000, 100000, 6, 1, 0)", "result": "#NUM!"},
        {"call": "DDB(1000000, 100000, 6, 7, 1.5)", "result": "#NUM!"},
        {"call": "DDB(1000000, 1000000, 6, 1, 1.5)", "result": 0},
        {"call": "DDB(100000, 1000000, 6, 1, 1.5)", "result": 0},
      ]},
      {"function": "DOLLARDE", "tests": [
        {"call": "DOLLARDE(1.1, 1)", "result": 1.1},
        {"call": "DOLLARDE(1.1, 2)", "result": 1.5},
        {"call": "DOLLARDE(1.1, 4)", "result": 1.25},
        {"call": "DOLLARDE(1.1, 8)", "result": 1.125},
        {"call": "DOLLARDE(1.1, 16)", "result": 1.625},
        {"call": "DOLLARDE(1.1, 32)", "result": 1.3125},
        {"call": "DOLLARDE(-1.1, 1)", "result": -1.1},
        {"call": "DOLLARDE(-1.1, 2)", "result": -1.5},
        {"call": "DOLLARDE(-1.1, 4)", "result": -1.25},
        {"call": "DOLLARDE(-1.1, 8)", "result": -1.125},
        {"call": "DOLLARDE(-1.1, 16)", "result": -1.625},
        {"call": "DOLLARDE(-1.1, 32)", "result": -1.3125},
        {"call": "DOLLARDE(1.1, 1.5)", "result": 1.1},
        {"call": "DOLLARDE('Hello World!', 1)", "result": "#VALUE!"},
        {"call": "DOLLARDE(1.1, 'Hello World!')", "result": "#VALUE!"},
        {"call": "DOLLARDE(1.1, -1)", "result": "#NUM!"},
        {"call": "DOLLARDE(1.1, 0.5)", "result": "#DIV/0!"}
      ]},
      {"function": "DOLLARFR", "tests": [
        {"call": "DOLLARFR(1.1, 1)", "result": 1.1},
        {"call": "DOLLARFR(1.5, 2)", "result": 1.1},
        {"call": "DOLLARFR(1.25, 4)", "result": 1.1},
        {"call": "DOLLARFR(1.125, 8)", "result": 1.1},
        {"call": "DOLLARFR(1.625, 16)", "result": 1.1},
        {"call": "DOLLARFR(1.3125, 32)", "result": 1.1},
        {"call": "DOLLARFR(-1.1, 1)", "result": -1.1},
        {"call": "DOLLARFR(-1.5, 2)", "result": -1.1},
        {"call": "DOLLARFR(-1.25, 4)", "result": -1.1},
        {"call": "DOLLARFR(-1.125, 8)", "result": -1.1},
        {"call": "DOLLARFR(-1.625, 16)", "result": -1.1},
        {"call": "DOLLARFR(-1.3125, 32)", "result": -1.1},
        {"call": "DOLLARFR(-1.1, 1.5)", "result": -1.1},
        {"call": "DOLLARFR('Hello World!', 1)", "result": "#VALUE!"},
        {"call": "DOLLARFR(1.5, 'Hello World!')", "result": "#VALUE!"},
        {"call": "DOLLARFR(1.5, -1)", "result": "#NUM!"},
        {"call": "DOLLARFR(1.5, 0.5)", "result": "#DIV/0!"}
      ]},
      {"function": "DEC2BIN", "tests": [
        {"call": "DEC2BIN(42)", "result": "101010"},
        {"call": "DEC2BIN('42')", "result": "101010"},
        {"call": "DEC2BIN(-512)", "result": "1000000000"},
        {"call": "DEC2BIN(-511)", "result": "1000000001"},
        {"call": "DEC2BIN(-1)", "result": "1111111111"},
        {"call": "DEC2BIN(0)", "result": "0"},
        {"call": "DEC2BIN(1)", "result": "1"},
        {"call": "DEC2BIN(510)", "result": "111111110"},
        {"call": "DEC2BIN(511)", "result": "111111111"},
        {"call": "DEC2BIN(42, 6)", "result": "101010"},
        {"call": "DEC2BIN(42, 8)", "result": "00101010"},
        {"call": "DEC2BIN('Hello World!')", "result": "#VALUE!"},
        {"call": "DEC2BIN('2a')", "result": "#VALUE!"},
        {"call": "DEC2BIN(-513)", "result": "#NUM!"},
        {"call": "DEC2BIN(512)", "result": "#NUM!"},
        {"call": "DEC2BIN(42, 5)", "result": "#NUM!"},
        {"call": "DEC2BIN(42, -8)", "result": "#NUM!"},
        {"call": "DEC2BIN(42, 'Hello World!')", "result": "#VALUE!"}
      ]},
      {"function": "DEC2HEX", "tests": [
        {"call": "DEC2HEX(42)", "result": "2a"},
        {"call": "DEC2HEX('42')", "result": "2a"},
        {"call": "DEC2HEX(-549755813888)", "result": "8000000000"},
        {"call": "DEC2HEX(-549755813887)", "result": "8000000001"},
        {"call": "DEC2HEX(-1)", "result": "ffffffffff"},
        {"call": "DEC2HEX(0)", "result": '0'},
        {"call": "DEC2HEX(1)", "result": '1'},
        {"call": "DEC2HEX(549755813886)", "result": "7ffffffffe"},
        {"call": "DEC2HEX(549755813887)", "result": "7fffffffff"},
        {"call": "DEC2HEX(42, 2)", "result": "2a"},
        {"call": "DEC2HEX(42, 4)", "result": "002a"},
        {"call": "DEC2HEX('Hello World!')", "result": "#VALUE!"},
        {"call": "DEC2HEX('2a')", "result": "#VALUE!"},
        {"call": "DEC2HEX(-549755813889)", "result": "#NUM!"},
        {"call": "DEC2HEX(549755813888)", "result": "#NUM!"},
        {"call": "DEC2HEX(42, 1)", "result": "#NUM!"},
        {"call": "DEC2HEX(42, -4)", "result": "#NUM!"},
        {"call": "DEC2HEX(42, 'Hello World!')", "result": "#VALUE!"}
      ]},
      {"function": "DEC2OCT", "tests": [
        {"call": "DEC2OCT(42)", "result": "52"},
        {"call": "DEC2OCT('42')", "result": "52"},
        {"call": "DEC2OCT(-536870912)", "result": "4000000000"},
        {"call": "DEC2OCT(-536870911)", "result": "4000000001"},
        {"call": "DEC2OCT(-1)", "result": "7777777777"},
        {"call": "DEC2OCT(0)", "result": '0'},
        {"call": "DEC2OCT(1)", "result": "1"},
        {"call": "DEC2OCT(536870910)", "result": "3777777776"},
        {"call": "DEC2OCT(536870911)", "result": "3777777777"},
        {"call": "DEC2OCT(42, 2)", "result": "52"},
        {"call": "DEC2OCT(42, 4)", "result": "0052"},
        {"call": "DEC2OCT('Hello World!')", "result": "#VALUE!"},
        {"call": "DEC2OCT('2a')", "result": "#VALUE!"},
        {"call": "DEC2OCT(-536870913)", "result": "#NUM!"},
        {"call": "DEC2OCT(536870912)", "result": "#NUM!"},
        {"call": "DEC2OCT(42, 1)", "result": "#NUM!"},
        {"call": "DEC2OCT(42, -4)", "result": "#NUM!"},
        {"call": "DEC2OCT(42, 'Hello World!')", "result": "#VALUE!"}
      ]},
      {"function": "DECIMAL", "tests": [
        {"call": "DECIMAL('0', 2)", "result": 0},
        {"call": "DECIMAL('1', 2)", "result": 1},
        {"call": "DECIMAL('10', 2)", "result": 2},
        {"call": "DECIMAL('10', 10)", "result": 10},
        {"call": "DECIMAL('FF', 16)", "result": 255},
        {"call": "DECIMAL('ZZ', 36)", "result": 1295}
      ]},
      {"function": "DELTA", "tests": [
        {"call": "DELTA(0)", "result": 1},
        {"call": "DELTA(1)", "result": 0},
        {"call": "DELTA(0, 0)", "result": 1},
        {"call": "DELTA(0, 1)", "result": 0},
        {"call": "DELTA(1, 1)", "result": 1},
        {"call": "DELTA(1.5, 1)", "result": 0},
        {"call": "DELTA(42, 42)", "result": 1},
        {"call": "DELTA(42, 24)", "result": 0},
        {"call": "DELTA('Hello', 0)", "result": "#VALUE!"},
        {"call": "DELTA(0, 'World')", "result": "#VALUE!"}
      ]},
      {"function": "EFFECT", "tests": [
        {"call": "EFFECT(0.1, 4)", "result": 0.10381289062499977},
        {"call": "EFFECT(0.1, 4.5)", "result": 0.10381289062499977},
        {"call": "EFFECT('Hello', 4)", "result": "#VALUE!"},
        {"call": "EFFECT(0.1, 'World')", "result": "#VALUE!"},
        {"call": "EFFECT(-0.1, 4)", "result": "#NUM!"},
        {"call": "EFFECT(0.1, 0.5)", "result": "#NUM!"},
      ]},
      {"function": "ERF", "tests": [
        {"call": "ERF(0)", "result": 1.1102230246251565e-16},
        {"call": "ERF(1)", "result": 0.8427007929497149},
        {"call": "ERF(42)", "result": 1},
        {"call": "ERF('Hello World!')", "result": "#VALUE!"}
      ]},
      {"function": "ERFC", "tests": [
        {"call": "ERFC(0)", "result": 0.9999999999999999},
        {"call": "ERFC(1)", "result": 0.1572992070502851},
        {"call": "ERFC(42)", "result": 0},
        {"call": "ERFC('Hello World!')", "result": "#VALUE!"}
      ]},
      {"function": "FLOOR", "tests": [
        {"call": "FLOOR(3.1)", "result": 3},
        {"call": "FLOOR(3.9)", "result": 3},
        {"call": "FLOOR(-3.1)", "result": -4},
        {"call": "FLOOR(-3.9)", "result": -4},
        {"call": "FLOOR(3.1, 0)", "result": 0},
        {"call": "FLOOR(3.1, 1)", "result": 3},
        {"call": "FLOOR(3.1, 2)", "result": 2},
        {"call": "FLOOR(-3.1, 2)", "result": -4},
        {"call": "FLOOR(-3.1, -2)", "result": -4},
        {"call": "FLOOR(1.234, 0.1)", "result": 1.2},
        {"call": "FLOOR(-1.234, 0.1)", "result": -1.3},
        {"call": "FLOOR(-1.234, -0.1)", "result": -1.3},
        {"call": "FLOOR(-1.234, -0.01)", "result": -1.24},
        {"call": "FLOOR(-1.234, -0.001)", "result": -1.234},
        {"call": "FLOOR(-4.1, 2, 0)", "result": -6},
        {"call": "FLOOR(-4.1, 2, -1)", "result": -4},
        {"call": "FLOOR(-4.1, -2, 0)", "result": -6},
        {"call": "FLOOR(-4.1, -2, -1)", "result": -4}
      ]},
      {"function": "FV", "tests": [
        {"call": "FV('0.1/12', 10, -100, -1000, 0)", "result": 2124.874409194097},
        {"call": "FV('0.1/12', 10, -100, -1000, 1)", "result": 2133.527289264821},
        {"call": "FV('0.1/12', 10, -100, -1000)", "result": 2124.874409194097},
        {"call": "FV('0.1/12', 10, null, -1000)", "result": 1086.5288007072381},
        {"call": "FV('0.1/12', 10, -100, null)", "result": 1038.3456084868587}
      ]},
      {"function": "FVSCHEDULE", "tests": [
        {"call": "FVSCHEDULE(100, [0.09,0.1,0.11])", "result": 133.08900000000003},
        {"call": "FVSCHEDULE(100, ['Hello World!',0.1,0.11])", "result": "#VALUE!"}
      ]},
      {"function": "GESTEP", "tests": [
        {"call": "GESTEP(0)", "result": 1},
        {"call": "GESTEP(1)", "result": 1},
        {"call": "GESTEP(0, 0)", "result": 1},
        {"call": "GESTEP(0, 1)", "result": 0},
        {"call": "GESTEP(1, 1)", "result": 1},
        {"call": "GESTEP(1.5, 1)", "result": 1},
        {"call": "GESTEP(42, 24)", "result": 1},
        {"call": "GESTEP(24, 42)", "result": 0},
        {"call": "GESTEP(-42, -24)", "result": 0},
        {"call": "GESTEP(-24, -42)", "result": 1},
        {"call": "GESTEP('Hello', 0)", "result": "#VALUE!"},
        {"call": "GESTEP(0, 'World')", "result": "#VALUE!"}
      ]},
      {"function": "HEX2BIN", "tests": [
        {"call": "HEX2BIN('2a')", "result": "101010"},
        {"call": "HEX2BIN('fffffffe00')", "result": "1000000000"},
        {"call": "HEX2BIN('fffffffe01')", "result": "1000000001"},
        {"call": "HEX2BIN('ffffffffff')", "result": "1111111111"},
        {"call": "HEX2BIN(0)", "result": '0'},
        {"call": "HEX2BIN(1)", "result": '1'},
        {"call": "HEX2BIN('1fe')", "result": "111111110"},
        {"call": "HEX2BIN('1ff')", "result": "111111111"},
        {"call": "HEX2BIN('2a', 6)", "result": "101010"},
        {"call": "HEX2BIN('2a', 8)", "result": "00101010"},
        {"call": "HEX2BIN('Hello World!')", "result": "#NUM!"},
        {"call": "HEX2BIN('fffffffdff')", "result": "#NUM!"},
        {"call": "HEX2BIN('200')", "result": "#NUM!"},
        {"call": "HEX2BIN('2a', 5)", "result": "#NUM!"},
        {"call": "HEX2BIN('2a', -8)", "result": "#NUM!"},
        {"call": "HEX2BIN('2a', 'Hello World!')", "result": "#VALUE!"}
      ]},
      {"function": "HEX2DEC", "tests": [
        {"call": "HEX2DEC('2a')", "result": 42},
        {"call": "HEX2DEC('8000000000')", "result": -549755813888},
        {"call": "HEX2DEC('ffffffffff')", "result": -1},
        {"call": "HEX2DEC(0)", "result": 0},
        {"call": "HEX2DEC(1)", "result": 1},
        {"call": "HEX2DEC('7fffffffff')", "result": 549755813887}
      ]},
      {"function": "HEX2OCT", "tests": [
        {"call": "HEX2OCT('2a')", "result": "52"},
        {"call": "HEX2OCT('ffe0000000')", "result": "4000000000"},
        {"call": "HEX2OCT('ffe0000001')", "result": "4000000001"},
        {"call": "HEX2OCT(0)", "result": "0"},
        {"call": "HEX2OCT(1)", "result": "1"},
        {"call": "HEX2OCT('1ffffffe')", "result": "3777777776"},
        {"call": "HEX2OCT('1fffffff')", "result": "3777777777"},
        {"call": "HEX2OCT('2a', 2)", "result": "52"},
        {"call": "HEX2OCT('2a', 4)", "result": "0052"},
        {"call": "HEX2OCT('Hello World!')", "result": "#NUM!"},
        {"call": "HEX2OCT('ffdfffffff')", "result": "#NUM!"},
        {"call": "HEX2OCT('20000000')", "result": "#NUM!"},
        {"call": "HEX2OCT('2a', 1)", "result": "#NUM!"},
        {"call": "HEX2OCT('2a', -4)", "result": "#NUM!"},
        {"call": "HEX2OCT('2a', 'Hello World!')", "result": "#VALUE!"}
      ]},
      {"function": "IMABS", "tests": [
        {"call": "IMABS('0')", "result": 0},
        {"call": "IMABS('3+4i')", "result": 5},
        {"call": "IMABS('3-4i')", "result": 5},
        {"call": "IMABS('-3+4i')", "result": 5},
        {"call": "IMABS('-3-4i')", "result": 5},
        {"call": "IMABS('Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "IMAGINARY", "tests": [
        {"call": "IMAGINARY('0+0i')", "result": 0},
        {"call": "IMAGINARY('2+i')", "result": 1},
        {"call": "IMAGINARY('2+1i')", "result": 1},
        {"call": "IMAGINARY('2-i')", "result": -1},
        {"call": "IMAGINARY('2-1i')", "result": -1},
        {"call": "IMAGINARY('2+j')", "result": 1},
        {"call": "IMAGINARY('2+1j')", "result": 1},
        {"call": "IMAGINARY('2-j')", "result": -1},
        {"call": "IMAGINARY('2-1j')", "result": -1},
        {"call": "IMAGINARY('3+4i')", "result": 4},
        {"call": "IMAGINARY('3+4j')", "result": 4},
        {"call": "IMAGINARY('3 + 4i')", "result": 4},
        {"call": "IMAGINARY('3-4i')", "result": -4},
        {"call": "IMAGINARY('3 - 4i')", "result": -4},
        {"call": "IMAGINARY('+3+4i')", "result": 4},
        {"call": "IMAGINARY('+3-4i')", "result": -4},
        {"call": "IMAGINARY('-3+4i')", "result": 4},
        {"call": "IMAGINARY('-3-4i')", "result": -4},
        {"call": "IMAGINARY('0')", "result": 0},
        {"call": "IMAGINARY('3')", "result": 0},
        {"call": "IMAGINARY('-3')", "result": 0},
        {"call": "IMAGINARY('0i')", "result": '0'},
        {"call": "IMAGINARY('i')", "result": 1},
        {"call": "IMAGINARY('+i')", "result": '+1'},
        {"call": "IMAGINARY('-i')", "result": '-1'},
        {"call": "IMAGINARY('j')", "result": 1},
        {"call": "IMAGINARY('+j')", "result": '+1'},
        {"call": "IMAGINARY('-j')", "result": '-1'},
        {"call": "IMAGINARY('1i')", "result": '1'},
        {"call": "IMAGINARY('+1i')", "result": '+1'},
        {"call": "IMAGINARY('-1i')", "result": '-1'},
        {"call": "IMAGINARY('1j')", "result": '1'},
        {"call": "IMAGINARY('+1j')", "result": '+1'},
        {"call": "IMAGINARY('-1j')", "result": '-1'},
        {"call": "IMAGINARY('4i')", "result": '4'},
        {"call": "IMAGINARY('4j')", "result": '4'},
        {"call": "IMAGINARY('-4i')", "result": '-4'},
        {"call": "IMAGINARY('-4j')", "result": '-4'},
        {"call": "IMAGINARY('3+4.5i')", "result": 4.5},
        {"call": "IMAGINARY('4.5i')", "result": '4.5'},
        {"call": "IMAGINARY('3+4k')", "result": "#NUM!"},
        {"call": "IMAGINARY('3+4ki')", "result": "#NUM!"},
        {"call": "IMAGINARY('3i+4i')", "result": "#NUM!"},
        {"call": "IMAGINARY('4k')", "result": "#NUM!"},
        {"call": "IMAGINARY('4ki')", "result": "#NUM!"},
        {"call": "IMAGINARY('Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "IMARGUMENT", "tests": [
        {"call": "IMARGUMENT('3+4i')", "result": 0.9272952180016122},
        {"call": "IMARGUMENT('3-4i')", "result": -0.9272952180016122},
        {"call": "IMARGUMENT('-3+4i')", "result": 2.214297435588181},
        {"call": "IMARGUMENT('-3-4i')", "result": -2.214297435588181},
        {"call": "IMARGUMENT('0')", "result": "#DIV/0!"},
        {"call": "IMARGUMENT('3')", "result": 0},
        {"call": "IMARGUMENT('-3')", "result": -3.141592653589793},
        {"call": "IMARGUMENT('4i')", "result": 1.5707963267948966},
        {"call": "IMARGUMENT('-4i')", "result": -1.5707963267948966},
        {"call": "IMARGUMENT('Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "IMCONJUGATE", "tests": [
        {"call": "IMCONJUGATE('0')", "result": "0"},
        {"call": "IMCONJUGATE('3+4i')", "result": "3-4i"},
        {"call": "IMCONJUGATE('3-4i')", "result": "3+4i"},
        {"call": "IMCONJUGATE('3+4j')", "result": "3-4j"},
        {"call": "IMCONJUGATE('3-4j')", "result": "3+4j"},
        {"call": "IMCONJUGATE('-3+4i')", "result": "-3-4i"},
        {"call": "IMCONJUGATE('-3-4i')", "result": "-3+4i"},
        {"call": "IMCONJUGATE('3+4j')", "result": "3-4j"},
        {"call": "IMCONJUGATE('3-4j')", "result": "3+4j"},
        {"call": "IMCONJUGATE('3')", "result": "3"},
        {"call": "IMCONJUGATE('-3')", "result": "-3"},
        {"call": "IMCONJUGATE('4i')", "result": "-4i"},
        {"call": "IMCONJUGATE('-4i')", "result": "4i"},
        {"call": "IMCONJUGATE('4j')", "result": "-4j"},
        {"call": "IMCONJUGATE('-4j')", "result": "4j"},
        {"call": "IMCONJUGATE('Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "IMCOS", "tests": [
        {"call": "IMCOS('1+i')", "result": "0.8337300251311491-0.9888977057628651i"},
        {"call": "IMCOS(true)", "result": "#VALUE!"},
        {"call": "IMCOS(false)", "result": "#VALUE!"},
        {"call": "IMCOS('Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "IMCOSH", "tests": [
        {"call": "IMCOSH('1+i')", "result": "0.8337300251311491+0.9888977057628651i"},
        {"call": "IMCOSH(true)", "result": "#VALUE!"},
        {"call": "IMCOSH(false)", "result": "#VALUE!"},
        {"call": "IMCOSH('Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "IMCOT", "tests": [
        {"call": "IMCOT('1+i')", "result": "0.21762156185440265-0.8680141428959249i"},
        {"call": "IMCOT(true)", "result": "#VALUE!"},
        {"call": "IMCOT(false)", "result": "#VALUE!"},
        {"call": "IMCOT('Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "IMCSC", "tests": [
        {"call": "IMCSC('1+i')", "result": "0.6215180171704283-0.3039310016284264i"},
        {"call": "IMCSC(true)", "result": "#VALUE!"},
        {"call": "IMCSC(false)", "result": "#VALUE!"},
        {"call": "IMCSC('Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "IMCSCH", "tests": [
        {"call": "IMCSCH('1+i')", "result": "0.3039310016284264-0.6215180171704283i"},
        {"call": "IMCSCH(true)", "result": "#VALUE!"},
        {"call": "IMCSCH(false)", "result": "#VALUE!"},
        {"call": "IMCSCH('Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "IMDIV", "tests": [
        {"call": "IMDIV('1+2i', '3+4i')", "result": "0.44+0.08i"},
        {"call": "IMDIV('1+2i', '0')", "result": "#NUM!"},
        {"call": "IMDIV('Hello', 'World!')", "result": "#NUM!"}
      ]},
      {"function": "IMEXP", "tests": [
        {"call": "IMEXP('1+i')", "result": "1.4686939399158851+2.2873552871788423i"},
        {"call": "IMEXP('Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "IMLN", "tests": [
        {"call": "IMLN('1+i')", "result": "0.3465735902799727+0.7853981633974483i"},
        {"call": "IMLN('Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "IMLOG10", "tests": [
        {"call": "IMLOG10('1+i')", "result": "0.1505149978319906+0.3410940884604603i"},
        {"call": "IMLOG10('Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "IMLOG2", "tests": [
        {"call": "IMLOG2('1+i')", "result": "0.5000000000000001+1.1330900354567985i"},
        {"call": "IMLOG2('Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "IMPOWER", "tests": [
        {"call": "IMPOWER('1+i', 2)", "result": "1.2246063538223775e-16+2.0000000000000004i"},
        {"call": "IMPOWER('1+i', 'Hello World!')", "result": "#VALUE!"},
        {"call": "IMPOWER('Hello World!', 2)", "result": "#NUM!"}
      ]},
      {"function": "IMPRODUCT", "tests": [
        {"call": "IMPRODUCT('1+2i', '3+4i', '5+6i')", "result": "-85+20i"},
        {"call": "IMPRODUCT('1+2i', '3+4i', '0')", "result": 0},
        {"call": "IMPRODUCT('1+2i', '3+4i', 'Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "IMREAL", "tests": [
        {"call": "IMREAL('0+0i')", "result": 0},
        {"call": "IMREAL('2+i')", "result": 2},
        {"call": "IMREAL('2+1i')", "result": 2},
        {"call": "IMREAL('2-i')", "result": 2},
        {"call": "IMREAL('2-1i')", "result": 2},
        {"call": "IMREAL('2+j')", "result": 2},
        {"call": "IMREAL('2+1j')", "result": 2},
        {"call": "IMREAL('2-j')", "result": 2},
        {"call": "IMREAL('2-1j')", "result": 2},
        {"call": "IMREAL('3+4i')", "result": 3},
        {"call": "IMREAL('3+4j')", "result": 3},
        {"call": "IMREAL('3 + 4i')", "result": 3},
        {"call": "IMREAL('3-4i')", "result": 3},
        {"call": "IMREAL('3 - 4i')", "result": 3},
        {"call": "IMREAL('+3+4i')", "result": 3},
        {"call": "IMREAL('+3-4i')", "result": 3},
        {"call": "IMREAL('-3+4i')", "result": -3},
        {"call": "IMREAL('-3-4i')", "result": -3},
        {"call": "IMREAL('0')", "result": 0},
        {"call": "IMREAL('3')", "result": '3'},
        {"call": "IMREAL('-3')", "result": '-3'},
        {"call": "IMREAL('0i')", "result": 0},
        {"call": "IMREAL('i')", "result": 0},
        {"call": "IMREAL('+i')", "result": 0},
        {"call": "IMREAL('-i')", "result": 0},
        {"call": "IMREAL('j')", "result": 0},
        {"call": "IMREAL('+j')", "result": 0},
        {"call": "IMREAL('-j')", "result": 0},
        {"call": "IMREAL('1i')", "result": 0},
        {"call": "IMREAL('+1i')", "result": 0},
        {"call": "IMREAL('-1i')", "result": 0},
        {"call": "IMREAL('1j')", "result": 0},
        {"call": "IMREAL('+1j')", "result": 0},
        {"call": "IMREAL('-1j')", "result": 0},
        {"call": "IMREAL('4i')", "result": 0},
        {"call": "IMREAL('4j')", "result": 0},
        {"call": "IMREAL('-4i')", "result": 0},
        {"call": "IMREAL('-4j')", "result": 0},
        {"call": "IMREAL('3.5+4i')", "result": 3.5},
        {"call": "IMREAL('3.5')", "result": '3.5'},
        {"call": "IMREAL('3+2k')", "result": "#NUM!"},
        {"call": "IMREAL('3+4ki')", "result": "#NUM!"},
        {"call": "IMREAL('3i+4i')", "result": "#NUM!"},
        {"call": "IMREAL('4k')", "result": "#NUM!"},
        {"call": "IMREAL('4ki')", "result": "#NUM!"},
        {"call": "IMREAL('Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "IMSEC", "tests": [
        {"call": "IMSEC('1+i')", "result": "0.4983370305551868+0.591083841721045i"},
        {"call": "IMSEC(true)", "result": "#VALUE!"},
        {"call": "IMSEC(false)", "result": "#VALUE!"},
        {"call": "IMSEC('Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "IMSECH", "tests": [
        {"call": "IMSECH('1+i')", "result": "0.4983370305551868-0.591083841721045i"},
        {"call": "IMSECH(true)", "result": "#VALUE!"},
        {"call": "IMSECH(false)", "result": "#VALUE!"},
        {"call": "IMSECH('Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "IMSIN", "tests": [
        {"call": "IMSIN('1+i')", "result": "1.2984575814159773+0.6349639147847361i"},
        {"call": "IMSIN(true)", "result": "#VALUE!"},
        {"call": "IMSIN(false)", "result": "#VALUE!"},
        {"call": "IMSIN('Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "IMSINH", "tests": [
        {"call": "IMSINH('1+i')", "result": "0.6349639147847361+1.2984575814159773i"},
        {"call": "IMSINH(true)", "result": "#VALUE!"},
        {"call": "IMSINH(false)", "result": "#VALUE!"},
        {"call": "IMSINH('Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "IMSQRT", "tests": [
        {"call": "IMSQRT('1+i')", "result": "1.0986841134678098+0.45508986056222733i"},
        {"call": "IMSQRT('Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "IMSUB", "tests": [
        {"call": "IMSUB('3+4i', '1+2i')", "result": "2+2i"},
        {"call": "IMSUB('Hello', 'World!')", "result": "#NUM!"}
      ]},
      {"function": "IMSUM", "tests": [
        {"call": "IMSUM('1+2i', '3+4i', '5+6i')", "result": "9+12i"},
        {"call": "IMSUM('1+2i', '3+4i', 'Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "IMTAN", "tests": [
        {"call": "IMTAN('1+i')", "result": "0.2717525853195117+1.0839233273386946i"},
        {"call": "IMTAN(true)", "result": "#VALUE!"},
        {"call": "IMTAN(false)", "result": "#VALUE!"},
        {"call": "IMTAN('Hello World!')", "result": "#NUM!"}
      ]},
      {"function": "IPMT", "tests": [
        {"call": "IPMT('0.1/12', 6, '2*12', 100000, 1000000, 0)", "result": 928.8235718400465},
        {"call": "IPMT('0.1/12', 6, '2*12', 100000, 1000000, 1)", "result": 921.1473439736042}
      ]},
      {"function": "IRR", "tests": [
        {"call": "IRR([-75000,12000,15000,18000,21000,24000])", "result": 0.05715142887178467},
        {"call": "IRR([-75000,12000,15000,18000,21000,24000], 0.1)", "result": 0.05715142887178467},
        {"call": "IRR([-75000,12000,15000,18000,21000,24000], 0.075)", "result": 0.05715142887178447},
        {"call": "IRR([-75000,12000,15000,18000,21000,24000], 0.05)", "result": 0.05715142887178453},
        {"call": "IRR([12000,15000,18000,21000,24000])", "result": "#NUM!"},
        {"call": "IRR([-12000,-15000,-18000,-21000,-24000])", "result": "#NUM!"},
      ]},
      {"function": "ISPMT", "tests": [
        {"call": "ISPMT('0.1/12', 6, '2*12', 100000)", "result": -625}
      ]},
      {"function": "HYPGEOMDIST", "tests": [
        {"call": "HYPGEOMDIST(1, 4, 8, 20, true)", "result": 0.46542827657378744},
        {"call": "HYPGEOMDIST(1, 4, 8, 20, false)", "result": 0.3632610939112487}
      ]},
      {"function": "MAX", "tests": [
        {"call": "MAX()", "result": 0},
        {"call": "MAX([0.1,0.2], [0.4,0.8], [true, false])", "result": 0.8},
        {"call": "MAX([0,0.1,0.2], [0.4,0.8,1], [true, false])", "result": 1}
      ]},
      {"function": "MAXA", "tests": [
        {"call": "MAXA()", "result": 0},
        {"call": "MAXA([0.1,0.2], [0.4,0.8], [true, false])", "result": 1}
      ]},
      {"function": "MDETERM", "tests": [
        {"call": "MDETERM([[1]])", "result": 1},
        {"call": "MDETERM([[1,2],[3,4]])", "result": -2},
        {"call": "MDETERM([[1,0,0],[0,1,0],[0,0,1]])", "result": 1}
      ]},
      {"function": "MEDIAN", "tests": [
        {"call": "MEDIAN([1,2,3,4,5])", "result": 3},
        {"call": "MEDIAN([1,2,3,4,5,6])", "result": 3.5}
      ]},
      {"function": "MIN", "tests": [
        {"call": "MIN()", "result": 0},
        {"call": "MIN([0.1,0.2], [0.4,0.8], [true, false])", "result": 0.1},
        {"call": "MIN([0,0.1,0.2], [0.4,0.8,1], [true, false])", "result": 0}
      ]},
      {"function": "MINA", "tests": [
        {"call": "MINA()", "result": 0},
        {"call": "MINA([0.1,0.2], [0.4,0.8], [true, false])", "result": 0}
      ]},
      {"function": "MIRR", "tests": [
        {"call": "MIRR([-75000,12000,15000,18000,21000,24000], 0.1, 0.12)", "result": 0.07971710360838036},
      ]},
      {"function": "NOMINAL", "tests": [
        {"call": "NOMINAL(0.1, 4)", "result": 0.09645475633778045},
        {"call": "NOMINAL(0.1, 4.5)", "result": 0.09645475633778045},
        {"call": "NOMINAL('Hello', 4)", "result": "#VALUE!"},
        {"call": "NOMINAL(0.1, 'World')", "result": "#VALUE!"},
        {"call": "NOMINAL(-0.1, 4)", "result": "#NUM!"},
        {"call": "NOMINAL(0.1, 0.5)", "result": "#NUM!"},
      ]},
      {"function": "NORMDIST", "tests": [
        {"call": "NORMDIST(1, 0, 1, false)", "result": 0.24197072451914337},
        {"call": "NORMDIST(1, 0, 1, true)", "result": 0.8413447460685429},
        {"call": "NORMDIST('Hello World!', 0, 1, false)", "result": "#VALUE!"},
        {"call": "NORMDIST(0, 'Hello World!', 1, false)", "result": "#VALUE!"},
        {"call": "NORMDIST(0, 0, 'Hello World!', false)", "result": "#VALUE!"},
        {"call": "NORMDIST(0, 0, -1, false)", "result": "#NUM!"}
      ]},
      {"function": "NPER", "tests": [
        {"call": "NPER('0.1/12', -100, -1000, 10000, 0)", "result": 63.39385422740764},
        {"call": "NPER('0.1/12', -100, -1000, 10000, 1)", "result": 63.016966422019685},
        {"call": "NPER('0.1/12', -100, -1000, 10000)", "result": 63.39385422740764},
        {"call": "NPER('0.1/12', -100, -1000)", "result": -9.645090919837394}
      ]},
      {"function": "NPV", "tests": [
        {"call": "NPV(0.1, -10000, 2000, 4000, 8000)", "result": 1031.3503176012546},
        {"call": "NPV(0.1, [-10000,2000,4000,8000])", "result": 1031.3503176012546},
        {"call": "NPV(0.1, [-75000])", "result": -68181.81818181818},
        {"call": "NPV(0.12, [12000,15000,18000,21000,24000])", "result": 62448.362521940246}
      ]},
      {"function": "OCT2BIN", "tests": [
        {"call": "OCT2BIN('52')", "result": "101010"},
        {"call": "OCT2BIN('7777777000')", "result": "1000000000"},
        {"call": "OCT2BIN('7777777001')", "result": "1000000001"},
        {"call": "OCT2BIN('7777777777')", "result": "1111111111"},
        {"call": "OCT2BIN(0)", "result": "0"},
        {"call": "OCT2BIN(1)", "result": "1"},
        {"call": "OCT2BIN('776')", "result": "111111110"},
        {"call": "OCT2BIN('777')", "result": "111111111"},
        {"call": "OCT2BIN('52', 6)", "result": "101010"},
        {"call": "OCT2BIN('52', 8)", "result": "00101010"},
        {"call": "OCT2BIN('Hello World!')", "result": "#NUM!"},
        {"call": "OCT2BIN('7777770000')", "result": "#NUM!"},
        {"call": "OCT2BIN('1000')", "result": "#NUM!"},
        {"call": "OCT2BIN('52', 5)", "result": "#NUM!"},
        {"call": "OCT2BIN('52', -8)", "result": "#NUM!"},
        {"call": "OCT2BIN('52', 'Hello World!')", "result": "#VALUE!"}
      ]},
      {"function": "OCT2DEC", "tests": [
        {"call": "OCT2DEC('52')", "result": 42},
        {"call": "OCT2DEC('4000000000')", "result": -536870912},
        {"call": "OCT2DEC('7777777777')", "result": -1},
        {"call": "OCT2DEC(0)", "result": 0},
        {"call": "OCT2DEC(1)", "result": 1},
        {"call": "OCT2DEC('3777777776')", "result": 536870910},
        {"call": "OCT2DEC('3777777777')", "result": 536870911}
      ]},
      {"function": "OCT2HEX", "tests": [
        {"call": "OCT2HEX('52')", "result": "2a"},
        {"call": "OCT2HEX('4000000000')", "result": "ffe0000000"},
        {"call": "OCT2HEX('4000000001')", "result": "ffe0000001"},
        {"call": "OCT2HEX('7777777777')", "result": "ffffffffff"},
        {"call": "OCT2HEX(0)", "result": "0"},
        {"call": "OCT2HEX(1)", "result": "1"},
        {"call": "OCT2HEX('3777777776')", "result": "1ffffffe"},
        {"call": "OCT2HEX('3777777777')", "result": "1fffffff"},
        {"call": "OCT2HEX('52', 2)", "result": "2a"},
        {"call": "OCT2HEX('52', 4)", "result": "002a"},
        {"call": "OCT2HEX('Hello World!')", "result": "#NUM!"},
        {"call": "OCT2HEX('52', 1)", "result": "#NUM!"},
        {"call": "OCT2HEX('52', -4)", "result": "#NUM!"},
        {"call": "OCT2HEX('52', 'Hello World!')", "result": "#VALUE!"}
      ]},
      {"function": "PDURATION", "tests": [
        {"call": "PDURATION(0.1, 1000, 2000)", "result": 7.272540897341714},
        {"call": "PDURATION('Hello World!', 1000, 2000)", "result": "#VALUE!"},
        {"call": "PDURATION(0.1, 'Hello World!', 2000)", "result": "#VALUE!"},
        {"call": "PDURATION(0.1, 1000, 'Hello World!')", "result": "#VALUE!"},
        {"call": "PDURATION(0, 1000, 2000)", "result": "#NUM!"},
        {"call": "PDURATION(-0.1, 1000, 2000)", "result": "#NUM!"},
      ]},
      {"function": "PERCENTILEEXC", "tests": [
        {"call": "PERCENTILEEXC([1,2,3,4], 0)", "result": "#NUM!"},
        {"call": "PERCENTILEEXC([1,2,3,4], 0.1)", "result": "#NUM!"},
        {"call": "PERCENTILEEXC([1,2,3,4], 0.2)", "result": 1},
        {"call": "PERCENTILEEXC([1,2,3,4], 0.25)", "result": 1.25},
        {"call": "PERCENTILEEXC([1,2,3,4], 0.3)", "result": 1.5},
        {"call": "PERCENTILEEXC([1,2,3,4], 0.4)", "result": 2},
        {"call": "PERCENTILEEXC([1,2,3,4], 0.5)", "result": 2.5},
        {"call": "PERCENTILEEXC([1,2,3,4], 0.6)", "result": 3},
        {"call": "PERCENTILEEXC([1,2,3,4], 0.7)", "result": 3.5},
        {"call": "PERCENTILEEXC([1,2,3,4], 0.75)", "result": 3.75},
        {"call": "PERCENTILEEXC([1,2,3,4], 0.8)", "result": 4},
        {"call": "PERCENTILEEXC([1,2,3,4], 0.9)", "result": "#NUM!"},
        {"call": "PERCENTILEEXC([1,2,3,4], 1)", "result": "#NUM!"}
      ]},
      {"function": "PERCENTILEINC", "tests": [
        {"call": "PERCENTILEINC([1,2,3,4], 0)", "result": 1},
        {"call": "PERCENTILEINC([1,2,3,4], 0.1)", "result": 1.3},
        {"call": "PERCENTILEINC([1,2,3,4], 0.2)", "result": 1.6},
        {"call": "PERCENTILEINC([1,2,3,4], 0.25)", "result": 1.75},
        {"call": "PERCENTILEINC([1,2,3,4], 0.3)", "result": 1.9},
        {"call": "PERCENTILEINC([1,2,3,4], 0.4)", "result": 2.2},
        {"call": "PERCENTILEINC([1,2,3,4], 0.5)", "result": 2.5},
        {"call": "PERCENTILEINC([1,2,3,4], 0.6)", "result": 2.8},
        {"call": "PERCENTILEINC([1,2,3,4], 0.7)", "result": 3.1},
        {"call": "PERCENTILEINC([1,2,3,4], 0.75)", "result": 3.25},
        {"call": "PERCENTILEINC([1,2,3,4], 0.8)", "result": 3.4},
        {"call": "PERCENTILEINC([1,2,3,4], 0.9)", "result": 3.7},
        {"call": "PERCENTILEINC([1,2,3,4], 1)", "result": 4}
      ]},
      {"function": "PERCENTRANKEXC", "tests": [
        {"call": "PERCENTRANKEXC([1,2,3,4], 1)", "result": 0.2},
        {"call": "PERCENTRANKEXC([1,2,3,4], 2)", "result": 0.4},
        {"call": "PERCENTRANKEXC([1,2,3,4], 3)", "result": 0.6},
        {"call": "PERCENTRANKEXC([1,2,3,4], 4)", "result": 0.8},
        {"call": "PERCENTRANKEXC([1,2,3,4], 1.25)", "result": 0.25},
        {"call": "PERCENTRANKEXC([1,2,3,4], 2.5)", "result": 0.5},
        {"call": "PERCENTRANKEXC([1,2,3,4], 3.75)", "result": 0.75},
        {"call": "PERCENTRANKEXC([1,2,3,4], 1, 2)", "result": 0.2},
        {"call": "PERCENTRANKEXC([1,2,3,4], 2, 2)", "result": 0.4},
        {"call": "PERCENTRANKEXC([1,2,3,4], 3, 2)", "result": 0.6},
        {"call": "PERCENTRANKEXC([1,2,3,4], 4, 2)", "result": 0.8}
      ]},
      {"function": "PERCENTRANKINC", "tests": [
        {"call": "PERCENTRANKINC([1,2,3,4], 1)", "result": 0},
        {"call": "PERCENTRANKINC([1,2,3,4], 2)", "result": 0.333},
        {"call": "PERCENTRANKINC([1,2,3,4], 3)", "result": 0.666},
        {"call": "PERCENTRANKINC([1,2,3,4], 4)", "result": 1},
        {"call": "PERCENTRANKINC([1,2,3,4], 1.25)", "result": 0.083},
        {"call": "PERCENTRANKINC([1,2,3,4], 2.5)", "result": 0.5},
        {"call": "PERCENTRANKINC([1,2,3,4], 3.75)", "result": 0.916},
        {"call": "PERCENTRANKINC([1,2,3,4], 1, 2)", "result": 0},
        {"call": "PERCENTRANKINC([1,2,3,4], 2, 2)", "result": 0.33},
        {"call": "PERCENTRANKINC([1,2,3,4], 3, 2)", "result": 0.66},
        {"call": "PERCENTRANKINC([1,2,3,4], 4, 2)", "result": 1}
      ]},
      {"function": "PMT", "tests": [
        {"call": "PMT('0.1/12', '2*12', 100000, 1000000, 0)", "result": -42426.08563793503},
        {"call": "PMT('0.1/12', '2*12', 100000, 1000000, 1)", "result": -42075.45683100995},
        {"call": "PMT('0.1/12', '2*12', 100000, 1000000)", "result": -42426.08563793503},
        {"call": "PMT('0.1/12', '2*12', null, 1000000)", "result": -37811.59300418336},
        {"call": "PMT('0.1/12', '2*12', 100000, null)", "result": -4614.49263375167}
      ]},
      {"function": "PPMT", "tests": [
        {"call": "PPMT('0.1/12', 6, '2*12', 100000, 1000000, 0)", "result": -43354.909209775076},
        {"call": "PPMT('0.1/12', 6, '2*12', 100000, 1000000, 1)", "result": -42996.60417498356},
        {"call": "PPMT('0.1/12', 6, '2*12', 100000, 1000000)", "result": -43354.909209775076},
        {"call": "PPMT('0.1/12', 6, '2*12', null, 1000000)", "result": -39413.55382706825},
        {"call": "PPMT('0.1/12', 6, '2*12', 100000, null)", "result": -3941.355382706826}
      ]},
      {"function": "PROB", "tests": [
        {"call": "PROB([1,2,3,4], [0.1,0.3,0.4,0.2])", "result": 0},
        {"call": "PROB([1,2,3,4], [0.1,0.3,0.4,0.2], 0)", "result": 0},
        {"call": "PROB([1,2,3,4], [0.1,0.3,0.4,0.2], 1)", "result": 0.1},
        {"call": "PROB([1,2,3,4], [0.1,0.3,0.4,0.2], 2)", "result": 0.3},
        {"call": "PROB([1,2,3,4], [0.1,0.3,0.4,0.2], 3)", "result": 0.4},
        {"call": "PROB([1,2,3,4], [0.1,0.3,0.4,0.2], 4)", "result": 0.2},
        {"call": "PROB([1,2,3,4], [0.1,0.3,0.4,0.2], 5)", "result": 0},
        {"call": "PROB([1,2,3,4], [0.1,0.3,0.4,0.2], 0, 1)", "result": 0.1},
        {"call": "PROB([1,2,3,4], [0.1,0.3,0.4,0.2], 0, 2)", "result": 0.4},
        {"call": "PROB([1,2,3,4], [0.1,0.3,0.4,0.2], 0, 3)", "result": 0.8},
        {"call": "PROB([1,2,3,4], [0.1,0.3,0.4,0.2], 0, 4)", "result": 1},
        {"call": "PROB([1,2,3,4], [0.1,0.3,0.4,0.2], 0, 5)", "result": 1},
        {"call": "PROB([1,2,3,4], [0.1,0.3,0.4,0.2], 0.5, 1.5)", "result": 0.1},
        {"call": "PROB([1,2,3,4], [0.1,0.3,0.4,0.2], 0.5, 2.5)", "result": 0.4},
        {"call": "PROB([1,2,3,4], [0.1,0.3,0.4,0.2], 0.5, 3.5)", "result": 0.8},
        {"call": "PROB([1,2,3,4], [0.1,0.3,0.4,0.2], 0.5, 4.5)", "result": 1}
      ]},
      {"function": "PV", "tests": [
        {"call": "PV('0.1/12', '2*12', 1000, 10000, 0)", "result": -29864.950264779152},
        {"call": "PV('0.1/12', '2*12', 1000, 10000, 1)", "result": -30045.54072173169},
      ]},
      {"function": "QUARTILEEXC", "tests": [
        {"call": "QUARTILEEXC([1,2,3,4], 1)", "result": 1.25},
        {"call": "QUARTILEEXC([1,2,3,4], 2)", "result": 2.5},
        {"call": "QUARTILEEXC([1,2,3,4], 3)", "result": 3.75},
      ]},
      {"function": "RANKAVG", "tests": [
        {"call": "RANKAVG(4, [2,4,4,8,8,16], false)", "result": 4.5},
        {"call": "RANKAVG(4, [2,4,4,8,8,16], true)", "result": 2.5},
        {"call": "RANKAVG(16, [2,4,4,8,8,16], false)", "result": 1},
        {"call": "RANKAVG(16, [2,4,4,8,8,16], true)", "result": 6}
      ]},
      {"function": "RANKEQ", "tests": [
        {"call": "RANKEQ(4, [2,4,4,8,8,16], false)", "result": 4},
        {"call": "RANKEQ(4, [2,4,4,8,8,16], true)", "result": 2},
        {"call": "RANKEQ(16, [2,4,4,8,8,16], false)", "result": 1},
        {"call": "RANKEQ(16, [2,4,4,8,8,16], true)", "result": 6}
      ]},
      {"function": "RATE", "tests": [
        {"call": "RATE('2*12', -1000, -10000, 100000)", "result": 0.06517891177181546},
        {"call": "RATE('2*12', -1000, -10000, 100000, 0, 0.1)", "result": 0.06517891177181533},
        {"call": "RATE('2*12', -1000, -10000, 100000, 0, 0.75)", "result": 0.0651789117718154},
        {"call": "RATE('2*12', -1000, -10000, 100000, 0, 0.065)", "result": 0.06517891177181524},
        {"call": "RATE('2*12', -1000, -10000, 100000, 1, 0.1)", "result": 0.0632395800018064}
      ]},
      {"function": "YEARFRAC", "tests": [
        {"call": "YEARFRAC('01/01/2011', '07/01/2014')", "result": 3.5},
        {"call": "YEARFRAC('01/01/2011', '07/01/2014', 0)", "result": 3.5},
        {"call": "YEARFRAC('01/01/2011', '07/01/2014', 1)", "result": 3.4962354551676933},
        {"call": "YEARFRAC('01/01/2011', '07/01/2014', 2)", "result": 3.547222222222222},
        {"call": "YEARFRAC('01/01/2011', '07/01/2014', 3)", "result": 3.4986301369863013},
        {"call": "YEARFRAC('01/01/2011', '07/01/2014', 4)", "result": 3.5},
        {"call": "YEARFRAC('07/01/2014', '01/01/2011', 0)", "result": 3.5},
        {"call": "YEARFRAC('07/01/2014', '01/01/2011', 1)", "result": 3.4962354551676933},
        {"call": "YEARFRAC('07/01/2014', '01/01/2011', 2)", "result": 3.547222222222222},
        {"call": "YEARFRAC('07/01/2014', '01/01/2011', 3)", "result": 3.4986301369863013},
        {"call": "YEARFRAC('07/01/2014', '01/01/2011', 4)", "result": 3.5},
        {"call": "YEARFRAC('01/01/2011', '01/01/2011', 0)", "result": 0},
        {"call": "YEARFRAC('01/01/2011', '01/01/2011', 1)", "result": 0},
        {"call": "YEARFRAC('01/01/2011', '01/01/2011', 2)", "result": 0},
        {"call": "YEARFRAC('01/01/2011', '01/01/2011', 3)", "result": 0},
        {"call": "YEARFRAC('01/01/2011', '01/01/2011', 4)", "result": 0},
        {"call": "YEARFRAC('Hello World!', '07/01/2014')", "result": "#VALUE!"},
        {"call": "YEARFRAC('01/01/2011', 'Hello World!')", "result": "#VALUE!"},
        {"call": "YEARFRAC('01/01/2011', '07/01/2014', 5)", "result": "#NUM!"}
      ]},
      {"function": "HTML2TEXT", "tests": [
        {"call": "HTML2TEXT()", "result": ''},
        {"call": "HTML2TEXT('')", "result": ''},
        {"call": "HTML2TEXT('<i>Hello</i>')", "result": 'Hello'},
        {"call": "HTML2TEXT(['<i>Hello</i>', '<b>Jim</b>'])", "result": 'Hello\\nJim'}
      ]},
      {"function": "TEXT", "tests": [
        {"call": "TEXT()", "result": ''},
        {"call": "TEXT('')", "result": ''},
        {"call": "TEXT('Hello Baby')", "result": 'Hello Baby'},
        {"call": "TEXT({a: 1, b: 2})", "result": '{\\"a\\":1,\\"b\\":2}'},
        {"call": "TEXT({a: 'hello', b: 'goodbye'})", "result": '{\\"a\\":\\"hello\\",\\"b\\":\\"goodbye\\"}'}
      ]},
      {"function": "HUMANIZE", "tests": [
        {"call": "HUMANIZE('')", "result": ''},
        {"call": "HUMANIZE(new Date(2012, 11, 20, 7, 7, 7))", "result": 'Thursday, December 20th 2012, 7:07:07'},
        {"call": "HUMANIZE(new Date(2012, 11, 20, 7, 7))", "result": 'Thursday, December 20th 2012, 7:07:00'},
        {"call": "HUMANIZE(new Date(2012, 11, 20))", "result": 'Thursday, December 20th 2012'},
        {"call": "HUMANIZE('A RANDOM STRING')", "result": 'A RANDOM STRING'},
        {"call": "HUMANIZE(1 + 2)", "result": 3}
      ]},
      {"function": "DATEVALUE", "tests": [
        {"call": "DATEVALUE('20-DEC-1963')", "result": 23365},
        {"call": "DATEVALUE('2012/03/01')", "result": 40969},
      ]},
      {"function": "ROUND", "tests": [
        {"call": "ROUND(127.120005, 2)", "result": 127.12},
        {"call": "ROUND(127.120005, 3)", "result": 127.120},
        {"call": "ROUND(127.120005, 0)", "result": 127},
        {"call": "ROUND(127.160005, 1)", "result": 127.2},
      ]},
      {"function": "LOWER", "tests": [
        {"call": "LOWER('abcd')", "result": 'abcd'},
        {"call": "LOWER('ABcd')", "result": 'abcd'},
        {"call": "LOWER('ABCD')", "result": 'abcd'},
        {"call": "LOWER('')", "result": ''},
        {"call": "LOWER()", "result": undefined},
        {"call": "LOWER(undefined)", "result": undefined},
      ]},
      {"function": "SUM", "tests": [
        {"call": "SUM(1, 2, 3)", "result": 6},
        {"call": "SUM([1, 2, 3])", "result": 6},
        {"call": "SUM([1, 2, 3], 1, 2)", "result": 9},
        {"call": "SUM([1, 2, 3], [1, 2])", "result": 9},
        {"call": "SUM([[1,1], [2,2], [3,3]])", "result": 12},
        {"call": "SUM([[1,1], [2,2], [3,3]], 1, 2)", "result": 15},
        {"call": "SUM([[1,1], [2,2], [3,3]], 1, 2)", "result": 15},
        {"call": "SUM([[1,1], [2,2], [3,3]], [[1,1], [2,2], [3,3]])", "result": 24},
      ]},
      {"function": "SUBSTITUTE", "tests": [
        {"call": "SUBSTITUTE('Jim Alateras', 'im', 'ames')", "result": 'James Alateras'},
        {"call": "SUBSTITUTE('Jim Alateras', '', 'ames')", "result": 'Jim Alateras'},
        {"call": "SUBSTITUTE('Jim Alateras', undefined, 'ames')", "result": 'Jim Alateras'},
        {"call": "SUBSTITUTE('', 'im', 'ames')", "result": ''},
        {"call": "SUBSTITUTE(undefined, 'im', 'ames')", "result": undefined}
      ]},
      {"function": "MD5", "tests": [
        {"call": "MD5('jim@sutoiku.com')", "result": '3d508d960d5f63a9d9384baf6b4f67c3'},
        {"call": "MD5('ismael@sutoiku.com')", "result": 'a33dab7034e1fced4adb648f46eabe5d'}
      ]},
      {"function": "NUMERAL", "tests": [
        {"call": "NUMERAL(10000, '0,0.0000')", "result": '10,000.0000'},
        {"call": "NUMERAL(10000.23, '0,0')", "result": '10,000'},
        {"call": "NUMERAL(1000.234, '$0,0.00')", "result": '$1,000.23'},
        {"call": "NUMERAL(100, '0b')", "result": '100B'},
        {"call": "NUMERAL(0.974878234, '0.000%')", "result": '97.488%'},
      ]},
      {"function": "FROMNOW", "tests": [
        {"call": "FROMNOW(moment().subtract('years', 50), true)", "result": '50 years'},
        {"call": "FROMNOW(moment().subtract('years', 50), false)", "result": '50 years ago'},
        {"call": "FROMNOW()", "result": 'a few seconds ago'}
      ]},
      {"function": "REGEXEXTRACT", "tests": [
        {"call": "REGEXEXTRACT('(Content) between brackets', '\(([A-Za-z]+)\)')", "result": 'Content'},
        {"call": "REGEXEXTRACT('The price today is $826.25', '[0-9]+\.[0-9]+[0-9]+')", "result": '826.25'},
        {"call": "REGEXEXTRACT('Google Doc 101', '[0-9]+')", "result": '101'}
      ]},
      {"function": "FINV", "tests": [
        {"call": "FINV(0.05, 8, 22)", "result": 2.3965032837657665},
        {"call": "FINV(0.95, 10, 22)", "result": 0.36309874840416073},
        {"call": "FINV(0.95, 10, 22)", "result": 0.36309874840416073},
        {"call": "FINV(1, 10, 22)", "result": 0},
        {"call": "FINV(-0.1, 10, 22)", "result": "#NUM!"},
        {"call": "FINV(1.1, 10, 22)", "result": "#NUM!"}
      ]},
      {"function": "POWER", "tests": [
        {"call": "POWER(1, 2)", "result": 2},
        {"call": "POWER(-1, 0.5)", "result": "#NUM!"},
      ]}
    ];

    scope.FORMULA_TESTS = FORMULA_TESTS;
    return FORMULA_TESTS;
})(this);