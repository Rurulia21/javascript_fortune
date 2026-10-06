// JavaScript
console.log('Hello world!');

const drawButton = document.querySelector('#drawButton');
const resultDisplay = document.querySelector('#resultDisplay');

document.body.classList.remove('daikichi', 'chukichi', 'kichi');

// ボタンがクリックされたら、動作させる
drawButton.addEventListener('click', () => {

    // 0から1未満のランダムな数字を生成する
    const randomNumber = Math.random();
    console.log(randomNumber); // コンソールに表示（確認用）

     // 0.09 未満だったら
    if (randomNumber < 0.09) {
        resultDisplay.textContent = '自炊';

    // 0.2 未満だったら
    } else if (randomNumber < 0.2) {
        resultDisplay.textContent = '焼肉';

    // 0.4 未満だったら
    } else if (randomNumber < 0.4) {
        resultDisplay.textContent = '寿司';

    // 0.6 未満だったら
    } else if (randomNumber < 0.6) {
        resultDisplay.textContent = 'イタリアン';

    // 0.8 未満だったら
    } else if (randomNumber < 0.8) {
        resultDisplay.textContent = 'ラーメン';
        document.body.classList.add('daikichi');

    // どちらでもない場合
    } else {
        resultDisplay.textContent = 'コンビニ弁当';
    }


});
