Array.prototype.even = function(){
    var tempArray1 = new Array();
         for(let i=0; i<this.length; i++){
            if(this[i]%2===0){
                tempArray1.push(this[i])
            }
        
    }
    console.log(tempArray1);
}

Array.prototype.odd = function(){
    var tempArray2 = new Array();
         for(let i=0; i<this.length; i++){
            if(this[i]%2!==0){
                tempArray2.push(this[i])
            }
        
    }
    console.log(tempArray2);
}
process.nextTick(()=>{console.log("start");});
setTimeout(()=>{[1,2,3,4,5,6,7,8].even()},1000);
setTimeout(()=>{[1,2,3,4,5,6,7,8].odd()},2000);
process.nextTick(()=>{ console.log("end")});
 