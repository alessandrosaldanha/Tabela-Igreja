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

function addHymn() {
    var title = document.getElementById('song-title').value;
    var lyrics = document.getElementById('song-lyrics').value;
    if (title && lyrics) {
        var list = document.getElementById('hymnList');
        var li = document.createElement('li');
        li.innerHTML = `<strong>${title}</strong><br>${lyrics}
                        <button class="delete-hymn" onclick="deleteHymn(this)">Excluir</button>
                        <button onclick="toggleLyrics(this)">Mostrar/Ocultar Letra</button>`;
        list.appendChild(li);
        document.getElementById('song-title').value = '';
        document.getElementById('song-lyrics').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function deleteHymn(button) {
    if (confirm('Tem certeza de que deseja excluir este hino?')) {
        var listItem = button.parentElement;
        listItem.parentElement.removeChild(listItem);
    }
}

function addObservation() {
    var title = document.getElementById('obs-title').value;
    var content = document.getElementById('obs-content').value;
    if (title && content) {
        var list = document.getElementById('obsList');
        var li = document.createElement('li');
        li.innerHTML = `<strong>${title}</strong><br>${content}
                        <button class="delete-hymn" onclick="deleteObservation(this)">Excluir</button>`;
        list.appendChild(li);
        document.getElementById('obs-title').value = '';
        document.getElementById('obs-content').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function deleteObservation(button) {
    if (confirm('Tem certeza de que deseja excluir esta observação?')) {
        var listItem = button.parentElement;
        listItem.parentElement.removeChild(listItem);
    }
}

function toggleLyrics(button) {
    var li = button.parentElement;
    var lyrics = li.childNodes[1];
    if (lyrics.style.display === "none" || lyrics.style.display === "") {
        lyrics.style.display = "block";
        button.textContent = "Ocultar Letra";
    } else {
        lyrics.style.display = "none";
        button.textContent = "Mostrar Letra";
    }
}

function showLyricsField() {
    document.getElementById('song-lyrics').style.display = 'block';
}
