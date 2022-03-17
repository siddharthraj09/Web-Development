const request = require("request");
const cheerio = require("cheerio");
const getIssuesPageHtml=require("./issue")
function getReposPageHtml(url,topic){
    request(url,cb);
    function cb(err,response,html){
        if(err){
            console.log(err);
        }
        else if(response.statusCode== 404 ){
            console.log("page not found")
        }
        else{
            getReposLink(html);
        }
        function getReposLink(html){
            let $=cheerio.load(html);
            let headingArr= $(".f3.color-fg-muted.text-normal.lh-condensed");
            console.log(topic);
            for (let i =0;i<8;i++){
                let twoanchors= $(headingArr[i]).find("a");

                let link =$(twoanchors[1]).attr("href");
              //  console.log(link)
              let fullLink="https://github.com"+link+"/issues";
              let repoName=link.split("/").pop();
              console.log(fullLink)
              getIssuesPageHtml(fullLink,topic,repoName);

            }
            console.log("'''''''''''''''''''''");
        }
    }

}
module.exports=getReposPageHtml;
