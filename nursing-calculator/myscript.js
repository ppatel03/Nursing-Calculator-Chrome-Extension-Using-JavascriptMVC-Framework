function responseFromInfoBar(jsonResponse)
{
	alert("user went on RNDegrees "+jsonResponse.clickedItem);
}

var regex=/Nursing/gi;
var matches=document.body.innerText.match(regex);
if(matches)
{
	var message={contentType:"nursing"};
	var regex_blog=/blog/gi;
	var regex_schools=/schools/gi;
	var blog_match=document.body.innerText.match(regex_blog);
	var schools_match=document.body.innerText.match(regex_schools);
	if(blog_match!=null && schools_match!=null)
	{
		if(blog_match.length > schools_match.length)
		{
			message={contentType:"nursing_blog"};
		}
		else
		{
			message={contentType:"nursing_schools"};
		}
	}	
	chrome.extension.sendMessage(message,responseFromInfoBar);
}

