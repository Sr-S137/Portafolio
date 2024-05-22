let posts = [];
function addPost() {
    // - Obtener el texto de la publicación - //
    const text = document.getElementById("post-text").value;
    // - Obtener el archivo multimedia que se seleccionó -//
    const file = document.getElementById("post-file").files[0];

    // - Comprueba si el usuario ha ingresado texto o ha seleccionado un archovo -//
    if (text.trim() === "" && !file) {
        alert("Por favor, escribe algo o seleccciona un archivo multimedia.");
        return;
    }

    const post = {
        id: Date.now(),
        text: text,
        file: file
    };

    // - Agrega el objeto "post" a la matriz - // 

    posts.push(post);

    // - Limpia el área de texto y el campo de selección de archivos - //

    document.getElementById("post-text").value = "";
    document.getElementById("post-file").value = "";

    displayPosts();

}
    // - Define la fonción para borrar los post - //
function deletePost(id) {

    posts = posts.filter(post => post.id !== id);
        // - Llama a la fonción "displayPosts()" para mostrar las demás - //
    displayPosts();
}

function displayPosts() {
    const postsContainer = document.getElementById("posts")

    postsContainer.innerHTML = "";
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        let content = `<p>${post.text}</p>`;

        if (post.file) {
            if (post.file.type.startsWith("image/")) {
                content += `<img width="320" height="240" src="${URL.createObjectURL(post.file)}" alt="Image">`;
            } else if (post.file.type.startsWith("video/")) {
                content += `<video width="320" heigth="240" controls> 
                <source src="${URL.createObjectURL(post.file)}" type="${post.file.type}">
                Your browser does not support the video tag.<video/>`;
            }
        }

        content += `<button onclick="deletePost(${post.id})">Eliminar</button>`;

        postElement.innerHTML = content;

        postsContainer.appendChild(postElement);
    });
}

displayPosts();