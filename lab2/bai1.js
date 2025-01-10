function so (a, b){
    let soChan = 0 , soLe = 0;
    for(let i=a; i<=b; i++){
        if(i%2 == 0) {
            soChan++;
        }
        else{ 
            soLe++;
        }
    }
    console.log("Tổng số chẳn là: ",soChan);
    console.log( "Tổng số lẻ là :",soLe);
}
so(2,10);

