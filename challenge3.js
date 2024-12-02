// creates interface that allows to read input from the console and writes output on the console

const readline=require("readline");
const rl=readline.createInterface(
    {
        input: process.stdin,
        output:process.stdout,
    }
)

//calculating PAYE
function payeTax(salary){
    let tax=0;
    if(salary<=24000){
        tax=24000*0.1;
    }
    else if(salary>=24001 && salary<=32333){
        tax=salary*0.25;
    }
    else if(salary>=32334 && salary<=500000){
        tax=salary*0.3;
    }
    else if(salary>=500001 && salary<=800000){
        tax=salary*0.325;
    }
    else if(salary>=800000){
        tax=salary*0.35;
    }
    return tax;
}
//calculating NHIF deductions
function nhifdeduction(grossSalary){
    let nhif=0;
    if(nhifBenefits<=5999) {
        nhif-159;
    }
    else if(nhifBenefits>=6000 && nhifBenefits<=7999){
        nhif=300;
    }
    else if(nhifBenefits>=8000 && nhifBenefits<=11999){
        nhif=400;
    }
    else if(nhifBenefits>=12000 && nhifBenefits<=14999){
        nhif=500;
    }
    else if(nhifBenefits>=15000 && nhifBenefits<=19999){
        nhif=600;
    }
    else if(nhifBenefits>=20000 && nhifBenefits<=24999){
        nhif=750;
    }
    else if(nhifBenefits>=25000 && nhifBenefits<=29999){
        nhif=850;
    }
    else if(nhifBenefits>=30000 && nhifBenefits<=34999){
        nhif=900;
    }
    else if(nhifBenefits>=35000 && nhifBenefits<=39999){
        nhif=950;
    }
    else if(nhifBenefits>=40000&& nhifBenefits<=44999){
        nhif=1000;
    }
    else if(nhifBenefits>=45000 && nhifBenefits<=49999){
        nhif=1100;
    }
    else if(nhifBenefits>=50000 && nhifBenefits<=59999){
        nhif=1200;
    }
    else if(nhifBenefits>=60000 && nhifBenefits<=69999){
        nhif=1300;
    }
    else if(nhifBenefits>=70000 && nhifBenefits<=79999){
        nhif=1400;
    }
    else if(nhifBenefits>=80000 && nhifBenefits<=89999){
        nhif=1500;
    }
    else if(nhifBenefits>=90000 && nhifBenefits<=99999){
        nhif=1600;
    }
    else if(nhifBenefits>=100000){
        nhif=1700;

    }
    return nhif;
}
//calculating NSSF
function nssfDeductions(nssfBenefi){
    let nssf=0;
    if(nssfBenefits<=6000){
     nssf=nssfBenefits*0.06;
    }
    else if(nssfBenefits>=6001 && nssfBenefits<=18000){
        nssf=nssfBenefits*0.06;
    }
    else if(nssfBenefits<=7001 && nssfBenefits>=36000){
        nssf=nssfBenefits*0.06;
    }
    else if(nssfBenefits<=7000){
        nssf=nssfBenefits*0.06;
    }
}

// Calculating net salary
function netSalary(basicSalary,benefits){
    const grossSalary=basicSalary+benefits;

const totalDeductions=payeTax+nssfDeductions+nhifdeduction;
const netSalary=grossSalary-totalDeductions;

const payeeTax = payeTax(salary);
const nhifDeduction = nhifdeduction(grossSalary);
const nssfDeduction = nssfDeductions(nssfBenefits);

//OUTPUTTING RESULTS
console.log("Gross Salary: Kshs " + grossSalary);
console.log("Payee Tax: Kshs " + payeTax);
console.log("NHIF Deduction: Kshs " + nhifdeduction);
console.log("NSSF Deduction: Kshs " + nssfDeductions);
console.log("Total Deductions: Kshs " + totalDeductions);
console.log("Net Salary: Kshs " + netSalary);
return netSalary;

}

//Prompting input from the user

rl.question('Enter your basic salary: ', (basicSalaryInput) => {
    rl.question('Enter your benefits: ', (benefitsInput) => {
        const basicSalary = parseFloat(basicSalaryInput);
        const benefits = parseFloat(benefitsInput);

        if (isNaN(basicSalary) || isNaN(benefits)) {
            console.log("Please enter valid numbers for basic salary and benefits.");
        } else {
            netSalary(basicSalary, benefits);
        }

        rl.close();
    });
});