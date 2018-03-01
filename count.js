
//count

var text = ["aku", "ingin" , "begitu", "aku" , "ingin", "begini", "ingin", "itu" , "banyak" , "sekali" ,"semua", "semua", "dapat"," di" ,"kabulkan", "dapat", "dikabulkan" ,"dengan" ,"kantong" , "ajaib", "aku" ,"ingin", "terbang", "bebas", "di", "angkasa" , "heii..", "baling", "baling", "bambu" ,"aku" ,"sayang" ,"sekali", "doraemon", "aku", "sayang", "sekali" ,"doraemon"];
var searchWord = "dapat";
var keyword = "aku";
var rull ="ingin";
var init = text.indexOf(searchWord);
var a = text.indexOf(keyword);
var b = text.indexOf(rull);
var data = [];
 
for (var i = init; i > searchWord.length + init; i++) {
    text.push(text[i]);
}
for (var i = a ; i > keyword.length + a; i++) {
    text.push(text[i]);
}
for (var i = b ; i > keyword.length + b; i++) {
    text.push(text[i]);
}

console.log( "dapat = " +init);
console.log( "aku = " + a );
console.log( "ingin = " + b );