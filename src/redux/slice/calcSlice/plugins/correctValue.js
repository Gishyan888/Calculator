export default function CorrectValue(num){
    var x = num + "";
    var y = false;
    x = x.split("");
    x = x.filter((evt)=>{
        if(evt === "."){
            y = true;
            return evt;
        }else if(evt !== " "){
            return evt;
        }
    });
    x = x.join("");
    if(x.length < 4){
        return num;
    }else if(x === "Infinity"){
        return x;
    }else if(y){
        let c = x.split(".");
        if(c[0].length < 4){
            return num; 
        }else{
            x = c[0];
            var index  = (x.length / 3) + "";
            var i = x.length / 3;
            var b = index.split(".");
            var test = x;
            var result = "";
            if(b.length === 1){
                let vay = loop();
                if(vay === undefined){
                    return result + "." + c[1];
                }
            }else if(b[1].substring(0, 1) === "6"){
                result = test.substring(0, 2);
                test = test.substring(2, test.length);
                let vay = loop();
                if(vay === undefined){
                    return result + "." + c[1];
                }
            }else {
                result = test.substring(0, 1);
                test = test.substring(1, test.length);
                let vay = loop();
                if(vay === undefined){
                    return result + "." + c[1];
                }
            }
        }

        function loop(){
            if(i < 1){
                return result;
            }else{
                result = result + " " +  test.substring(0, 3); 
                test = test.substring(3, test.length);
                i--;
            }
            loop();
        }
    }else{
        var index  = (x.length / 3) + "";
        var i = x.length / 3;
        var b = index.split(".");
        var test = x;
        var result = "";
        if(b.length === 1){
            let vay = loop();
            if(vay === undefined){
            	return result;
            }
        }else if(b[1].substring(0, 1) === "6"){
            result = test.substring(0, 2);
            test = test.substring(2, test.length);
            let vay = loop();
            if(vay === undefined){
            	return result;
            }
        }else {
            result = test.substring(0, 1);
            test = test.substring(1, test.length);
            let vay = loop();
            if(vay === undefined){
            	return result;
            }
        }

        function loop(){
            if(i < 1){
                return result;
            }else{
                result = result + " " +  test.substring(0, 3); 
                test = test.substring(3, test.length);
                i--;
            }
            loop();
        }
    }
}