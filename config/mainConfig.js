var actualDate=new Date()
var fullDate=""+actualDate.getDay()+"-"+actualDate.getMonth()+"-"+actualDate.getFullYear()+"_"+actualDate.getHours()+"-"+actualDate.getMinutes()+"-"+actualDate.getSeconds()
module.exports={
    "usemainconfig":true,
    "port":9999,
    "path_to_test":"*",
    "analyze_request":true,
    "redirect":true,
    "server":"localhost:1337",
    "analyze_response":true,
    "response_code":200,
    "response_message":"OK",
    "input_files":true,
    "specific_filepath":true,
    "filepath":"logs/"+"test__"+fullDate,
    "specific_filename":true,
    "filename":"test",
    "useNumber":true,
}