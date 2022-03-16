const apiKey = 'wH5TioQQOuBEkGlzbFDgPugOQbffbfIo';

const http = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

http.then(resp => resp.json())
    .then(({ data }) => {
        const { url } = (data.images.original);

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

        console.log(url)
    })
    .catch(console.warn)