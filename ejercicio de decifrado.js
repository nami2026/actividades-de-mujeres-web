// Mensaje encriptado
const encryptedMessage ="^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$_~()`~]=\\]+~";

    // Diccionario de reemplazos según las reglas dadas
    const replacements = {
        '?': 'a',
        '[': 'e',
        '\\': 'i',
        '~': 'o',
        '+': 'u',
        '¬': 'ó',
        '^': 'm',
        '`': 'c',
        '}': 'q',
        '-': 'h',
        '*': 'p',
        '/': 'l',
        '{': 's',
        '=': 't',
        ']': 'n',
        '#': 'v',
        '$': 'r',
        '%': 'b',
        '¿': 'y',
        '()': ' ',
        '!': 'j',
        '¡': 'd',
        ';': 'f',
        '_': 'z',

    };
    
    // Función para decodificar el mensaje
    function decryptMessage(message, replacements) {
        let decryptedMessage = '';
        for (let i = 0; i < message.length; i++) {
            // Verificar si tenemos el símbolo de espacio '()'
            if (message.slice(i, i + 2) === '()') {
                decryptedMessage += replacements['()'];
                i++; // Saltar un carácter extra por el símbolo '()'
            }
            // Verificar si el carácter actual está en el diccionario de reemplazos
            else if (replacements[message[i]]) {
                decryptedMessage += replacements[message[i]];
            } else {
                // Mantener el carácter sin reemplazo
                decryptedMessage += message[i];
            }
        }
        return decryptedMessage;
    }
    
    // Decodificar el mensaje
    const decryptedMessage = decryptMessage(encryptedMessage, replacements);
    console.log(decryptedMessage);