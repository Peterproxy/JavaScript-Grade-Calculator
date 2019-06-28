// GRADE DETERMINER BY PETER OKE

let score = prompt('Enter Your Score'), grade, remark;

function gradeCalc ()
{
            alert (`Your Score:         ${score}.\nYour Grade:        ${grade}.\n\n REMARK:           ${remark}`)
}

switch(true)
{
    case (score <= 44):
         grade = 'F', remark = 'FAILED (CARRY OVER)';
         gradeCalc();
    break;

    case (score >= 45 && score < 50):
        grade = 'D', remark = 'PASS';
        gradeCalc();
    
    case (score>=50 && score<60):
        grade = 'C', remark = 'CREDIT';
        gradeCalc();
    break;

    case (score>=60 && score<70):
        grade = 'B', remark = 'CREDIT';
        gradeCalc();
    break;

    default:
        grade = 'A', remark = 'DISTINCTION';
        gradeCalc();
}