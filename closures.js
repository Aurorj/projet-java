function myFunction(){
    let myIternalVariable =0;
    const getmyInternalVariable = () =>{
        return myIternalVariable;
    }
    return {changeIternalVariable,getmyInternalVariable};
};

const result= myFunction();
result.changeIternalVariable(10)
console.log (myIternalVariable)
