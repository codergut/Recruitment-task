const renderResponse=(results) => {
	if(!results.length){
		responseField.innerHTML="<p>Try again!</p> <p>There were no informations found!</p>";
	} else {
		const cityList=[];
		results.forEach(data => cityList.push(`<li>${data.city}</li>`))
		responseField.innerHTML=`<p>You might be interested in:</p><ol>${cityList.join('')}</ol>`;
	}
}
