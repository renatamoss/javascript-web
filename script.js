// Exercícios aula 7 
// No refresh trocar o número e no comments trocar o número, como no like
// Ao clicar no follow das sugestões, aumentar nÚmero de Following e depois de 5s dar um display none na lista
// pegar o valor do campo textarea e se estiver vazio, deixar as bordas vermelhas
// zerar os botões comments/refresh/likes do último comentário Tweet inserido


function goFollow() { // botão Follow localizado (navba)r e Somar +1 no botão Followers
    let contentButton = document.getElementsByTagName('button');
    let followers = document.getElementById('followNumber');

    if (contentButton[0].innerText == 'Follow') { //[1] índice onde está a posição do button dentro do HTML
        contentButton[0].innerText = 'Following';

        ++followers.innerText;

    } else {
        contentButton[0].innerText = 'Follow';

        --followers.innerText;
    }

}

function goTweet() { // Tweet (textarea) recebe value e Insere novo Tweet posição inicial
    let contentTweet = document.getElementById('myTweet'); // textarea: recebe value ou altera para red
    let listItem = document.getElementsByClassName('tweetItem')[0];// cada tweet individual: li
    let listTweets = document.getElementsByClassName('tweets')[1];// //novo tweet ul, item 1, pois é o segundo item da ul

    if (contentTweet.value != "") {
        let newTweet = listItem.cloneNode(true); // vai criar uma new variável, listItem: li clone
        newTweet.getElementsByTagName('p')[0].innerText = contentTweet.value; //essa nova variável: newTweet será um 'p'[0], que recebe o value do contentTweet: textarea
        newTweet.getElementsByClassName('likeNumbers')[0].innerText = '0'; //alterado o id para classe para que o novo li item[0] receba innetText '0';
        newTweet.getElementsByClassName('contRefresh')[0].innerText = '0';
        newTweet.getElementsByClassName('contComments')[0].innerText = '0';
        listTweets.prepend(newTweet); //esse novo Tweet ul: listTweets assumirá a posição inicial da lista
                        
        contentTweet.value = ""; // depois de assumir a posição inicial da lista, o textarea fica limpo
        contentTweet.style.borderColor = 'black';

    } else {
        contentTweet.style.borderColor = 'red';
    }
}

function goFollowSug() { //'Who to follow': ação button [2] para Following e Soma +1 Followings (navbar) 
    let contentButton = document.getElementsByTagName('button');
    let followings = document.getElementById('followingNumber');

    if (contentButton[2].innerText == 'Follow') {
        contentButton[2].innerText = 'Following';

        ++followings.innerText;
    } else {
        contentButton[2].innerText = 'Follow';

        --followings.innerText;
    }
}

function cleanSug() {// 'Who to follow': evento para display (none) após 1s
    let listProfile = document.getElementById('firstProfile');

    addEventListener(setTimeout(function () {
        listProfile.style.display = 'none';
    }, 1000))
}

function like() { // Tweets: coração vermelho 
    let tweetLiked = document.getElementById('like'); // muda a cor da imagem heart
    let likes = document.getElementsByClassName('likeNumbers')[0];// aumenta +1 no total de likes ao lado da imagem heart
    let favorites = document.getElementById('favoritesNumber');//soma +1 no favorites(nav bar) 

    // Exemplo de ternário: porém nesta lógica não é possível utilizar pois temos +2 aplicaçoes
    // tweetLiked.src = tweetLiked.src.indexOf('heart-red') < 0 ? './images/heart-red.svg' : './images/heart.svg';

    if (tweetLiked.src.indexOf('heart-red') == -1) { // IndexOf procura 'heart-red' no id 'like', não encontrado retornado -1
        tweetLiked.src = './images/heart-red.svg'; // e altera imagem 

        ++favorites.innerText;
        ++likes.innerText;
    } else {
        tweetLiked.src = './images/heart.svg';

        --favorites.innerText;
        --likes.innerText;
    }
}

function refresh() {// Tweets: refresh verde
    let tweetRefresh = document.getElementById('refresh'); // muda a cor da imagem refresh para verde
    let numberRefresh = document.getElementsByClassName('contRefresh')[0]; // soma +1 qdo clica na imagem refresh

    if (tweetRefresh.src.indexOf('refresh-green') == -1) {
        tweetRefresh.src = './images/refresh-green.svg';

        ++numberRefresh.innerText
    } else {
        tweetRefresh.src = './images/refresh.svg';

        --numberRefresh.innerText
    }
}

function comments() {// Tweets: comments azul
    let tweetComments = document.getElementById('comments');// muda a cor da imagem comments para azul
    let numberComments = document.getElementsByClassName('contComments')[0]// somo +1 qdo clica na imagem comments

    if (tweetComments.src.indexOf('comments-blue') == -1) {
        tweetComments.src = './images/comments-blue.svg';

        ++numberComments.innerText;
    } else {
        tweetComments.src = './images/comments.svg';

        --numberComments.innerText;
    }
}






























