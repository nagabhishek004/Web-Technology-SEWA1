function calc(){
    var phy=myform.phys.value;
    var che=myform.chem.value;
    var math=myform.maths.value;
    var bio=myform.biol.value;
    var sum=parseInt(phy)+parseInt(che)+parseInt(math)+parseInt(bio);
    var res=(sum/400)*100;
    document.write("<strong>Your total persentage is : </strong>"+" "+res+"<br><br>");
    if(phy>=35&che>=35&math>=35&bio>=35){
    if(res>=40&res<=50){
        document.write("<strong>Grade : E </strong>");

    }
    else if(res>=50&res<=60){
        document.write("<strong>Grade : D </strong>");
    }
    else if(res>=60&res<=70){
        document.write("<strong>Grade : C </strong>");
    }
    else if(res>=70&res<=80){
        document.write("<strong>Grade : B </strong>");
    }
    else if(res>=80&res<=90){
        document.write("<strong>Grade : A </strong>");
    } else if(res>=90&res<=100){
        document.write("<strong>Grade : A+ </strong>");
    }
    else{
        document.write("<strong>Grade : F </strong>");
    }
}
else{
    document.write("<strong>You have Failed in minimum 1 Subject </strong>");
}
}