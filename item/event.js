let handler_content = () => {
    alert('Sim salabim muncullah elemen HTML')
    let contents = document.querySelector('.contents')
    contents.removeAttribute('hidden')
}
let incremment = () => {
    let count = document.querySelector('#count')
    count.innerText++;

    if (count.innerText == 7) {
        const hidden_message = document.createElement('h4');
        hidden_message.innerText = 'Selamat Anda menemukan hadiah tersembunyi';
        const image = document.createElement('img')
        image.setAttribute('src', 'https://blogger.googleusercontent.com/img/a/AVvXsEhvRwT9pWkukXQ0QTLfDxpVa917fE9LFv8ujPvVUutd2WvMr4OG6fNOqs4n9fSd_pzcfT-WisPqXqg8XGxMH4cjkP6cL_EQQH5huuRIWvpTpuxGdOzsAUxg_P4LiFzBLG3OdqJxQJ0Up5mMHq-D8QkN0iTNTTHKjQkh76Qjtr_E57otUpoY9VwAQeL9Ww=w640-h360')
        let contents = document.querySelector('.contents')
        contents.appendChild(hidden_message).appendChild(image)
    }
}