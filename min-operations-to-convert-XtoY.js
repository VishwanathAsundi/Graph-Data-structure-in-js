function minOperations(x,y){
    if(x==y) return 0;

    if(x<=0 && y>0){
        return -1;
    }
    if(x>y) return x-y;

    if(y&1){
        return 1+minOperations(x,y+1);
    }else{
        return 1+minOperations(x,y/2);
    }
}
let x=4,y=7;
document.write("Min operations to convert ",x," to ",y," is ",minOperations(x,y));