console.log("start");
var Converter=require("csvtojson").Converter;
var fs=require("fs");
console.log("data loaded");
var c=new Converter({"construct":true,"workerNum":4});

//var rs=fs.createReadStream("./csvdata");
//rs.pipe(c);

var d=fs.readFileSync("./csvdata","utf8");
c.fromString(d,function(err,data){
  console.log("finished");
})

