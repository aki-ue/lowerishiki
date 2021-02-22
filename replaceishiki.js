tags ={p,h1,...,h6}
for(let i=0;i<arr.length;++i){
	var matches = document.queryselectorall(tags[i]);
	for(var j=0;i<matches.length;++i){
		var str = matches[j].innerHTML;
		str=str.replace("before","after");
		matches[i].innerHTML=str
	}
}
