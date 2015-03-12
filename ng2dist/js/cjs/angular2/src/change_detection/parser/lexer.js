"use strict";
Object.defineProperties(module.exports, {
  TOKEN_TYPE_CHARACTER: {get: function() {
      return TOKEN_TYPE_CHARACTER;
    }},
  TOKEN_TYPE_IDENTIFIER: {get: function() {
      return TOKEN_TYPE_IDENTIFIER;
    }},
  TOKEN_TYPE_KEYWORD: {get: function() {
      return TOKEN_TYPE_KEYWORD;
    }},
  TOKEN_TYPE_STRING: {get: function() {
      return TOKEN_TYPE_STRING;
    }},
  TOKEN_TYPE_OPERATOR: {get: function() {
      return TOKEN_TYPE_OPERATOR;
    }},
  TOKEN_TYPE_NUMBER: {get: function() {
      return TOKEN_TYPE_NUMBER;
    }},
  Lexer: {get: function() {
      return Lexer;
    }},
  Token: {get: function() {
      return Token;
    }},
  EOF: {get: function() {
      return EOF;
    }},
  $EOF: {get: function() {
      return $EOF;
    }},
  $TAB: {get: function() {
      return $TAB;
    }},
  $LF: {get: function() {
      return $LF;
    }},
  $VTAB: {get: function() {
      return $VTAB;
    }},
  $FF: {get: function() {
      return $FF;
    }},
  $CR: {get: function() {
      return $CR;
    }},
  $SPACE: {get: function() {
      return $SPACE;
    }},
  $BANG: {get: function() {
      return $BANG;
    }},
  $DQ: {get: function() {
      return $DQ;
    }},
  $HASH: {get: function() {
      return $HASH;
    }},
  $$: {get: function() {
      return $$;
    }},
  $PERCENT: {get: function() {
      return $PERCENT;
    }},
  $AMPERSAND: {get: function() {
      return $AMPERSAND;
    }},
  $SQ: {get: function() {
      return $SQ;
    }},
  $LPAREN: {get: function() {
      return $LPAREN;
    }},
  $RPAREN: {get: function() {
      return $RPAREN;
    }},
  $STAR: {get: function() {
      return $STAR;
    }},
  $PLUS: {get: function() {
      return $PLUS;
    }},
  $COMMA: {get: function() {
      return $COMMA;
    }},
  $MINUS: {get: function() {
      return $MINUS;
    }},
  $PERIOD: {get: function() {
      return $PERIOD;
    }},
  $SLASH: {get: function() {
      return $SLASH;
    }},
  $COLON: {get: function() {
      return $COLON;
    }},
  $SEMICOLON: {get: function() {
      return $SEMICOLON;
    }},
  $LT: {get: function() {
      return $LT;
    }},
  $EQ: {get: function() {
      return $EQ;
    }},
  $GT: {get: function() {
      return $GT;
    }},
  $QUESTION: {get: function() {
      return $QUESTION;
    }},
  $LBRACKET: {get: function() {
      return $LBRACKET;
    }},
  $BACKSLASH: {get: function() {
      return $BACKSLASH;
    }},
  $RBRACKET: {get: function() {
      return $RBRACKET;
    }},
  $LBRACE: {get: function() {
      return $LBRACE;
    }},
  $BAR: {get: function() {
      return $BAR;
    }},
  $RBRACE: {get: function() {
      return $RBRACE;
    }},
  ScannerError: {get: function() {
      return ScannerError;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/change_detection/parser/lexer";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    ListWrapper = $__1.ListWrapper,
    SetWrapper = $__1.SetWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    int = $__2.int,
    FIELD = $__2.FIELD,
    NumberWrapper = $__2.NumberWrapper,
    StringJoiner = $__2.StringJoiner,
    StringWrapper = $__2.StringWrapper;
var TOKEN_TYPE_CHARACTER = 1;
var TOKEN_TYPE_IDENTIFIER = 2;
var TOKEN_TYPE_KEYWORD = 3;
var TOKEN_TYPE_STRING = 4;
var TOKEN_TYPE_OPERATOR = 5;
var TOKEN_TYPE_NUMBER = 6;
var Lexer = function Lexer() {};
($traceurRuntime.createClass)(Lexer, {tokenize: function(text) {
    assert.argumentTypes(text, assert.type.string);
    var scanner = new _Scanner(text);
    var tokens = [];
    var token = scanner.scanToken();
    while (token != null) {
      ListWrapper.push(tokens, token);
      token = scanner.scanToken();
    }
    return assert.returnType((tokens), List);
  }}, {});
Object.defineProperty(Lexer.prototype.tokenize, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var Token = function Token(index, type, numValue, strValue) {
  assert.argumentTypes(index, int, type, int, numValue, assert.type.number, strValue, assert.type.string);
  this.index = index;
  this.type = type;
  this._numValue = numValue;
  this._strValue = strValue;
};
($traceurRuntime.createClass)(Token, {
  isCharacter: function(code) {
    assert.argumentTypes(code, int);
    return assert.returnType(((this.type == TOKEN_TYPE_CHARACTER && this._numValue == code)), assert.type.boolean);
  },
  isNumber: function() {
    return assert.returnType(((this.type == TOKEN_TYPE_NUMBER)), assert.type.boolean);
  },
  isString: function() {
    return assert.returnType(((this.type == TOKEN_TYPE_STRING)), assert.type.boolean);
  },
  isOperator: function(operater) {
    assert.argumentTypes(operater, assert.type.string);
    return assert.returnType(((this.type == TOKEN_TYPE_OPERATOR && this._strValue == operater)), assert.type.boolean);
  },
  isIdentifier: function() {
    return assert.returnType(((this.type == TOKEN_TYPE_IDENTIFIER)), assert.type.boolean);
  },
  isKeyword: function() {
    return assert.returnType(((this.type == TOKEN_TYPE_KEYWORD)), assert.type.boolean);
  },
  isKeywordVar: function() {
    return assert.returnType(((this.type == TOKEN_TYPE_KEYWORD && this._strValue == "var")), assert.type.boolean);
  },
  isKeywordNull: function() {
    return assert.returnType(((this.type == TOKEN_TYPE_KEYWORD && this._strValue == "null")), assert.type.boolean);
  },
  isKeywordUndefined: function() {
    return assert.returnType(((this.type == TOKEN_TYPE_KEYWORD && this._strValue == "undefined")), assert.type.boolean);
  },
  isKeywordTrue: function() {
    return assert.returnType(((this.type == TOKEN_TYPE_KEYWORD && this._strValue == "true")), assert.type.boolean);
  },
  isKeywordFalse: function() {
    return assert.returnType(((this.type == TOKEN_TYPE_KEYWORD && this._strValue == "false")), assert.type.boolean);
  },
  toNumber: function() {
    return assert.returnType(((this.type == TOKEN_TYPE_NUMBER) ? this._numValue : -1), assert.type.number);
  },
  toString: function() {
    var type = assert.type(this.type, int);
    if (type >= TOKEN_TYPE_CHARACTER && type <= TOKEN_TYPE_STRING) {
      return assert.returnType((this._strValue), assert.type.string);
    } else if (type == TOKEN_TYPE_NUMBER) {
      return assert.returnType((this._numValue.toString()), assert.type.string);
    } else {
      return assert.returnType((null), assert.type.string);
    }
  }
}, {});
Object.defineProperty(Token, "parameters", {get: function() {
    return [[int], [int], [assert.type.number], [assert.type.string]];
  }});
Object.defineProperty(Token.prototype.isCharacter, "parameters", {get: function() {
    return [[int]];
  }});
Object.defineProperty(Token.prototype.isOperator, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
function newCharacterToken(index, code) {
  assert.argumentTypes(index, int, code, int);
  return assert.returnType((new Token(index, TOKEN_TYPE_CHARACTER, code, StringWrapper.fromCharCode(code))), Token);
}
Object.defineProperty(newCharacterToken, "parameters", {get: function() {
    return [[int], [int]];
  }});
function newIdentifierToken(index, text) {
  assert.argumentTypes(index, int, text, assert.type.string);
  return assert.returnType((new Token(index, TOKEN_TYPE_IDENTIFIER, 0, text)), Token);
}
Object.defineProperty(newIdentifierToken, "parameters", {get: function() {
    return [[int], [assert.type.string]];
  }});
function newKeywordToken(index, text) {
  assert.argumentTypes(index, int, text, assert.type.string);
  return assert.returnType((new Token(index, TOKEN_TYPE_KEYWORD, 0, text)), Token);
}
Object.defineProperty(newKeywordToken, "parameters", {get: function() {
    return [[int], [assert.type.string]];
  }});
function newOperatorToken(index, text) {
  assert.argumentTypes(index, int, text, assert.type.string);
  return assert.returnType((new Token(index, TOKEN_TYPE_OPERATOR, 0, text)), Token);
}
Object.defineProperty(newOperatorToken, "parameters", {get: function() {
    return [[int], [assert.type.string]];
  }});
function newStringToken(index, text) {
  assert.argumentTypes(index, int, text, assert.type.string);
  return assert.returnType((new Token(index, TOKEN_TYPE_STRING, 0, text)), Token);
}
Object.defineProperty(newStringToken, "parameters", {get: function() {
    return [[int], [assert.type.string]];
  }});
function newNumberToken(index, n) {
  assert.argumentTypes(index, int, n, assert.type.number);
  return assert.returnType((new Token(index, TOKEN_TYPE_NUMBER, n, "")), Token);
}
Object.defineProperty(newNumberToken, "parameters", {get: function() {
    return [[int], [assert.type.number]];
  }});
var EOF = assert.type(new Token(-1, 0, 0, ""), Token);
var $EOF = 0;
var $TAB = 9;
var $LF = 10;
var $VTAB = 11;
var $FF = 12;
var $CR = 13;
var $SPACE = 32;
var $BANG = 33;
var $DQ = 34;
var $HASH = 35;
var $$ = 36;
var $PERCENT = 37;
var $AMPERSAND = 38;
var $SQ = 39;
var $LPAREN = 40;
var $RPAREN = 41;
var $STAR = 42;
var $PLUS = 43;
var $COMMA = 44;
var $MINUS = 45;
var $PERIOD = 46;
var $SLASH = 47;
var $COLON = 58;
var $SEMICOLON = 59;
var $LT = 60;
var $EQ = 61;
var $GT = 62;
var $QUESTION = 63;
var $0 = 48;
var $9 = 57;
var $A = 65,
    $B = 66,
    $C = 67,
    $D = 68,
    $E = 69,
    $F = 70,
    $G = 71,
    $H = 72,
    $I = 73,
    $J = 74,
    $K = 75,
    $L = 76,
    $M = 77,
    $N = 78,
    $O = 79,
    $P = 80,
    $Q = 81,
    $R = 82,
    $S = 83,
    $T = 84,
    $U = 85,
    $V = 86,
    $W = 87,
    $X = 88,
    $Y = 89,
    $Z = 90;
var $LBRACKET = 91;
var $BACKSLASH = 92;
var $RBRACKET = 93;
var $CARET = 94;
var $_ = 95;
var $a = 97,
    $b = 98,
    $c = 99,
    $d = 100,
    $e = 101,
    $f = 102,
    $g = 103,
    $h = 104,
    $i = 105,
    $j = 106,
    $k = 107,
    $l = 108,
    $m = 109,
    $n = 110,
    $o = 111,
    $p = 112,
    $q = 113,
    $r = 114,
    $s = 115,
    $t = 116,
    $u = 117,
    $v = 118,
    $w = 119,
    $x = 120,
    $y = 121,
    $z = 122;
var $LBRACE = 123;
var $BAR = 124;
var $RBRACE = 125;
var $TILDE = 126;
var $NBSP = 160;
var ScannerError = function ScannerError(message) {
  $traceurRuntime.superConstructor($ScannerError).call(this);
  this.message = message;
};
var $ScannerError = ScannerError;
($traceurRuntime.createClass)(ScannerError, {toString: function() {
    return this.message;
  }}, {}, Error);
var _Scanner = function _Scanner(input) {
  assert.argumentTypes(input, assert.type.string);
  this.input = input;
  this.length = input.length;
  this.peek = 0;
  this.index = -1;
  this.advance();
};
($traceurRuntime.createClass)(_Scanner, {
  advance: function() {
    this.peek = ++this.index >= this.length ? $EOF : StringWrapper.charCodeAt(this.input, this.index);
  },
  scanToken: function() {
    var input = this.input,
        length = this.length,
        peek = this.peek,
        index = this.index;
    while (peek <= $SPACE) {
      if (++index >= length) {
        peek = $EOF;
        break;
      } else {
        peek = StringWrapper.charCodeAt(input, index);
      }
    }
    this.peek = peek;
    this.index = index;
    if (index >= length) {
      return assert.returnType((null), Token);
    }
    if (isIdentifierStart(peek))
      return assert.returnType((this.scanIdentifier()), Token);
    if (isDigit(peek))
      return assert.returnType((this.scanNumber(index)), Token);
    var start = assert.type(index, int);
    switch (peek) {
      case $PERIOD:
        this.advance();
        return assert.returnType((isDigit(this.peek) ? this.scanNumber(start) : newCharacterToken(start, $PERIOD)), Token);
      case $LPAREN:
      case $RPAREN:
      case $LBRACE:
      case $RBRACE:
      case $LBRACKET:
      case $RBRACKET:
      case $COMMA:
      case $COLON:
      case $SEMICOLON:
        return assert.returnType((this.scanCharacter(start, peek)), Token);
      case $SQ:
      case $DQ:
        return assert.returnType((this.scanString()), Token);
      case $HASH:
        return assert.returnType((this.scanOperator(start, StringWrapper.fromCharCode(peek))), Token);
      case $PLUS:
      case $MINUS:
      case $STAR:
      case $SLASH:
      case $PERCENT:
      case $CARET:
      case $QUESTION:
        return assert.returnType((this.scanOperator(start, StringWrapper.fromCharCode(peek))), Token);
      case $LT:
      case $GT:
      case $BANG:
      case $EQ:
        return assert.returnType((this.scanComplexOperator(start, $EQ, StringWrapper.fromCharCode(peek), '=')), Token);
      case $AMPERSAND:
        return assert.returnType((this.scanComplexOperator(start, $AMPERSAND, '&', '&')), Token);
      case $BAR:
        return assert.returnType((this.scanComplexOperator(start, $BAR, '|', '|')), Token);
      case $TILDE:
        return assert.returnType((this.scanComplexOperator(start, $SLASH, '~', '/')), Token);
      case $NBSP:
        while (isWhitespace(this.peek))
          this.advance();
        return assert.returnType((this.scanToken()), Token);
    }
    this.error(("Unexpected character [" + StringWrapper.fromCharCode(peek) + "]"), 0);
    return assert.returnType((null), Token);
  },
  scanCharacter: function(start, code) {
    assert.argumentTypes(start, int, code, int);
    assert(this.peek == code);
    this.advance();
    return assert.returnType((newCharacterToken(start, code)), Token);
  },
  scanOperator: function(start, str) {
    assert.argumentTypes(start, int, str, assert.type.string);
    assert(this.peek == StringWrapper.charCodeAt(str, 0));
    assert(SetWrapper.has(OPERATORS, str));
    this.advance();
    return assert.returnType((newOperatorToken(start, str)), Token);
  },
  scanComplexOperator: function(start, code, one, two) {
    assert.argumentTypes(start, int, code, int, one, assert.type.string, two, assert.type.string);
    assert(this.peek == StringWrapper.charCodeAt(one, 0));
    this.advance();
    var str = assert.type(one, assert.type.string);
    if (this.peek == code) {
      this.advance();
      str += two;
    }
    assert(SetWrapper.has(OPERATORS, str));
    return assert.returnType((newOperatorToken(start, str)), Token);
  },
  scanIdentifier: function() {
    assert(isIdentifierStart(this.peek));
    var start = assert.type(this.index, int);
    this.advance();
    while (isIdentifierPart(this.peek))
      this.advance();
    var str = assert.type(this.input.substring(start, this.index), assert.type.string);
    if (SetWrapper.has(KEYWORDS, str)) {
      return assert.returnType((newKeywordToken(start, str)), Token);
    } else {
      return assert.returnType((newIdentifierToken(start, str)), Token);
    }
  },
  scanNumber: function(start) {
    assert.argumentTypes(start, int);
    assert(isDigit(this.peek));
    var simple = assert.type((this.index === start), assert.type.boolean);
    this.advance();
    while (true) {
      if (isDigit(this.peek)) {} else if (this.peek == $PERIOD) {
        simple = false;
      } else if (isExponentStart(this.peek)) {
        this.advance();
        if (isExponentSign(this.peek))
          this.advance();
        if (!isDigit(this.peek))
          this.error('Invalid exponent', -1);
        simple = false;
      } else {
        break;
      }
      this.advance();
    }
    var str = assert.type(this.input.substring(start, this.index), assert.type.string);
    var value = assert.type(simple ? NumberWrapper.parseIntAutoRadix(str) : NumberWrapper.parseFloat(str), assert.type.number);
    return assert.returnType((newNumberToken(start, value)), Token);
  },
  scanString: function() {
    assert(this.peek == $SQ || this.peek == $DQ);
    var start = assert.type(this.index, int);
    var quote = assert.type(this.peek, int);
    this.advance();
    var buffer;
    var marker = assert.type(this.index, int);
    var input = assert.type(this.input, assert.type.string);
    while (this.peek != quote) {
      if (this.peek == $BACKSLASH) {
        if (buffer == null)
          buffer = new StringJoiner();
        buffer.add(input.substring(marker, this.index));
        this.advance();
        var unescapedCode = void 0;
        if (this.peek == $u) {
          var hex = assert.type(input.substring(this.index + 1, this.index + 5), assert.type.string);
          try {
            unescapedCode = NumberWrapper.parseInt(hex, 16);
          } catch (e) {
            this.error(("Invalid unicode escape [\\u" + hex + "]"), 0);
          }
          for (var i = assert.type(0, int); i < 5; i++) {
            this.advance();
          }
        } else {
          unescapedCode = unescape(this.peek);
          this.advance();
        }
        buffer.add(StringWrapper.fromCharCode(unescapedCode));
        marker = this.index;
      } else if (this.peek == $EOF) {
        this.error('Unterminated quote', 0);
      } else {
        this.advance();
      }
    }
    var last = assert.type(input.substring(marker, this.index), assert.type.string);
    this.advance();
    var unescaped = assert.type(last, assert.type.string);
    if (buffer != null) {
      buffer.add(last);
      unescaped = buffer.toString();
    }
    return assert.returnType((newStringToken(start, unescaped)), Token);
  },
  error: function(message, offset) {
    assert.argumentTypes(message, assert.type.string, offset, int);
    var position = assert.type(this.index + offset, int);
    throw new ScannerError(("Lexer Error: " + message + " at column " + position + " in expression [" + this.input + "]"));
  }
}, {});
Object.defineProperty(_Scanner, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(_Scanner.prototype.scanCharacter, "parameters", {get: function() {
    return [[int], [int]];
  }});
Object.defineProperty(_Scanner.prototype.scanOperator, "parameters", {get: function() {
    return [[int], [assert.type.string]];
  }});
Object.defineProperty(_Scanner.prototype.scanComplexOperator, "parameters", {get: function() {
    return [[int], [int], [assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(_Scanner.prototype.scanNumber, "parameters", {get: function() {
    return [[int]];
  }});
Object.defineProperty(_Scanner.prototype.error, "parameters", {get: function() {
    return [[assert.type.string], [int]];
  }});
function isWhitespace(code) {
  assert.argumentTypes(code, int);
  return assert.returnType(((code >= $TAB && code <= $SPACE) || (code == $NBSP)), assert.type.boolean);
}
Object.defineProperty(isWhitespace, "parameters", {get: function() {
    return [[int]];
  }});
function isIdentifierStart(code) {
  assert.argumentTypes(code, int);
  return assert.returnType((($a <= code && code <= $z) || ($A <= code && code <= $Z) || (code == $_) || (code == $$)), assert.type.boolean);
}
Object.defineProperty(isIdentifierStart, "parameters", {get: function() {
    return [[int]];
  }});
function isIdentifierPart(code) {
  assert.argumentTypes(code, int);
  return assert.returnType((($a <= code && code <= $z) || ($A <= code && code <= $Z) || ($0 <= code && code <= $9) || (code == $_) || (code == $$)), assert.type.boolean);
}
Object.defineProperty(isIdentifierPart, "parameters", {get: function() {
    return [[int]];
  }});
function isDigit(code) {
  assert.argumentTypes(code, int);
  return assert.returnType(($0 <= code && code <= $9), assert.type.boolean);
}
Object.defineProperty(isDigit, "parameters", {get: function() {
    return [[int]];
  }});
function isExponentStart(code) {
  assert.argumentTypes(code, int);
  return assert.returnType((code == $e || code == $E), assert.type.boolean);
}
Object.defineProperty(isExponentStart, "parameters", {get: function() {
    return [[int]];
  }});
function isExponentSign(code) {
  assert.argumentTypes(code, int);
  return assert.returnType((code == $MINUS || code == $PLUS), assert.type.boolean);
}
Object.defineProperty(isExponentSign, "parameters", {get: function() {
    return [[int]];
  }});
function unescape(code) {
  assert.argumentTypes(code, int);
  switch (code) {
    case $n:
      return assert.returnType(($LF), int);
    case $f:
      return assert.returnType(($FF), int);
    case $r:
      return assert.returnType(($CR), int);
    case $t:
      return assert.returnType(($TAB), int);
    case $v:
      return assert.returnType(($VTAB), int);
    default:
      return assert.returnType((code), int);
  }
}
Object.defineProperty(unescape, "parameters", {get: function() {
    return [[int]];
  }});
var OPERATORS = SetWrapper.createFromList(['+', '-', '*', '/', '~/', '%', '^', '=', '==', '!=', '<', '>', '<=', '>=', '&&', '||', '&', '|', '!', '?', '#']);
var KEYWORDS = SetWrapper.createFromList(['var', 'null', 'undefined', 'true', 'false']);

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/change_detection/parser/lexer.map

//# sourceMappingURL=./lexer.map