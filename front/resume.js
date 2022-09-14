var avg=prompt('Enter the avg value')
if(avg>=90 && avg<=100){
    document.write("You Get AA+ ")
}
else if(avg>=80 && avg<90){
    document.write("You Get AA")
}
else if(avg>=70 && avg<80){
    document.write("You Get AB")

}
else if(avg>=60 && avg<70){
    document.write("You Get AC")
}
else if(avg>=50 && avg<60){
    document.write("You Get AD")
}
else if(avg>=40 && avg<50){
    document.write("You Get AD")
}
else if(avg>=33 && avg<40){
    document.write("You Get AE")
}
else if(avg<=32){
    document.write("You are Fail")
}
else if(avg>100){
    document.write("You Enter A Wrong Number")
    document.write('<br>')
    document.write( "Plese Enter A Valid Number")
}
