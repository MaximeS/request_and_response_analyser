/**
 * Imports from external dependencies
 */
var express = require("express")
var app = express()
var fs = require("fs")
var readline = require("readline-sync")
var fsExtra=require("fs-extra")
var axios=require("axios")
/**
 * Imports from internal dependencies
 */
var analyzerModule = require("./dependencies/analyzer.js")
var analyzer = new analyzerModule()
/**
 * Configs
 */
var mainConfig = require("./config/mainConfig")
/*
 * Init variables via console 
 */
if (mainConfig.usemainconfig) {
    var port = mainConfig.port
    var path_to_test = mainConfig.path_to_test
    var analyze_request = mainConfig.analyze_request
    var redirect = mainConfig.redirect
    var server = mainConfig.server
    var analyze_response = mainConfig.analyze_response
    var response_code = mainConfig.response_code
    var response_message = mainConfig.response_message
    var input_files = mainConfig.input_files
    var specific_filepath = mainConfig.specific_filepath
    var filepath = specific_filepath?mainConfig.filepath:"."
    var specific_filename = mainConfig.specific_filename
    var filename = mainConfig.specific_filename?mainConfig.filename:""
    var useNumber=mainConfig.useNumber
}
else {
    var port = readline.question("Input the port you want the app to listen \n")
    var path_to_test = readline.question("Input the path you want to test (* for all) \n")
    var analyze_request = readline.question("Do you want to test the request?(Answer y/n) \n") == "y" ? true : false
    var redirect = readline.question("Do you want to redirect query?(Needed to analyze the response)(Answer y/n)\n") == "y" ? true : false
    if (redirect) {
        var server = readline.question("Input redirection server ip/domain \n")
        var analyze_response = readline.question("Do you want to test the response?(Answer y/n)\n") == "y" ? true : false
    }
    if (!redirect) {
        var response_code = readline.question("Which response code do you want for your response?(default:200)\n")
        if (!response_code) {
            response_code = 200
        }
        var response_message = readline.question("Input the message you want in the response (default:OK)\n")
        if (!response_message) {
            response_message = "OK"
        }
    }
    var input_files = readline.question("Do you want to save in files or just log in console?(Answer f/c\n") == "f" ? true : false
    if (input_files) {
        var specific_filepath = (readline.question("Do you want a specific filepath?(Answer y/n)\n") == "y" ? true : false)
        if (specific_filepath) {
            var filepath = (readline.question("Which path do you want for your files?\n"))
        }
        else
        {
            var filepath="."
        }
        var specific_filename = readline.question("Do you want a specific filename?(Answer y/n)\n") == "y" ? true : false
        if (specific_filename) {
            var filename = readline.question("Which name do you want?(It'll be name+req+number.log and name+res+number.log)\n")
            var useNumber= readline.question("Do you want to use the request number?(Starts at 1)(Answer y/n)")=="y"?true:false
        }
        else
        {
            var filename =""
            var useNumber= readline.question("Do you want to use the request number?(Starts at 1)(Answer y/n)")=="y"?true:false
        }
    }
}
fsExtra.ensureDirSync(filepath)



app.all(path_to_test, function (req, res) {

    if (analyze_request) {
        if (input_files) {
            analyzer.analyzeRequest(req,filepath,filename,useNumber,analyze_response)
        }
        else {
            analyzer.analyzeRequest(req)
        }
    }
    if(redirect){
        axios({
            url:"http://"+server+(path_to_test=="*"?"/":path_to_test),
            method:req.method,
            baseUrl:req.baseUrl,
            headers:req.headers,
            params:req.params,
            data:req.body,
            validateStatus: function (status) {
                return status >= 100 && status < 600;
              }
        }).then((response)=>{
            if (input_files) {
                analyzer.analyzeResponse(response,filepath,filename,useNumber)
            }
            else{
                analyzer.analyzeResponse(response)
            }
            res.status(response.status).send(response.data)
        }).catch((error)=>{
            
        })
    }
    else{
        res.status(response_code)
        res.send({"message":response_message})
    }
})

app.listen(port)