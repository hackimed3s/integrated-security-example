var test_ui = require("./test_ui_wrapper");
var requestPromise = require('request-promise');
const { exec } = require('child_process');

const { spawn } = require('child_process');
// const child = spawn('ls', ['-lh', '/usr']);

var port = 3000;
var proxyPort = 8083;
var proxyUrl = 'localhost:'+proxyPort
var capabilities = {
    'browserName': 'chrome',
    'proxy': {
        'proxyType': 'manual',
        'httpProxy': proxyUrl,
        'httpsProxy': proxyUrl,
        'sslProxy': proxyUrl
    }
}
var zap;

test_ui(
    port,
    capabilities,
    async function(helpers)
    {
        //start zap with proxy
        // Change this to: 
        // exec('java -jar <<zap location>>/zap-2.7.0.jar -port '+proxyPort)
        // zap = spawn('java -jar ./zapLocation/ZAP_2.7.0/zap-2.7.0.jar -port '+proxyPort)
        zap = exec('java -jar ./zapLocation/ZAP_2.7.0/zap-2.7.0.jar -port '+proxyPort)
        helpers.sleep(60*1000);
    },
    async function(helpers)
    {
        // get scan results
        var results = await requestPromise (
            {
                method: 'GET',
                uri:'http://127.0.0.1:8083/OTHER/core/other/jsonreport/',
                json: true
            }
        )
        //write the results somewhere
        console.log(results);
        // stop zap (manually for now)
    },
    capabilities, // add proxy    
    proxyUrl
)