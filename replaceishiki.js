let tags =["p","h1","h2","h3","h4","h5","h6"]
for(let i=0;i<tags.length;++i){
	var matches = document.querySelectorAll(tags[i]);
	for(var j=0;j<matches.length;++j){
		var str = matches[j].innerHTML;
		str=str.replace("エクセレント","卓越した");
		str=str.replace("エクセレント","卓越した");
		str=str.replace("ブルーオーシャン","未開拓市場")
		matches[j].innerHTML=str
	}
}
