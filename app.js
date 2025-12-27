/* --- JDP DATABASE ENGINE (IndexedDB) --- */
const DB_NAME = "JDP_System_DB";
const DB_VERSION = 1;
let db;

// Abre o banco de dados
const request = indexedDB.open(DB_NAME, DB_VERSION);

request.onupgradeneeded = (e) => {
    db = e.target.result;
    // Cria a gaveta para vídeos e músicas
    if (!db.objectStoreNames.contains("midias")) {
        db.createObjectStore("midias", { keyPath: "id" });
    }
};

request.onsuccess = (e) => {
    db = e.target.result;
    console.log("Banco de Dados JDP Pronto!");
    recuperarMidiaSalva(); // Tenta carregar o vídeo assim que abre
};

// Função para salvar o vídeo de publicidade
async function salvarVideoNoBanco(arquivo) {
    const transacao = db.transaction(["midias"], "readwrite");
    const loja = transacao.objectStore("midias");
    
    const registro = {
        id: "video_publicidade",
        arquivo: arquivo, // Salva o arquivo real (Blob)
        nome: arquivo.name,
        data: new Date().toLocaleString()
    };

    loja.put(registro);
    transacao.oncomplete = () => {
        alert("Publicidade gravada permanentemente no sistema!");
    };
}

// Função para recuperar o vídeo ao abrir o app ou atualizar
function recuperarMidiaSalva() {
    const transacao = db.transaction(["midias"], "readonly");
    const loja = transacao.objectStore("midias");
    const consulta = loja.get("video_publicidade");

    consulta.onsuccess = () => {
        if (consulta.result) {
            const videoUrl = URL.createObjectURL(consulta.result.arquivo);
            const player = document.getElementById('adVideoPlayer');
            player.src = videoUrl;
            player.style.display = 'block';
            document.querySelector('.ad-placeholder').style.display = 'none';
            player.play().catch(() => console.log("Aguardando interação para tocar"));
        }
    };
}
/* --- JDP DATABASE ENGINE (IndexedDB) --- */
const DB_NAME = "JDP_System_DB";
const DB_VERSION = 1;
let db;

// Abre o banco de dados
const request = indexedDB.open(DB_NAME, DB_VERSION);

request.onupgradeneeded = (e) => {
    db = e.target.result;
    // Cria a gaveta para vídeos e músicas
    if (!db.objectStoreNames.contains("midias")) {
        db.createObjectStore("midias", { keyPath: "id" });
    }
};

request.onsuccess = (e) => {
    db = e.target.result;
    console.log("Banco de Dados JDP Pronto!");
    recuperarMidiaSalva(); // Tenta carregar o vídeo assim que abre
};

// Função para salvar o vídeo de publicidade
async function salvarVideoNoBanco(arquivo) {
    const transacao = db.transaction(["midias"], "readwrite");
    const loja = transacao.objectStore("midias");
    
    const registro = {
        id: "video_publicidade",
        arquivo: arquivo, // Salva o arquivo real (Blob)
        nome: arquivo.name,
        data: new Date().toLocaleString()
    };

    loja.put(registro);
    transacao.oncomplete = () => {
        alert("Publicidade gravada permanentemente no sistema!");
    };
}

// Função para recuperar o vídeo ao abrir o app ou atualizar
function recuperarMidiaSalva() {
    const transacao = db.transaction(["midias"], "readonly");
    const loja = transacao.objectStore("midias");
    const consulta = loja.get("video_publicidade");

    consulta.onsuccess = () => {
        if (consulta.result) {
            const videoUrl = URL.createObjectURL(consulta.result.arquivo);
            const player = document.getElementById('adVideoPlayer');
            player.src = videoUrl;
            player.style.display = 'block';
            document.querySelector('.ad-placeholder').style.display = 'none';
            player.play().catch(() => console.log("Aguardando interação para tocar"));
        }
    };
}
