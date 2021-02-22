let tags =["p","h1","h2","h3","h4","h5","h6"];
let wordarray=[["エクセレント","卓越した"],
["カンパニー","企業"],
["パラダイムシフト","価値観の非連続な変化"],
["キャズム","溝"],
["コモディティ","汎用品"],
["ブルーオーシャン","未開拓市場"],
["ファクト","事実"],
["ボトルネック","制約条件"],
["ベネフィット","利益"],
["フルコミット","全力投球"],
["カリスマ","超人的資質"],
["アセット","資産"],
["ナレッジ化","体系化"],
["ドライブ","運転"],
["インパクト","強い影響"],
["ポリバレント","一人で何役も担える"],
["アライアンス","協定"],
["デファクトスタンダード","事実上の標準"]];

for(let i=0;i<tags.length;++i){
	var matches = document.querySelectorAll(tags[i]);
	for(var j=0;j<matches.length;++j){
		var str = matches[j].innerHTML;
		for(var k=0;k<wordarray.length;k++){
			str=str.replace(wordarray[k][0],wordarray[k][1]);
		}
		matches[j].innerHTML=str;
	}
}
