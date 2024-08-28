const substitutionMap = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Crea un mapa de sustitución inverso para desencriptar
const reverseSubstitutionMap = Object.fromEntries(
    Object.entries(substitutionMap).map(([key, value]) => [value, key])
);

// Función para encriptar texto
function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = transformText(inputText, substitutionMap);
    document.getElementById('outputText').value = encryptedText;
}

// Función para desencriptar texto
function decryptText() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = transformText(inputText, reverseSubstitutionMap);
    const outputTextArea = document.getElementById('outputText');
    outputTextArea.value = decryptedText;
    selectText(outputTextArea); // Selecciona el texto después de desencriptar
}

// Función para transformar texto según el mapa dado
function transformText(text, map) {
    // Crear un regex para encontrar todas las claves del mapa en el texto
    const regex = new RegExp(Object.keys(map).map(key => escapeRegExp(key)).join('|'), 'g');

    return text.replace(regex, match => map[match] || match);
}

// Función para escapar caracteres especiales en expresiones regulares
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}


// Función para seleccionar el texto del área de resultados
function selectText(textarea) {
    textarea.focus();
    textarea.select();
}

// Asignar eventos a los enlaces
document.getElementById('encryptButton').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    encryptText();
});

document.getElementById('decryptButton').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    decryptText();
});