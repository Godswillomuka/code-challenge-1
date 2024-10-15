let grade = parseImt(prompt("Enter student marks(0-100):"))
const marks = (Grade >= 0 && grade <= 100)
    if (Grade > 79){
        alert("A");
    
    }else if (Grades >= 60 && Grades <=79){
        alert("B");
    }else if (Grades >= 49 && Grades <=59){
        alert ("C");
    }else if (Grades => 40 && Grades <49){
        alert ("D");
    }else if (Grades <40){
        alert("E");
    }else {
        alert ("wrong input");
    }
    
    output.textContent = `The grades for ${marks} is ${grades}.`;