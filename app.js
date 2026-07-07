/* ============ DATA ============ */

const MENU = [
 {jp:"枝豆", ro:"edamame", en:"Boiled salted soybeans. The universal opener — arrives fast, disappears faster.", price:"¥400–600", tags:["soy"], drink:false},
 {jp:"唐揚げ", ro:"karaage", en:"Japanese fried chicken: juicy, garlicky, soy-marinated. The single most-ordered izakaya dish.", price:"¥600–900", tags:["wheat","soy","sometimes egg"], drink:false},
 {jp:"刺身盛り合わせ", ro:"sashimi moriawase", en:"Assorted sashimi platter — the chef's daily selection of raw fish. Say the size: for 2 people, for 3 people.", price:"¥1,200–2,500", tags:["raw fish","soy (sauce)"], drink:false},
 {jp:"焼き鳥", ro:"yakitori", en:"Grilled chicken skewers. 'Tare' = sweet soy glaze, 'shio' = salt. Order 2–3 kinds per person.", price:"¥200–350 /skewer", tags:["soy & wheat (tare)"], drink:false},
 {jp:"だし巻き卵", ro:"dashimaki tamago", en:"Rolled omelet soaked in dashi stock. Soft, warm, quietly perfect.", price:"¥550–800", tags:["egg","fish dashi"], drink:false},
 {jp:"ポテトサラダ", ro:"poteto sarada", en:"Japanese potato salad — creamy, often with cucumber and ham. Every shop has its own version and regulars judge shops by it.", price:"¥450–650", tags:["egg (mayo)","often pork (ham)"], drink:false},
 {jp:"揚げ出し豆腐", ro:"agedashi tōfu", en:"Fried tofu in hot dashi broth. Crisp outside, custard inside.", price:"¥500–700", tags:["soy","wheat","fish dashi"], drink:false},
 {jp:"冷奴", ro:"hiyayakko", en:"Chilled tofu with ginger and bonito flakes. Clean and refreshing between rich plates.", price:"¥400–550", tags:["soy","fish flakes on top"], drink:false},
 {jp:"ほっけ", ro:"hokke", en:"Grilled atka mackerel — a huge, buttery butterflied fish for the table. Looks intimidating, tastes incredible.", price:"¥900–1,600", tags:["fish"], drink:false},
 {jp:"もつ煮込み", ro:"motsu nikomi", en:"Simmered offal stew in miso. Deep, warming, and beloved by locals — the adventurous pick.", price:"¥550–800", tags:["pork or beef offal","miso (soy)"], drink:false},
 {jp:"焼きおにぎり", ro:"yaki onigiri", en:"Grilled rice ball brushed with soy sauce. Order it at the end — the 'shime' is the ritual closing carb of an izakaya night.", price:"¥350–550", tags:["soy","wheat"], drink:false, shime:true},
 {jp:"お茶漬け", ro:"ochazuke", en:"Rice in hot tea/dashi broth with toppings. The gentlest possible 'shime' — the dish that officially ends the night.", price:"¥500–750", tags:["fish dashi"], drink:false, shime:true},
 {jp:"生ビール", ro:"nama bīru", en:"Draft beer — Asahi, Kirin, Sapporo, or Yebisu, depending on the shop's contract (see 'the big four' below).", price:"¥550–800", tags:[], drink:true},
 {jp:"ハイボール", ro:"haibōru", en:"Whisky highball — the way Japan drinks whisky. Light, fizzy, made for fried food.", price:"¥500–700", tags:[], drink:true},
 {jp:"レモンサワー", ro:"remon sawā", en:"Lemon sour: shochu + soda + lemon. The people's drink.", price:"¥500–700", tags:[], drink:true},
 {jp:"梅酒", ro:"umeshu", en:"Plum liqueur — sweet, mellow, hugely popular. Order 'rokku' (on the rocks) or 'soda-wari' (with soda).", price:"¥500–700", tags:[], drink:true},
 {jp:"ゆず酒", ro:"yuzu-shu", en:"Yuzu citrus liqueur — fragrant and refreshing. The favorite of people who claim they don't like alcohol.", price:"¥500–750", tags:[], drink:true},
 {jp:"日本酒", ro:"nihonshu", en:"Sake. Ask for the staff pick: 'osusume'.", price:"¥600–1,200", tags:[], drink:true},
 {jp:"ウーロン茶", ro:"ūron-cha", en:"Oolong tea — the standard non-alcohol choice, nobody blinks.", price:"¥300–450", tags:[], drink:true},
];

const PHRASES = [
 {jp:"何名様ですか?", ro:"Nan-mei sama desu ka?", mean:"“How many people?”", reply:"Show fingers, or say: <b>「2人です」 Futari desu</b> (two people). 1 = hitori, 3 = san-nin, 4 = yo-nin."},
 {jp:"おタバコは吸われますか?", ro:"O-tabako wa suwaremasu ka?", mean:"“Do you smoke?” — deciding your seat.", reply:"No: <b>「吸いません」 Suimasen.</b> Yes: <b>「吸います」 Suimasu.</b>"},
 {jp:"こちら、お通しです", ro:"Kochira, otōshi desu", mean:"“Here is your otoshi” — the small cover-charge dish (see the Guide page). Not a mistake, not a gift.", reply:"Just say <b>「ありがとうございます」 Arigatō gozaimasu</b> and enjoy it."},
 {jp:"お飲み物はお決まりですか?", ro:"O-nomimono wa o-kimari desu ka?", mean:"“Ready to order drinks?” — drinks always come first.", reply:"The classic: <b>「とりあえず生2つ」 Toriaezu nama futatsu</b> (two draft beers for now)."},
 {jp:"ご注文は以上でよろしいですか?", ro:"Go-chūmon wa ijō de yoroshii desu ka?", mean:"“Is that everything (for now)?”", reply:"Yes: <b>「はい」 Hai.</b> You can always order more later — everyone does."},
 {jp:"ラストオーダーになります", ro:"Rasuto ōdā ni narimasu", mean:"“It's last order” — your final chance to order food/drinks. Not an eviction; you can stay a while.", reply:"Order your shime now, or say <b>「大丈夫です」 Daijōbu desu</b> (we're good)."},
 {jp:"お会計、ご一緒でよろしいですか?", ro:"O-kaikei, go-issho de yoroshii desu ka?", mean:"“Pay together on one bill?” — split bills are uncommon at izakaya.", reply:"Together: <b>「はい、一緒で」 Hai, issho de.</b> Then split cash among yourselves."},
 {jp:"お支払いは現金のみになります", ro:"O-shiharai wa genkin nomi ni narimasu", mean:"“Cash only.” Still common at small shops — carry ¥5,000–10,000/person to be safe.", reply:"If you're short: <b>「ATMはどこですか?」 ATM wa doko desu ka?</b> Convenience-store ATMs take foreign cards."},
];

/* ============ ILLUSTRATIONS (original SVG, rights-free) ============ */

const P='<circle cx="36" cy="40" r="26" fill="#FFFFFF" stroke="#25436B" stroke-width="3"/>'; // standard plate
const B='<path d="M12 38 a24 18 0 0 0 48 0 z" fill="#25436B"/><ellipse cx="36" cy="38" rx="24" ry="7" fill="#1C3252"/>'; // bowl
const ILLUST={
"edamame":`<svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">${P}<g fill="#6FA84B" stroke="#4E7D33" stroke-width="1.5"><ellipse cx="28" cy="36" rx="11" ry="4.5" transform="rotate(-20 28 36)"/><ellipse cx="42" cy="40" rx="11" ry="4.5" transform="rotate(15 42 40)"/><ellipse cx="34" cy="48" rx="11" ry="4.5" transform="rotate(-8 34 48)"/></g><g fill="#8CC46A"><circle cx="24" cy="34" r="2"/><circle cx="30" cy="37" r="2"/><circle cx="38" cy="39" r="2"/><circle cx="45" cy="41" r="2"/><circle cx="30" cy="47" r="2"/><circle cx="38" cy="49" r="2"/></g></svg>`,
"karaage":`<svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">${P}<g fill="#C98A3B" stroke="#9A6524" stroke-width="1.5"><path d="M25 34q-6 4-3 9t9 3q5-1 5-7t-11-5z"/><path d="M42 30q-5 2-4 8t8 5q6-1 5-8t-9-5z"/><path d="M34 45q-5 2-3 7t8 4q5-2 4-7t-9-4z"/></g><path d="M49 47a8 8 0 0 1 8-8l-1 9z" fill="#F2D648" stroke="#C9A81E" stroke-width="1.5"/><g fill="#E8B968"><circle cx="27" cy="38" r="1.4"/><circle cx="44" cy="34" r="1.4"/><circle cx="37" cy="49" r="1.4"/></g></svg>`,
"sashimi moriawase":`<svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">${P}<g transform="rotate(-12 36 40)"><rect x="20" y="30" width="20" height="8" rx="2" fill="#C0392B"/><rect x="23" y="40" width="20" height="8" rx="2" fill="#D35445"/><g stroke="#F2D9D2" stroke-width="1.4"><line x1="24" y1="30" x2="24" y2="38"/><line x1="30" y1="30" x2="30" y2="38"/><line x1="36" y1="30" x2="36" y2="38"/></g></g><rect x="42" y="34" width="14" height="7" rx="2" fill="#FDF6EC" stroke="#E2CDB4"/><ellipse cx="47" cy="50" rx="8" ry="4" fill="#5E8C4A"/><circle cx="30" cy="53" r="3.4" fill="#E9F1DC" stroke="#9BBF6C" stroke-width="1.5"/></svg>`,
"yakitori":`<svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-28 36 36)"><line x1="10" y1="30" x2="62" y2="30" stroke="#B9A47E" stroke-width="2.6"/><g fill="#A9612F" stroke="#7C4218" stroke-width="1.5"><circle cx="24" cy="30" r="6.4"/><circle cx="36" cy="30" r="6.4"/><circle cx="48" cy="30" r="6.4"/></g><g fill="#D69256"><circle cx="22" cy="28" r="1.8"/><circle cx="34" cy="28" r="1.8"/><circle cx="46" cy="28" r="1.8"/></g></g><g transform="rotate(-28 36 52)"><line x1="12" y1="52" x2="64" y2="52" stroke="#B9A47E" stroke-width="2.6"/><g fill="#B06A35" stroke="#7C4218" stroke-width="1.5"><circle cx="26" cy="52" r="6"/><circle cx="49" cy="52" r="6"/></g><rect x="34" y="46.6" width="7" height="10.8" rx="2.6" fill="#7FA34E" stroke="#5B7A34" stroke-width="1.4"/></g></svg>`,
"dashimaki tamago":`<svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">${P}<g stroke="#C99A26" stroke-width="1.6"><rect x="18" y="32" width="17" height="15" rx="4" fill="#F4CE4F"/><rect x="38" y="34" width="17" height="15" rx="4" fill="#F6D765"/></g><path d="M22 44a5.5 5.5 0 0 1 9-4" fill="none" stroke="#E0B23A" stroke-width="1.6"/><path d="M42 46a5.5 5.5 0 0 1 9-4" fill="none" stroke="#E0B23A" stroke-width="1.6"/><ellipse cx="36" cy="53" rx="7" ry="3.4" fill="#FDF6EC" stroke="#E2CDB4"/></svg>`,
"poteto sarada":`<svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">${P}<path d="M20 46q-2-12 8-15t15 1q8 4 8 12t-9 6q-11-2-22-4z" fill="#F4E9CF" stroke="#D6C29A" stroke-width="1.6"/><g><circle cx="28" cy="38" r="2.2" fill="#E58A3A"/><circle cx="40" cy="35" r="2.2" fill="#7FA34E"/><circle cx="46" cy="42" r="2.2" fill="#E58A3A"/><circle cx="33" cy="44" r="2.2" fill="#7FA34E"/><rect x="37" y="41" width="5" height="3.4" rx="1" fill="#E9A5A0"/></g></svg>`,
"agedashi tōfu":`<svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">${B}<rect x="26" y="22" width="20" height="16" rx="3" fill="#E8D3A4" stroke="#B99A5F" stroke-width="1.6"/><rect x="29" y="25" width="14" height="10" rx="2" fill="#F3E6C4"/><g fill="#7FA34E"><circle cx="30" cy="20" r="1.8"/><circle cx="36" cy="18.6" r="1.8"/><circle cx="42" cy="20" r="1.8"/></g><path d="M18 38a18 8 0 0 0 36 0" fill="#C98A3B" opacity=".45"/></svg>`,
"hiyayakko":`<svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="44" width="44" height="9" rx="3" fill="#25436B"/><g stroke="#D8DEE8" stroke-width="1.6"><rect x="24" y="24" width="24" height="20" rx="2.5" fill="#FDFDFB"/></g><line x1="24" y1="34" x2="48" y2="34" stroke="#E4E7EE" stroke-width="1.4"/><path d="M31 22q5-4 10 0t-3 5q-7 1-7-5z" fill="#8C5A32"/><circle cx="36" cy="20" r="2.6" fill="#C9A227"/></svg>`,
"hokke":`<svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><ellipse cx="34" cy="38" rx="24" ry="15" fill="#E3C08B" stroke="#B08B4F" stroke-width="2"/><path d="M56 30l10 8-10 8q3-8 0-16z" fill="#B08B4F"/><line x1="34" y1="24" x2="34" y2="52" stroke="#C9A268" stroke-width="2"/><g stroke="#A87F42" stroke-width="1.6" opacity=".8"><path d="M20 30q6 3 12 2"/><path d="M20 40q7 3 13 2"/><path d="M22 48q6 2 11 1"/><path d="M40 30q6 3 11 2"/><path d="M40 40q6 3 11 2"/></g><circle cx="16" cy="35" r="1.6" fill="#5A4526"/></svg>`,
"motsu nikomi":`<svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">${B}<path d="M14 38a22 10 0 0 1 44 0z" fill="#A85B2E"/><g fill="#C98A3B" stroke="#8A5322" stroke-width="1.3"><circle cx="26" cy="33" r="4.4"/><circle cx="38" cy="31" r="4.8"/><circle cx="48" cy="34" r="4"/></g><ellipse cx="32" cy="37" rx="4" ry="2" fill="#E8D3A4"/><g fill="#7FA34E"><circle cx="30" cy="28" r="1.7"/><circle cx="42" cy="26.6" r="1.7"/><circle cx="47" cy="29" r="1.7"/></g></svg>`,
"yaki onigiri":`<svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><ellipse cx="36" cy="56" rx="21" ry="5" fill="#EFE7D5" stroke="#D9CDB4"/><path d="M36 16q4 0 7 5l11 19q3 6-3 8a58 58 0 0 1-30 0q-6-2-3-8l11-19q3-5 7-5z" fill="#C98A3B" stroke="#8A5322" stroke-width="2"/><g stroke="#8A5322" stroke-width="2" opacity=".75"><line x1="26" y1="34" x2="46" y2="34"/><line x1="24" y1="41" x2="48" y2="41"/></g><path d="M30 21q6-3 12 0" stroke="#E8B968" stroke-width="2.4" fill="none"/></svg>`,
"ochazuke":`<svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">${B}<path d="M16 38a20 9 0 0 1 40 0z" fill="#D9E4C8"/><path d="M24 36q0-8 12-8t12 8z" fill="#FDFDFB" stroke="#E2E5DA" stroke-width="1.4"/><g fill="#C0392B"><circle cx="36" cy="30" r="2.6"/></g><g fill="#2F5D3A"><rect x="27" y="31" width="6" height="2.2" rx="1"/><rect x="40" y="32" width="6" height="2.2" rx="1"/></g><g stroke="#B9AF9C" stroke-width="1.8" fill="none" opacity=".8"><path d="M28 16q-2 4 0 7"/><path d="M36 13q-2 4 0 7"/><path d="M44 16q-2 4 0 7"/></g></svg>`,
};

/* ============ RENDER MENU ============ */
if(document.getElementById("menuList")){

const menuList = document.getElementById("menuList");
MENU.filter(m=>!m.drink).forEach(m=>{
  const d=document.createElement("div");
  d.className="tanzaku"+(m.shime?" shime":"");
  d.innerHTML=`<div class="ill" aria-hidden="true">${ILLUST[m.ro]||""}</div>
  <div class="content">
  <div class="row1"><span class="jp">${m.jp}</span><span class="price">approx. ${m.price}</span></div>
  <div class="romaji">${m.ro}</div>
  <div class="desc">${m.en}</div>
  ${m.shime?`<span class="chip shime">〆 shime — order last, to close the night</span>`:""}${m.tags.map(t=>`<span class="chip warn">${t}</span>`).join("")}
  </div>`;
  menuList.appendChild(d);
});
}

/* ============ ORDER SHEET ============ */
if(document.getElementById("orderFood")){

const qty = new Array(MENU.length).fill(0);
const foodBox=document.getElementById("orderFood");
const drinkBox=document.getElementById("orderDrinks");
MENU.forEach((m,i)=>{
  const d=document.createElement("div");
  d.className="order-item"; d.id="oi-"+i;
  d.innerHTML=`<div class="names"><span class="jp">${m.jp}</span><span class="en">${m.shime?"〆 shime · ":""}${m.ro} — approx. ${m.price}</span></div>
  <div class="counter">
    <button aria-label="remove one ${m.ro}" onclick="chg(${i},-1)">−</button>
    <span class="qty" id="q-${i}">0</span>
    <button aria-label="add one ${m.ro}" onclick="chg(${i},1)">＋</button>
  </div>`;
  (m.drink?drinkBox:foodBox).appendChild(d);
});
window.chg=function(i,v){
  qty[i]=Math.max(0,Math.min(9,qty[i]+v));
  document.getElementById("q-"+i).textContent=qty[i];
  document.getElementById("oi-"+i).classList.toggle("picked",qty[i]>0);
  document.getElementById("showOrderBtn").disabled = qty.every(q=>q===0);
};
document.getElementById("clearOrderBtn").onclick=()=>{
  qty.fill(0);
  MENU.forEach((_,i)=>{document.getElementById("q-"+i).textContent=0;
    document.getElementById("oi-"+i).classList.remove("picked");});
  document.getElementById("showOrderBtn").disabled=true;
};
const JP_NUM=["","1つ","2つ","3つ","4つ","5つ","6つ","7つ","8つ","9つ"];
document.getElementById("showOrderBtn").onclick=()=>{
  const box=document.getElementById("orderLines"); box.innerHTML="";
  MENU.forEach((m,i)=>{ if(qty[i]>0){
    const l=document.createElement("div"); l.className="line";
    l.innerHTML=`<span>${m.jp}</span><span class="n">× ${JP_NUM[qty[i]]}</span>`;
    box.appendChild(l);
  }});
  const total=qty.reduce((a,b)=>a+b,0);
  box.insertAdjacentHTML("beforeend",
    `<div class="qty-box">
       <span class="lbl">ご注文の合計 / Total items</span><br>
       <span class="big">${total}</span> <span style="font-size:1.25rem">点</span><br>
       <span class="lbl">We are ordering ${total} item${total>1?"s":""} in total</span>
     </div>`);
  openCard("orderCard");
};
}

/* ============ SHOWCARD open/close ============ */

function openCard(id){
  document.getElementById(id).classList.add("open");
  document.body.style.overflow="hidden";
}
document.querySelectorAll("[data-close]").forEach(b=>{
  b.onclick=()=>{ b.closest(".showcard").classList.remove("open");
    document.body.style.overflow=""; };
});

/* ============ PHRASES ============ */
if(document.getElementById("phraseList")){

const pl=document.getElementById("phraseList");
PHRASES.forEach(p=>{
  const d=document.createElement("details"); d.className="phrase";
  d.innerHTML=`<summary><span class="jp">「${p.jp}」</span><span class="romaji">${p.ro}</span></summary>
  <div class="body"><span class="meaning">${p.mean}</span><div class="reply">↩ How to answer: ${p.reply}</div></div>`;
  pl.appendChild(d);
});
}

/* ============ ASK RECOMMENDATION ============ */
if(document.getElementById("askCatSeg")){

const ASK_CATS={
  beef:{jp:"牛肉の料理", ro:"gyūniku no ryōri", en:"beef"},
  pork:{jp:"豚肉の料理", ro:"butaniku no ryōri", en:"pork"},
  chicken:{jp:"鶏肉の料理", ro:"toriniku no ryōri", en:"chicken"},
  seafood:{jp:"魚介の料理", ro:"gyokai no ryōri", en:"seafood"},
  veg:{jp:"野菜の料理", ro:"yasai no ryōri", en:"vegetables"},
  sake:{jp:"日本酒", ro:"nihonshu", en:"sake"},
  dessert:{jp:"デザート", ro:"dezāto", en:"dessert"},
  omakase:{jp:"このお店のおすすめ", ro:"kono o-mise no osusume", en:"the house specialty"},
};
const ASK_RO_NUM={500:"gohyaku-en",800:"happyaku-en",1000:"sen-en",1500:"sen-gohyaku-en",2000:"nisen-en"};
let askCat="beef", askBudget=1000;
function buildAsk(){
  const c=ASK_CATS[askCat];
  let jp, ro;
  if(askCat==="omakase"){
    jp = askBudget ? `${askBudget.toLocaleString()}円くらいで、このお店のおすすめは何ですか?`
                   : "このお店のおすすめは何ですか?";
    ro = askBudget ? `${ASK_RO_NUM[askBudget]} kurai de, kono o-mise no osusume wa nan desu ka?`
                   : "Kono o-mise no osusume wa nan desu ka?";
  }else{
    jp = askBudget ? `${c.jp}で、${askBudget.toLocaleString()}円くらいのおすすめはありますか?`
                   : `${c.jp}で、おすすめはありますか?`;
    ro = askBudget ? `${c.ro} de, ${ASK_RO_NUM[askBudget]} kurai no osusume wa arimasu ka?`
                   : `${c.ro} de, osusume wa arimasu ka?`;
  }
  return {jp, ro};
}
function renderAskPreview(){
  const {jp, ro}=buildAsk();
  document.getElementById("askPreviewJp").textContent=`「${jp}」`;
  document.getElementById("askPreviewRo").textContent=ro;
}
[["askCatSeg",b=>askCat=b.dataset.cat],["askBudgetSeg",b=>askBudget=+b.dataset.b]].forEach(([id,set])=>{
  const seg=document.getElementById(id);
  seg.querySelectorAll("button").forEach(b=>{
    b.onclick=()=>{ seg.querySelectorAll("button").forEach(x=>x.classList.remove("on"));
      b.classList.add("on"); set(b); renderAskPreview(); };
  });
});
document.getElementById("showAskBtn").onclick=()=>{
  const {jp}=buildAsk();
  document.getElementById("askLines").innerHTML=`<p style="font-size:1.7rem;line-height:1.7">${jp}</p>`;
  openCard("askCard");
};
renderAskPreview();
}

/* ============ SAY IT (point-and-show phrases) ============ */
if(document.getElementById("sayList")){

const SAY=[
 {scene:"ENTERING — 入店", items:[
  {en:"No reservation — can we get in?", jp:"予約していません。入れますか?(人数は指でお伝えします)", ro:"Yoyaku shiteimasen. Hairemasu ka?"},
  {en:"Non-smoking seats, please", jp:"禁煙席はありますか?", ro:"Kin'en-seki wa arimasu ka?"},
  {en:"Do you have an English menu?", jp:"英語のメニューはありますか?", ro:"Eigo no menyū wa arimasu ka?"},
 ]},
 {scene:"DURING THE MEAL — 食事中", items:[
  {en:"Small plates for sharing, please", jp:"取り皿をください", ro:"Torizara o kudasai"},
  {en:"One more of the same, please", jp:"同じものを、もうひとつください", ro:"Onaji mono o mō hitotsu kudasai"},
  {en:"Still eating this — please leave it", jp:"これは、まだ食べています", ro:"Kore wa mada tabete imasu"},
  {en:"Please clear this plate", jp:"これを下げてください", ro:"Kore o sagete kudasai"},
  {en:"What's the best way to drink this?", jp:"おすすめの飲み方を教えてください", ro:"Osusume no nomikata o oshiete kudasai"},
  {en:"Water, please (as a chaser)", jp:"お水をください", ro:"O-mizu o kudasai"},
 ]},
 {scene:"WHEN SOMETHING'S OFF — 困りごと", items:[
  {en:"Where is the restroom?", jp:"トイレはどこですか?", ro:"Toire wa doko desu ka?"},
  {en:"Do you have Wi-Fi?", jp:"Wi-Fiはありますか?", ro:"Waifai wa arimasu ka?"},
  {en:"May I take photos?", jp:"写真を撮ってもいいですか?", ro:"Shashin o totte mo ii desu ka?"},
  {en:"My order hasn't arrived yet…", jp:"注文したものが、まだ来ていないようです。ご確認いただけますか?", ro:"Chūmon shita mono ga mada kite inai yō desu"},
  {en:"I don't think we ordered this…", jp:"これは注文していないと思います。ご確認いただけますか?", ro:"Kore wa chūmon shite inai to omoimasu"},
 ]},
 {scene:"PAYING & LEAVING — 会計", items:[
  {en:"The bill, please", jp:"お会計をお願いします", ro:"O-kaikei o onegaishimasu"},
  {en:"Can I pay by card?", jp:"カードは使えますか?", ro:"Kādo wa tsukaemasu ka?"},
  {en:"I'll pay in cash", jp:"現金で払います", ro:"Genkin de haraimasu"},
  {en:"A receipt, please", jp:"領収書をください", ro:"Ryōshūsho o kudasai"},
  {en:"Thank you — it was delicious!", jp:"ごちそうさまでした!とても美味しかったです", ro:"Gochisōsama deshita! Totemo oishikatta desu"},
 ]},
];
const sayList=document.getElementById("sayList");
SAY.forEach(group=>{
  const h=document.createElement("div"); h.className="subhead"; h.textContent=group.scene;
  sayList.appendChild(h);
  const g=document.createElement("div"); g.className="say-grid";
  group.items.forEach(it=>{
    const b=document.createElement("button"); b.className="say-tile"; b.type="button";
    b.innerHTML=`<span class="en">${it.en}</span><span class="jp">${it.jp}</span>`;
    b.onclick=()=>{
      document.getElementById("sayLines").innerHTML=
        `<p style="font-size:1.8rem;line-height:1.7">${it.jp}</p>
         <p style="font-family:var(--font-body);font-weight:400;font-size:.85rem;color:var(--sumi-soft);margin-top:10px">${it.ro}<br>${it.en}</p>`;
      openCard("sayCard");
    };
    g.appendChild(b);
  });
  sayList.appendChild(g);
});
}

/* ============ OMAKASE ORDER (leave it to the kitchen) ============ */
if(document.getElementById("omkList")){

const OMK_HIN={1:"ippin",2:"ni-hin",3:"san-pin",4:"yon-hin",5:"go-hin",6:"rop-pin"};
const OMK_YEN={800:"happyaku-en",1000:"sen-en",1500:"sen-gohyaku-en"};
const OMK=[
 {en:"Quick snacks to start", desc:"Fast-arriving nibbles while you settle in",
  def:2, cap:false, jp:(n,c)=>`すぐ出るおつまみを、${n}品くらいお願いできますか?`,
  ro:(n,c)=>`Sugu deru otsumami o, ${OMK_HIN[n]} kurai onegai dekimasu ka?`},
 {en:"The shop's best", desc:"Let the kitchen pick its favorites",
  def:3, cap:true,
  jp:(n,c)=>c?`このお店のおすすめを、1品${c.toLocaleString()}円くらいまでで、${n}品お願いできますか?`
            :`このお店のおすすめを、${n}品くらいお願いできますか?`,
  ro:(n,c)=>c?`Kono o-mise no osusume o, ippin ${OMK_YEN[c]} kurai made de, ${OMK_HIN[n]} onegai dekimasu ka?`
            :`Kono o-mise no osusume o, ${OMK_HIN[n]} kurai onegai dekimasu ka?`},
 {en:"A bit more — something different", desc:"Round two: dishes you haven't had yet",
  def:2, cap:true,
  jp:(n,c)=>c?`もう少し食べたいので、1品${c.toLocaleString()}円くらいまでで、違う料理を${n}品お願いできますか?`
            :`もう少し食べたいので、違う料理を${n}品お願いできますか?`,
  ro:(n,c)=>c?`Mō sukoshi tabetai node, ippin ${OMK_YEN[c]} kurai made de, chigau ryōri o ${OMK_HIN[n]} onegai dekimasu ka?`
            :`Mō sukoshi tabetai node, chigau ryōri o ${OMK_HIN[n]} onegai dekimasu ka?`},
];
const omkQty=OMK.map(o=>o.def);
const omkCap=OMK.map(o=>o.cap?1000:0);
const omkList=document.getElementById("omkList");
OMK.forEach((o,i)=>{
  const d=document.createElement("div"); d.className="omk-item";
  d.innerHTML=`
   <div class="top">
     <div><span class="en">${o.en}</span><br><span class="desc">${o.desc}</span></div>
     <div style="text-align:center">
       <div class="counter">
         <button aria-label="fewer dishes" onclick="omkChg(${i},-1)">−</button>
         <span class="qty" id="omk-q-${i}">${o.def}</span>
         <button aria-label="more dishes" onclick="omkChg(${i},1)">＋</button>
       </div>
       <span class="desc">dishes</span>
     </div>
   </div>
   <div class="jp-prev" id="omk-p-${i}"></div>
   ${o.cap?`<div class="seg mini" id="omk-cap-${i}">
     <button data-c="0">No cap</button>
     <button data-c="800">~¥800/dish</button>
     <button data-c="1000" class="on">~¥1,000/dish</button>
     <button data-c="1500">~¥1,500/dish</button>
   </div>`:""}
   <div class="row2">
     <span style="font-size:.74rem;color:var(--sumi-soft)" id="omk-e-${i}"></span>
     <button class="btn-inline" onclick="omkShow(${i})">Show to staff 🏮</button>
   </div>`;
  omkList.appendChild(d);
  if(o.cap){
    const seg=d.querySelector(".seg.mini");
    seg.querySelectorAll("button").forEach(b=>{
      b.onclick=()=>{ seg.querySelectorAll("button").forEach(x=>x.classList.remove("on"));
        b.classList.add("on"); omkCap[i]=+b.dataset.c; omkPrev(i); };
    });
  }
});
function omkPrev(i){
  const n=omkQty[i], c=omkCap[i];
  document.getElementById("omk-q-"+i).textContent=n;
  let prev=OMK[i].jp(n,c).replace(`${n}品`,`<span class="n">${n}品</span>`);
  if(c) prev=prev.replace(`1品${c.toLocaleString()}円くらいまでで`,
    `<span style="color:var(--ai)">1品${c.toLocaleString()}円くらいまでで</span>`);
  document.getElementById("omk-p-"+i).innerHTML=prev;
  document.getElementById("omk-e-"+i).innerHTML=
    `You're asking for <b>${n} dish${n>1?"es":""}</b>${c?`, up to ~¥${c.toLocaleString()} each`:""}.`;
}
window.omkChg=function(i,v){ omkQty[i]=Math.max(1,Math.min(6,omkQty[i]+v)); omkPrev(i); };
window.omkShow=function(i){
  const n=omkQty[i], c=omkCap[i];
  document.getElementById("sayLines").innerHTML=
    `<p style="font-size:1.7rem;line-height:1.7">${OMK[i].jp(n,c)}</p>
     <div class="qty-box">
       <span class="lbl">ご注文の品数 / Dishes</span><br>
       <span class="big">${n}</span> <span style="font-size:1.25rem">品</span>
       ${c?`<div class="hr"></div>
       <span class="lbl">ご予算(1品あたり) / Per dish</span><br>
       <span class="mid">〜¥${c.toLocaleString()}</span><span style="font-size:.95rem"> くらい</span>`:""}
       <br><span class="lbl">We are ordering ${n} dish${n>1?"es":""} in total${c?` · up to ~¥${c.toLocaleString()} each`:""}</span>
     </div>
     <p style="font-family:var(--font-body);font-weight:400;font-size:.85rem;color:var(--sumi-soft);margin-top:14px">${OMK[i].ro(n,c)}<br>${OMK[i].en}</p>`;
  openCard("sayCard");
}
OMK.forEach((_,i)=>omkPrev(i));
}

/* ============ BUDGET ============ */
if(document.getElementById("pMinus")){

let people=2, drinkLv=1, foodLv=1;
const DRINK=[400,1300,2400,3700];      // per person, avg yen
const FOOD=[1300,2000,2800];           // per person
const OTOSHI=500;
function calcBudget(){
  const base=OTOSHI+DRINK[drinkLv]+FOOD[foodLv];
  const lo=Math.round(base*0.85/100)*100, hi=Math.round(base*1.15/100)*100;
  document.getElementById("yenOut").textContent=`¥${lo.toLocaleString()} – ¥${hi.toLocaleString()}`;
  const grpLo=lo*people, grpHi=hi*people;
  document.getElementById("yenDetail").innerHTML=
   `Group of ${people}: ¥${grpLo.toLocaleString()} – ¥${grpHi.toLocaleString()} total<br>
    Includes otoshi (~¥500/person). All figures are rough guides. Cash recommended.`;
}
document.getElementById("pMinus").onclick=()=>{people=Math.max(1,people-1);
  document.getElementById("pCount").textContent=people;calcBudget();};
document.getElementById("pPlus").onclick=()=>{people=Math.min(12,people+1);
  document.getElementById("pCount").textContent=people;calcBudget();};
[["drinkSeg",v=>drinkLv=v],["foodSeg",v=>foodLv=v]].forEach(([id,set])=>{
  const seg=document.getElementById(id);
  seg.querySelectorAll("button").forEach(b=>{
    b.onclick=()=>{ seg.querySelectorAll("button").forEach(x=>x.classList.remove("on"));
      b.classList.add("on"); set(+b.dataset.v); calcBudget(); };
  });
});
calcBudget();
}


/* ============ SHARE ============ */
(function(){
  const box=document.getElementById("shareBox"); if(!box) return;
  const text=box.dataset.text||document.title, url=location.href, enc=encodeURIComponent;
  let btns="";
  if(navigator.share) btns+=`<button class="share-btn main" id="shareNative">\u{1F4E4} Share</button>`;
  btns+=`<a class="share-btn" target="_blank" rel="noopener" href="https://twitter.com/intent/tweet?text=${enc(text)}&url=${enc(url)}">\u{1D54F} Post</a>`;
  btns+=`<a class="share-btn" target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=${enc(url)}">f\u2002Facebook</a>`;
  btns+=`<a class="share-btn" target="_blank" rel="noopener" href="https://social-plugins.line.me/lineit/share?url=${enc(url)}">LINE</a>`;
  btns+=`<button class="share-btn" id="shareCopy">\u{1F517} Copy link</button>`;
  box.innerHTML=`<h3>Pass it down the counter</h3>
    <p style="font-size:.85rem;color:var(--sumi-soft);margin:4px 0 0">Send this to whoever is coming to Japan with you.</p>
    <div class="share-btns">${btns}</div>`;
  const nat=document.getElementById("shareNative");
  if(nat) nat.onclick=()=>navigator.share({title:document.title,text,url}).catch(()=>{});
  const cp=document.getElementById("shareCopy");
  cp.onclick=()=>{ navigator.clipboard.writeText(url).then(()=>{
    cp.textContent="\u2713 Copied!"; setTimeout(()=>cp.innerHTML="\u{1F517} Copy link",1800); }); };
})();
