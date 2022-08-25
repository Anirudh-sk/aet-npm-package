function aet(func1, func2) {

    let t1 = findTime(func1);
    let t2 = findTime(func2);

    if  ( t1>t2) {
        return 1
    } else if(t1<t2) {
        return -1
    }
    else {
        return 0
    }

}
function findTime(fun){
    let start= +Date.now()
    console.log(Date.now());
    fun()
    console.log(Date.now());
    let end= +Date.now()
    console.log(end-start);
    return end-start
}

module.exports = aet