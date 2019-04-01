
function newArray(a) {
    product = 1;
    b = [];   
    
    for(var i=0; i<a.length; i++) {
        product *= a[i];
    }

    for(var i=0; i<a.length; i++) {
        b[i] = product/a[i];
    }
    return b;
}

//without division
function newArrayFast(a) {
    
    b = [];
    var j = 0;

    for(var i=0; i<a.length; i++) {
        product = 1;
        (i==0) ? j = 1 : j = 0;  
        for(j; j<a.length; j++) {
            if(i==j) continue;
            product *= a[j] 
        }
        b[i] = product;
    }
    return b;
}

a = [1,2,3,4,5];

newArray = newArray(a);
newArrayFast = newArrayFast(a);
console.log(newArray);
console.log(newArrayFast);