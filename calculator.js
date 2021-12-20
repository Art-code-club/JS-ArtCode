let calculator = new Calculator();
function calculator(){
    let a=0;
    let b=0;
    this.read = function() {
        a =this.a;
        b =this.b;
    }

}
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );