// Defina a senha para acesso
const PASSWORD = '2009';

// Função para verificar a senha
function checkPassword() {
    const passwordInput = document.getElementById('password').value;
    if (passwordInput === PASSWORD) {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('protectedContent').classList.remove('hidden');
    } else {
        alert('Senha incorreta!');
    }
}

// Função para abrir as abas
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Função para mostrar o campo de letra do hino
function showLyricsField() {
    const lyricsField = document.getElementById('song-lyrics');
    if (lyricsField.style.display === 'none' || lyricsField.style.display === '') {
        lyricsField.style.display = 'block';
    }
}

// Função para adicionar um hino
function addHymn() {
    const title = document.getElementById('song-title').value;
    const lyrics = document.getElementById('song-lyrics').value;

    if (title && lyrics) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${title}</strong><br><span class="lyrics">${lyrics}</span>
                              <button onclick="removeHymn(this)">Excluir</button>`;
        document.getElementById('hymnList').appendChild(listItem);

        // Limpar campos após adicionar
        document.getElementById('song-title').value = '';
        document.getElementById('song-lyrics').value = '';
    } else {
        alert('Preencha todos os campos.');
    }
}

// Função para remover um hino
function removeHymn(button) {
    const item = button.parentNode;
    item.parentNode.removeChild(item);
}

// Função para adicionar uma observação
function addObservation() {
    const title = document.getElementById('obs-title').value;
    const content = document.getElementById('obs-content').value;

    if (title && content) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${title}</strong><br><span>${content}</span>
                              <button onclick="removeObservation(this)">Excluir</button>`;
        document.getElementById('obsList').appendChild(listItem);

        // Limpar campos após adicionar
        document.getElementById('obs-title').value = '';
        document.getElementById('obs-content').value = '';
    } else {
        alert('Preencha todos os campos.');
    }
}

// Função para remover uma observação
function removeObservation(button) {
    const item = button.parentNode;
    item.parentNode.removeChild(item);
}

// Inicializa a proteção de senha e exibe o conteúdo protegido se a senha estiver correta
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o conteúdo está protegido
    document.getElementById('loginButton').addEventListener('click', checkPassword);
});
