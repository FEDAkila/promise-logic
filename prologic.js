
//promise using check in odd or even


function check(n) {
    return new Promise((res,rej)=>{
        if(n%2==0){
            res(n);
        }
        else{
            rej(n);
        }
    })
    
}
check(7).then((x)=>{
    console.log(`${x}is even`)
})
.catch((x)=>{
    console.log(`${x}is not  even`)
})

//palindrome


function check(s) {
    return new Promise((res,rej)=>{
        let x=s;
        let y=x;
        let sum=0;
        while(x>0){
    
            var rem=x%10;
            x=(x-rem)/10;
            sum=(sum*10)+rem;
    
        }

        if(sum==y){

            res(y);
        }
        else{
            rej(y);
        }
    })
    
}
check(124).then((d)=>{
    console.log(`${d}is palindrome`)
})
.catch((d)=>{
    console.log(`${d}is not palindrome`)
})

//armstrong

function check(h) {
    return new Promise((res,rej)=>{
        
        let x=h;
        let y=x
        let z=y;
        let ans=0;
        let count=0;
        while(x>0){
             var rem=x%10;
            x=(x-rem)/10;
            count++
        }
        console.log(x,count)
        while(y>0){
    
            var rem=y%10;
            y=(y-rem)/10;
            ans=(rem**count)+ans;
    
        }
        
        if(ans==z){

            res(z);
        }
        else{
            rej(z);
        }
    })
    
}
check(153).then((x)=>{
    console.log(`${x}is armstorng`)
})
.catch((x)=>{
    console.log(`${x}is not armstrong`)
})
