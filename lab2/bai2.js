/// 
n = 0;
let dem = 0;
// while(n>=10){
//     let s = n%10
//     if(s == 0){
//         dem = dem+1;
//     }
//     n = Math.floor(n/10);
// }
do{
    let s = n%10
    if(s == 0){
        dem = dem+1;
    }
    n = Math.floor(n/10);
}while(n>0);
console.log(dem);