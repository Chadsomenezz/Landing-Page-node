function library(){

    function add(){
        console.log("hi");
    }
    return {add};
}

var $ = library();
console.log($.add);