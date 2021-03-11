//Exercícios aula 7 
//No refresh trocar o número e no comments trocar o número, como no like
//Ao clicar no follow das sugestões, aumentar numero de Following e depois de 5s dar um display none na lista

function goFollow() {
    let contentButton = document.getElementsByTagName('button'); //vai alterar os botões para Follow/Following
    let followers = document.getElementById('followNumber'); // vai somar +1 no total de seguidores
    let listProfile = document.getElementById('firstProfile'); //id criado dentro da primeira tag ul para interagir com o conteúdo Who to follow

    if (contentButton[1].innerText == 'Follow') { //[1] índice onde está a posição do button dentro do HTML
        contentButton[1].innerText = 'Following';

        ++followers.innerText;

    } else {
        contentButton[1].innerText = 'Follow';

        --followers.innerText;
    }

    if (contentButton[2].innerText == 'Follow') { //ação button [2]
        contentButton[2].innerText = 'Following';

        addEventListener(setTimeout(function () { //evento para display none após 5s
            listProfile.style.display = 'none';
        }, 5000))

    } else {
        contentButton[2].innerText = 'Follow';

        listProfile.style.display = 'block';      
    }
}

function like() {
    let tweetLiked = document.getElementById('like'); // muda a cor da imagem heart
    let likes = document.getElementById('likeNumbers');// aumenta +1 no total de likes ao lado da imagem heart
    let favorites = document.getElementById('favoritesNumber');//soma +1 no favorites(nav bar) qdo clica na imagem heart

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

function refresh() {
    let tweetRefresh = document.getElementById('refresh'); // muda a cor da imagem refresh para verde
    let numberRefresh = document.getElementById('contRefresh'); // soma +1 qdo clica na imagem refresh

    if (tweetRefresh.src.indexOf('refresh-green') == -1) {
        tweetRefresh.src = './images/refresh-green.svg';

        ++numberRefresh.innerText
    } else {
        tweetRefresh.src = './images/refresh.svg';

        --numberRefresh.innerText
    }
}

function comments() {
    let tweetComments = document.getElementById('comments');// muda a cor da imagem comments para azul
    let numberComments = document.getElementById('contComments')// somo +1 qdo clica na imagem comments

    if (tweetComments.src.indexOf('comments-blue') == -1) {
        tweetComments.src = './images/comments-blue.svg';

        ++numberComments.innerText;
    } else {
        tweetComments.src = './images/comments.svg';

        --numberComments.innerText;
    }
}




















