let gayest = 0
let tt = 0
let aa = 0
let ii = 0
let ll = 0 
let ss = 0
let jj = 0
let sss = 0
async function genius(){


setInterval(function(){
let t = document.getElementById('t')
let a = document.getElementById('a')
let i = document.getElementById('i')
let l = document.getElementById('l')
let s = document.getElementById('z')
let j = document.getElementById('j')
let ssss = document.getElementById('s1')
if(tt < 100){
t.innerHTML = tt
tt += 1
}
if(tt === 100 && t.innerHTML != "t"){
t.innerHTML = "t"
}
if(aa < 200){
a.innerHTML = aa
aa += 1
}
if(aa === 200 && a.innerHTML != "a"){
a.innerHTML = "a"
}

if(ii < 300){
i.innerHTML = ii
ii += 1
}
if(ii === 300 && i.innerHTML != "i"){
i.innerHTML = "i"
}
if(ll < 400){
l.innerHTML = ll
ll += 1
}
if(ll === 400 && l.innerHTML != "l"){
l.innerHTML = "l"
}
if(ss < 500){
z.innerHTML = ss
ss += 1
}
if(ss === 500 && z.innerHTML != "s"){
z.innerHTML = "s"
}
if(jj < 600){
j.innerHTML = jj
jj += 1
}
if(jj === 600 && j.innerHTML != "j"){
j.innerHTML = "j"
}
if(sss < 700){
ssss.innerHTML = sss
sss += 1
}
if(sss === 700 && ssss.innerHTML != "s"){
ssss.innerHTML = "s"
}
let c1 = Math.floor(Math.random() * 10)
let c2 = Math.floor(Math.random() * 10)
let c3 = Math.floor(Math.random() * 10)
let c4 = Math.floor(Math.random() * 10)
let c5 = Math.floor(Math.random() * 10)
let c6 = Math.floor(Math.random() * 10)

let d = document.getElementById('c1')
let d1 = document.getElementById('c2')
let d2 = document.getElementById('c3')
let d3 = document.getElementById('c4')
let d4 = document.getElementById('c5')
let d5 = document.getElementById('c6')
if(c1 === c4 && c2 === c5 && c3 === c6){
let tt = document.getElementById('test')
gayest += 1
tt.innerHTML = "были равные числа дибил уже " + gayest + " раз!!!!!!!!!!!!!!!!!!!!!!!!!!"
console.log(gayest)
}
d.innerHTML = c1
d1.innerHTML = c2
d2.innerHTML = c3
d3.innerHTML = c4
d4.innerHTML = c5
d5.innerHTML = c6
}, 1)
}
window.onload = genius