Document.addEventListener("DOMContentLoaded",  () => {
    const artistasData = [
        { name: "Djavan", image:"./img/djavan.jpg"},
        { name: "Djavan", image:"./img/djavan.jpg"},
        { name: "Djavan", image:"./img/djavan.jpg"},
        { name: "Djavan", image:"./img/djavan.jpg"}
        
        ]; 
        
    const albunsData = [
        { name: "Djavan", image:"./img/djavan.jpg"},
        { name: "Djavan", image:"./img/djavan.jpg"},
        { name: "Djavan", image:"./img/djavan.jpg"}, 
        { name: "Djavan", image:"./img/djavan.jpg"}

        ];

        const artistas = document.querySelector(".artistas");
        const albuns = document.querySelector(".albuns");

        artistasData.forEach((artista) => {
            const cardArtista = document.createElement("div");
            cardArtista.classList.add("card-artista");

            cardArtista.innerHTML = `
            <img src="${artista.image}" alt="${artista.name}" />
            <h3>${artista.name}</h3>           
            
            `

            artistas.appendChild(cardArtista);

        });

        albunsData.forEach((album) => {
            const cardAlbum = document.createElement("div");
            cardAlbum.classList.add("card-album");

            cardAlbum.innerHTML = `
            <img src="${album.image}" alt="${album.name}" />
            <h3>${album.name}</h3>           
            
            `

            albuns.appendChild(cardArtista);

        });

});


 