'use strict';
const userNameInput=document.getElementById('user-name');
const assessmentButton=document.getElementById('assessment');
const resultDivided=document.getElementById('result-area');
const tweetDivided=document.getElementById('tweet-area');

assessmentButton.onclick =()=> {
    const userName =userNameInput.value;
    if(userName.length===0){
        return alert('名前を入力してね！！')
    }
    console.log(userName);
  // TODO 診断結果表示エリアの作成
    while(resultDivided.firstChild){
        resultDivided.removeChild(resultDivided.firstChild);
    }
    const header=document.createElement('h3');
    header.innerText='診断結果';
    resultDivided.appendChild(header);

    const paragraph=document.createElement('p');
    const result=assessment(userName);
//    paragraph.innerText=result;
    resultDivided.appendChild(paragraph);
  // TODO ツイートエリアの作成

  const lunch=["ハンバーグ","焼肉","ハンバーガー","寿司","焼き魚","煮魚","サンドイッチ","ステーキ","ラーメン","蕎麦"];
  const a = lunch[ Math.floor( Math.random() * lunch.length ) ] ;
  paragraph.innerText=result+'の今日のおすすめの昼食は'+a;


  //  const hello='{result}の今日のおすすめの昼食は'+a;
  const anchor = document.createElement('a');
  const hrefValue =
    'https://twitter.com/intent/tweet?button_hashtag=' +
    encodeURIComponent('あなたの今日の昼食') +
    '&ref_src=twsrc%5Etfw';
  anchor.setAttribute('href', hrefValue);
  anchor.className = 'twitter-hashtag-button';
  anchor.setAttribute('data-text', 'paragraph.innerText');
  anchor.innerText = 'Tweet #あなたの今日の昼食';
  tweetDivided.appendChild(anchor);
  removeAllChildren(tweetDivided);


  // widgets.js の設定
  const script = document.createElement('script');
  script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
  tweetDivided.appendChild(script);
};

userNameInput.onkeydown = event => {
  if (event.key ==='Enter'){
    assessmentButton.onclick();
  }
}


/**
 * 名前を足して診断結果を返す関数
 * @param{string}userName
 * @return{string}診断結果
 */

function assessment(userName){
    const result = userName;
    return result;//診断結果を返す
}
