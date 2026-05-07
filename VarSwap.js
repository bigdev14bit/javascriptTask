VarOne = 1;
VarTwo = 2;
VarThree = 3;

var temp = VarOne;

VarOne = VarTwo;
VarTwo = VarThree;
VarThree = temp;

process.stdout.write(VarOne, VarTwo, VarThree);
