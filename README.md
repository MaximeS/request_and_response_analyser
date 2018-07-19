# request_and_response_analyzer

## Launching the project
First you'll need [node.js](https://nodejs.org/en/)

Then run in your clone directory

``` BatchFile
  npm install
```

And finally launch it!
``` BatchFile
  npm start
```

## Configuration

There is 3 config files you'll need to change for your own use mainConfig.js,request.js and response.js

### mainConfig.js
``` Javascript
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
```
  usemainconfig is "do you want to use the main config?" if false you'll be asked for each parameter in console.
  
  port is the port you want to launch your server on.
  
  path_to_test is the path you want to set(it'll be used in the request redirection be careful).
  
  analyze_request is the boolean to determine if you want to analyze the request. If false it'll let it through without doing nothing.
  
  redirect is the boolean to check if you want to redirect or answer by yourself. If true don't mind response_code and response_message.
  
  server is the actual server you'll target. If redirect is false don't mind it.
  
  analyze_response is the boolean to determine if you want to analyze the response. If false it'll let it through without doing nothing,
  don't mind it if redirect is false.
  
  response_code is the code you want to return to the user. Check [Http codes](https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP) if you don't know which code you need.
  
  response_message is the message you want to return to the user. At the moment it can only send back string through this config.
  
  input_files is whether you want to use files to log request and/or response if false it'll log in the console.
  
  specific_filepath is whether you want to set a specific filepath for your log files or use this directory. If input_files is false don't mind it
  
  filepath is the path you want to use to store your log files. If specific_filepath and/or input_files are false don't mind it
  
  specific_filename is whether you want to set a specific filename for your log files or use "test". The file name will be like "testreq" or "testres".
  Don't mind it if input_files is false.
  
  filename is the name you want to input before req or res on your log files names. Don't mind it if specific_filename and/or input_files is false.
  
  useNumber is whether you want to use numbers in filename to log separatly each request/response.
