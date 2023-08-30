let VarBool;
let VarBigint;
let VarString;
let VarSymbol;

console.log(`
Variáveis Undefined:
boolean: ${VarBool}
bigint: ${VarBigint}
String: ${VarString}
symbol: ${VarSymbol}`);

VarBool = null;
VarBigint = null;
VarString = null;
VarSymbol = null;

console.log(`
Variáveis Null:
boolean: ${VarBool}
bigint: ${VarBigint}
String: ${VarString}
symbol: ${VarSymbol}`);

VarBool = true;
VarBigint = 123456789012345678901234567890n;
VarString = "Hello, world!";
VarSymbol = Symbol("@");

console.log(`Variáveis após atribuir tipos como valores:
boolean: ${VarBool}
bigint: ${VarBigint}
String: ${VarString}
symbol: ${VarSymbol.toString()}`);
