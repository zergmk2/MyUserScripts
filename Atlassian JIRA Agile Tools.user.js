// ==UserScript==
// @name        Atlassian JIRA Agile Customization Tools
// @namespace   lu cao
// @description show different background color in backlog page of JIRA Agile.
// @include     https://*.atlassian.net/secure/RapidBoard.jspa*
// @run-at document-start
// @version     1.0
// @grant       none
// ==/UserScript==

/*
==== DESCRIPTION ====
Work in progress!

==== RELEASE NOTES ====


//debugger;

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

(function() {
    var jsonResponse;
    var jsonResponseMap;
    var origOpen = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function() {
        //        console.log('request started!');
        this.addEventListener('load', function() {
            //            console.log('request completed!');
            //           console.log(this.readyState); //will always be 4 (ajax is completed successfully)
            //            console.log(this.responseText); //whatever the response was
            if (this.responseURL.indexOf("data.json") > -1 && this.status == "200")
            {
                jsonResponse = JSON.parse(this.responseText);
                var jsonResponseMap = jsonResponse.issues.reduce(function(map, obj) {
                    map[obj.key] = obj;
                    return map;
                },{});

                //console.log(jsonResponse);
                //for(var i in jsonResponse.issues)
                //{
                //    console.log("=======================================");
                //    console.log(jsonResponse.issues[i].key);
                //    console.log(jsonResponse.issues[i].statusName);
                //    console.log(jsonResponse.issues[i].trackingStatistic.statFieldValue.text);
                //    console.log("=======================================");
                //}
                setTimeout(function(){
                    //your code here

                    var issueArray = document.querySelectorAll("div.ghx-issue-content");

                    if (issueArray.length == jsonResponse.issues.length)
                    {
                        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!");
                        //console.log(jsonResponseMap);
                        //console.log(issueArray);

                        for (var i in issueArray)
                        {
                            if (issueArray[i].childNodes !== undefined)
                            {
                                var key = issueArray[i].childNodes["0"].children[2].innerText;
                                var issue = jsonResponseMap[key];
                                try{
                                    if (issue.trackingStatistic.statFieldValue.text !== undefined)
                                    {
                                        issueArray[i].childNodes[1].children[2].children[1].innerText = issue.trackingStatistic.statFieldValue.text;
                                    }
                                }
                                catch(ex)
                                {
                                }
                                if (issue.statusName == "In Progress")
                                {
                                    issueArray[i].style.backgroundColor = "cornflowerblue";
                                }
                                else if (issue.statusName.toUpperCase() == "Reopened".toUpperCase())
                                {
                                    issueArray[i].style.backgroundColor = "black";
                                }
                                else if (issue.statusName.toUpperCase() == "Resolved".toUpperCase())
                                {
                                    issueArray[i].style.backgroundColor = "green";
                                }
                                else if (issue.statusName.toUpperCase() == "Ready for Unit Test".toUpperCase())
                                {
                                    issueArray[i].style.backgroundColor = "yellow";
                                }
                                else if (issue.statusName.toUpperCase() == "Closed".toUpperCase())
                                {
                                    issueArray[i].style.backgroundColor = "green";
                                }
                            }
                        }
                    }
                }, 1000);

            }
        });
        origOpen.apply(this, arguments);
    };

    //    document.addEventListener('DOMContentLoaded', function() {
    //        // your code here
    //        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!");
    //        console.log(jsonResponse);
    //    }, false);
})();