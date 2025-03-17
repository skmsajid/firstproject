 function genTicket(n){
    let genList=new Array(n);
        for (let i = 0; i <3; i++) {
             genList[i]=Math.floor(Math.random()*10);
            
        }
    return genList;
}
function sum(list){
    let sum=0;
    for (let index = 0; index < list.length;index++){
        sum+=list[index];
    }
    return sum;
}
export{genTicket,sum};