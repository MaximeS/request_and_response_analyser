var fs = require("fs")
var requestConfig=require("../config/request")
var responseConfig=require("../config/response")
var cookieParser=require("cookie-parser")

class Analyzer{
    constructor()
    {
        this.reqNumber=1
    }
    analyzeRequest(req){
        this.headerConsole("REQUEST")
        if(requestConfig.app)
        {
            this.headerConsole("app")
            console.log(req.app)
        }
        if(requestConfig.baseUrl)
        {
            this.headerConsole("baseUrl")
            console.log(req.baseUrl)
        }
        if(requestConfig.body)
        {
            this.headerConsole("body")
            console.log(req.body)
        }
        if(requestConfig.cookies)
        {
            this.headerConsole("cookies")
            console.log(req.cookies)
        }
        if(requestConfig.fresh)
        {
            this.headerConsole("fresh")
            console.log(req.fresh)
        }
        if(requestConfig.hostname)
        {
            this.headerConsole("hostname")
            console.log(req.hostname)
        }
        if(requestConfig.ip)
        {
            this.headerConsole("ip")
            console.log(req.ip)
        }
        if(requestConfig.ips)
        {
            this.headerConsole("ips")
            console.log(req.ips)
        }
        if(requestConfig.method)
        {
            this.headerConsole("originalUrl")
            console.log(req.originalUrl)
        }
        if(requestConfig.params)
        {
            this.headerConsole("params")
            console.log(req.params)
        }
        if(requestConfig.path)
        {
            this.headerConsole("path")
            console.log(req.path)
        }
        if(requestConfig.protocol)
        {
            this.headerConsole("protocol")
            console.log(req.protocol)
        }
        if(requestConfig.query)
        {
            this.headerConsole("query")
            console.log(req.query)
        }
        if(requestConfig.route)
        {
            this.headerConsole("route")
            console.log(req.route)
        }
        if(requestConfig.secure)
        {
            this.headerConsole("secure")
            console.log(req.secure)
        }
        if(requestConfig.signedCookies)
        {
            this.headerConsole("signedCookies")
            console.log(req.signedCookies)
        }
        if(requestConfig.stale)
        {
            this.headerConsole("stale")
            console.log(req.stale)
        }
        if(requestConfig.subdomains)
        {
            this.headerConsole("subdomains")
            console.log(req.subdomains)
        }
        if(requestConfig.xhr)
        {
            this.headerConsole("xhr")
            console.log(req.xhr)
        }
    }
    analyzeRequest(req,filepath,filename,useNumber,analyzeRes){
        if(useNumber)
        {
            var fullFilepath=filepath+"/"+filename+"req"+this.reqNumber+".log"
            if(!analyzeRes) this.reqNumber+=1
        }
        else
        {
            var fullFilepath=filepath+"/"+filename+"req.log"
        }
        if(requestConfig.app)
        {
            this.writeTextFile(fullFilepath,this.header("app"))
            this.writeTextFile(fullFilepath,JSON.stringify(req.app,4)+"\n")
        }
        if(requestConfig.baseUrl)
        {
            this.writeTextFile(fullFilepath,this.header("baseUrl"))
            this.writeTextFile(fullFilepath,req.baseUrl+"\n")
        }
        if(requestConfig.body)
        {
            this.writeTextFile(fullFilepath,this.header("body"))
            this.writeTextFile(fullFilepath,JSON.stringify(req.body,4)+"\n")
        }
        if(requestConfig.cookies)
        {
            this.writeTextFile(fullFilepath,this.header("cookies"))
            if(req.cookies!=null) this.writeTextFile(fullFilepath,JSON.stringify(cookieParser.JSONCookies(req.cookies))+"\n")
        }
        if(requestConfig.fresh)
        {
            this.writeTextFile(fullFilepath,this.header("fresh"))
            this.writeTextFile(fullFilepath,req.fresh+"\n")
        }
        if(requestConfig.hostname)
        {
            this.writeTextFile(fullFilepath,this.header("hostname"))
            this.writeTextFile(fullFilepath,req.hostname+"\n")
        }
        if(requestConfig.ip)
        {
            this.writeTextFile(fullFilepath,this.header("ip"))
            this.writeTextFile(fullFilepath,req.ip+"\n")
        }
        if(requestConfig.ips)
        {
            this.writeTextFile(fullFilepath,this.header("ips"))
            this.writeTextFile(fullFilepath,req.ips+"\n")
        }
        if(requestConfig.method)
        {
            this.writeTextFile(fullFilepath,this.header("method"))
            this.writeTextFile(fullFilepath,req.method+"\n")
        }
        if(requestConfig.params)
        {
            this.writeTextFile(fullFilepath,this.header("params"))
            this.writeTextFile(fullFilepath,JSON.stringify(req.params,4)+"\n")
        }
        if(requestConfig.path)
        {
            this.writeTextFile(fullFilepath,this.header("path"))
            this.writeTextFile(fullFilepath,req.path+"\n")
        }
        if(requestConfig.protocol)
        {
            this.writeTextFile(fullFilepath,this.header("protocol"))
            this.writeTextFile(fullFilepath,req.protocol+"\n")
        }
        if(requestConfig.query)
        {
            this.writeTextFile(fullFilepath,this.header("query"))
            this.writeTextFile(fullFilepath,JSON.stringify(req.query,4)+"\n")
        }
        if(requestConfig.route)
        {
            this.writeTextFile(fullFilepath,this.header("route"))
            this.writeTextFile(fullFilepath,JSON.stringify(req.route,4)+"\n")
        }
        if(requestConfig.secure)
        {
            this.writeTextFile(fullFilepath,this.header("secure"))
            this.writeTextFile(fullFilepath,req.secure+"\n")
        }
        if(requestConfig.signedCookies)
        {
            this.writeTextFile(fullFilepath,this.header("signedCookies"))
            if(req.signedCookies!=null)this.writeTextFile(fullFilepath,JSON.stringify(cookieParser.JSONCookies(req.signedCookies,requestConfig.secret),4)+"\n")
        }
        if(requestConfig.stale)
        {
            this.writeTextFile(fullFilepath,this.header("stale"))
            this.writeTextFile(fullFilepath,req.stale+"\n")
        }
        if(requestConfig.subdomains)
        {
            this.writeTextFile(fullFilepath,this.header("subdomains"))
            this.writeTextFile(fullFilepath,req.subdomains+"\n")
        }
        if(requestConfig.xhr)
        {
            this.writeTextFile(fullFilepath,this.header("xhr"))
            this.writeTextFile(fullFilepath,req.xhr+"\n")
        }
    }
    analyzeResponse(res)
    {
        this.headerConsole("RESPONSE")
        if(responseConfig.app)
        {
            this.headerConsole("app")
            console.log(res.app)
        }
        if(responseConfig.headers)
        {
            this.headerConsole("headers")
            console.log(res.headers)
        }
        if(responseConfig.locals)
        {
            this.headerConsole("locals")
            console.log(res.locals)
        }
        if(responseConfig.data)
        {
            this.headerConsole("data")
            console.log(res.data)
        }
    }
    analyzeResponse(res,filepath,filename,useNumber){
        if(useNumber)
        {
            var fullFilepath=filepath+"/"+filename+"res"+this.reqNumber+".log"
            this.reqNumber+=1
        }
        else
        {
            var fullFilepath=filepath+"/"+filename+"res.log"
        }
        if(responseConfig.app)
        {
            this.writeTextFile(fullFilepath,this.header("app"))
            this.writeTextFile(fullFilepath,res.app+"\n")
        }
        if(responseConfig.headers)
        {
            this.writeTextFile(fullFilepath,this.header("headers"))
            this.writeTextFile(fullFilepath,JSON.stringify(res.headers,4)+"\n")
        }
        if(responseConfig.locals)
        {
            this.writeTextFile(fullFilepath,this.header("locals"))
            this.writeTextFile(fullFilepath,JSON.stringify(res.locals,4)+"\n")
        }
        if(responseConfig.data)
        {
            this.writeTextFile(fullFilepath,this.header("data"))
            this.writeTextFile(fullFilepath,JSON.stringify(res.data,4)+"\n")
        }
    }
    headerConsole(catName){
        console.log(this.header(catName))
    }
    header(catName)
    {
        var stringCat="===================================================\n"
        var numberOfStars=51-catName.length
        for(var i=0;i<numberOfStars;i++)
        {
            if(i==Math.trunc(numberOfStars/2))
            {
                stringCat+=catName
            }
            stringCat+="*"
        }
        stringCat+="\n===================================================\n"
        return stringCat
    }
    writeTextFile(filepath, output) {
        fs.appendFileSync(filepath, output, (err) => {
            if (err) console.log(err);
        })
    }
}
module.exports =Analyzer