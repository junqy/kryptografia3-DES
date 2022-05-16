let ipTab = [
    58, 50, 42, 34, 26, 18, 10, 2,
    60, 52, 44, 36, 28, 20, 12, 4,
    62, 54, 46, 38, 30, 22, 14, 6,
    64, 56, 48, 40, 32, 24, 16, 8,
    57, 49, 41, 33, 25, 17, 9, 1,
    59, 51, 43, 35, 27, 19, 11, 3,
    61, 53, 45, 37, 29, 21, 13, 5,
    63, 55, 47, 39, 31, 23, 15, 7 ];

let pc1Tab = [
    57, 49, 41, 33, 25, 17, 9,
    1, 58, 50, 42, 34, 26, 18,
    10, 2, 59, 51, 43, 35, 27,
    19, 11, 3, 60, 52, 44, 36,
    63, 55, 47, 39, 31, 23, 15,
    7, 62, 54, 46, 38, 30, 22,
    14, 6, 61, 53, 45, 37, 29,
    21, 13, 5, 28, 20, 12, 4
];

let pc2Tab = [
    14, 17, 11, 24, 1, 5,
    3, 28, 15, 6, 21, 10,
    23, 19, 12, 4, 26, 8,
    16, 7, 27, 20, 13, 2,
    41, 52, 31, 37, 47, 55,
    30, 40, 51, 45, 33, 48,
    44, 49, 39, 56, 34, 53,
    46, 42, 50, 36, 29, 32 
];

let shiftTab = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1]

let eTab = [
    32, 1, 2, 3, 4, 5,
    4, 5, 6, 7, 8, 9,
    8, 9, 10, 11, 12, 13,
    12, 13, 14, 15, 16, 17,
    16, 17, 18, 19, 20, 21,
    20, 21, 22, 23, 24, 25,
    24, 25, 26, 27, 28, 29,
    28, 29, 30, 31, 32, 1 
];

let s1Tab = [
    [14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7],
    [0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8],
    [4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0],
    [15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13]
]

let s2Tab = [
    [15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10],
    [3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5],
    [0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15],
    [13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9]
]

let s3Tab = [
    [10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8],
    [13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1],
    [13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7],
    [1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12],
]

let s4Tab = [
    [7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15],
    [13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9],
    [10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4],
    [3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14]
]

let s5Tab = [
    [2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9],
    [14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6],
    [4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14],
    [11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3]
]

let s6Tab = [
    [12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11],
    [10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8],
    [9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6],
    [4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13],
]

let s7Tab = [
    [4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1],
    [13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6],
    [1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2],
    [6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12]
]

let s8Tab = [
    [13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7],
    [1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2],
    [7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8],
    [2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11]
]

let pTab = [
    16, 7, 20, 21,
    29, 12, 28, 17,
    1, 15, 23, 26,
    5, 18, 31, 10,
    2, 8, 24, 14,
    32, 27, 3, 9,
    19, 13, 30, 6,
    22, 11, 4, 25
]

let ipMinusTab = [
    40, 8, 48, 16, 56, 24, 64, 32,
    39, 7, 47, 15, 55, 23, 63, 31,
    38, 6, 46, 14, 54, 22, 62, 30,
    37, 5, 45, 13, 53, 21, 61, 29,
    36, 4, 44, 12, 52, 20, 60, 28,
    35, 3, 43, 11, 51, 19, 59, 27,
    34, 2, 42, 10, 50, 18, 58, 26,
    33, 1, 41, 9, 49, 17, 57, 25
];


//zamiana na system dziesietny 
function BytesToBCD(code, length) {
	let resultBCD = 0;
	for (let i = length; i > 0; i--) {
		if (code[i - 1] == "1") {
			resultBCD += Math.pow(2, length - i);
		}
	}
	return resultBCD;
}

//funkcja pomagająca zamienić char w stringu
String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

//zamiana tekstu na binarna reprezentacje z dopelnieniem do 8 znakow
function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join('');
}

//zamiana reprezentacji binarnej na tekst
function binaryToText(binary) {

    binary = binary.match(/.{1,8}/g);

   return binary.map(elem => String.fromCharCode(parseInt(elem, 2))).join("");
   }

//funkcja permutujaca wg. tabeli danej w argumencie
function Permutation(text, arr, n){
    let result = ""
    for(let i = 0; i < n; i++){
        result += text[arr[i] - 1]
    }
    return result
}

//funkcja przechodzaca po tabeli i przesuwajaca klucz wg. odpowiednich wartosci z tabeli shift
function leftShift(key, shift){
    let n = key.length
    let keyShifted = key;

    for(let i = 0, j = 0; i < n; i++){
        if(i + shift < n) {
            keyShifted = keyShifted.replaceAt(i, key.charAt(i + shift))
        }
        else{
            keyShifted = keyShifted.replaceAt(i, key.charAt(j))
            j++
        }
    }
    return keyShifted
}

function XOR(arr1, arr2){
    let n = arr1.length
    let result = "";

    for(let i = 0; i < n; i++){
        result += arr1[i] ^ arr2[i]
    }
    
    return result;
}

//zamiana sekwencji 6bitowej na 4bitowa zgodnie z tablicami S
function bitSequenceTo4(sequence, arr){
    let rowID = sequence[0] + sequence[5]
    let colID = sequence.substring(1,5)

    let rowBCD = BytesToBCD(rowID, rowID.length)
    let colBCD = BytesToBCD(colID, colID.length)
    let result = arr[rowBCD][colBCD]
    let result4digits = result.toString(2).padStart(4, '0');

    // console.log(result4digits)
    return result4digits
}

//finalna permutacja tablicy
function arrayPermutation(arr, Parray){
    let result = []
    for(let i = 0; i < arr.length; i++){
        let pos = Parray[i] - 1
        result.push(arr[pos])
    }
    return result
}

//dopelnienie tekstu do pełnego 64 bitowego bloku
function fillString(text){
    let len = text.length
    if(len % 8 === 0){
        return text
    } else{
        for(let i = len % 8; i < 7; i++){
            text += "0"
        }
        text += 8 - (len % 8 );
        
    }
     return text
}

function getKeys(key){
    //PREMUTACJA KLUCZA I SKRÓCENIE GO O 8 BITÓW
    let keys = []
    let keyBit = text2Binary(key);
    keyBit = Permutation(keyBit, pc1Tab, 56)

    //PODZIAŁ KLUCZA NA DWA BLOKI

    let blockC = keyBit.substring(0,28)
    let blockD = keyBit.substring(28,56)

    for(let i = 0; i <16 ; i++){
        blockC = leftShift(blockC, shiftTab[i])
        blockD = leftShift(blockD, shiftTab[i])
        let keyK = blockC + blockD
        let keyK_permuted = Permutation(keyK, pc2Tab, 48)
        keys.push(keyK_permuted)
    }
    return keys
}

function DES_encipher(text, key){
    //console.log(text)
    let result = text2Binary(text);
    result = Permutation(result, ipTab, 64)
    let keys = getKeys(key)
    //PODZIAŁ NA BLOKI LEWY I PRAWY

    let blockL = result.substring(0,32)
    let blockR = result.substring(32,64)



    //ITERACJE
    for(let i = 0; i < 16; i++){
  
        let keyK_permuted  = keys[i]
        let blockR48 = Permutation(blockR, eTab, 48)
        let xorRes = XOR(keyK_permuted, blockR48);

        let bit6seq1 = xorRes.substring(0, 6);
        let bit6seq2 = xorRes.substring(6, 12);
        let bit6seq3 = xorRes.substring(12, 18);
        let bit6seq4 = xorRes.substring(18, 24);
        let bit6seq5 = xorRes.substring(24, 30);
        let bit6seq6 = xorRes.substring(30, 36);
        let bit6seq7 = xorRes.substring(36, 42);
        let bit6seq8 = xorRes.substring(42, 48);

        let bit4seq1 = bitSequenceTo4(bit6seq1, s1Tab)
        let bit4seq2 = bitSequenceTo4(bit6seq2, s2Tab)
        let bit4seq3 = bitSequenceTo4(bit6seq3, s3Tab)
        let bit4seq4 = bitSequenceTo4(bit6seq4, s4Tab)
        let bit4seq5 = bitSequenceTo4(bit6seq5, s5Tab)
        let bit4seq6 = bitSequenceTo4(bit6seq6, s6Tab)
        let bit4seq7 = bitSequenceTo4(bit6seq7, s7Tab)
        let bit4seq8 = bitSequenceTo4(bit6seq8, s8Tab)

        //łączenie 4-bitowych ciągów
        let bit32seq = []
        bit32seq.push(...bit4seq1)
        bit32seq.push(...bit4seq2)
        bit32seq.push(...bit4seq3)
        bit32seq.push(...bit4seq4)
        bit32seq.push(...bit4seq5)
        bit32seq.push(...bit4seq6)
        bit32seq.push(...bit4seq7)
        bit32seq.push(...bit4seq8)

  

        //permutacja
        let pArray = arrayPermutation(bit32seq, pTab)
 

        //krok 15 XOR'owanie uzyskanego bloku blockL
        let XORblock = XOR(pArray,blockL)
        
 
        blockL = blockR.slice()
        blockR = XORblock

    }
    //łaczenie bloków 
    let finalBlock = blockR + blockL

    //krok 18 odwrócona tablica permutacji
    let finalPermutation = arrayPermutation(finalBlock.split(''),ipMinusTab)

 
    return finalPermutation
}

function DES_decipher(text, key){
    //console.log(text)
    let result = text2Binary(text);
    result = Permutation(result, ipTab, 64)
    let keys = getKeys(key)
    //PODZIAŁ NA BLOKI LEWY I PRAWY

    let blockL = result.substring(0,32)
    let blockR = result.substring(32,64)



    //ITERACJE
    for(let i = 15; i > -1; i--){
  
        let keyK_permuted  = keys[i]
        let blockR48 = Permutation(blockR, eTab, 48)
        let xorRes = XOR(keyK_permuted, blockR48);

        let bit6seq1 = xorRes.substring(0, 6);
        let bit6seq2 = xorRes.substring(6, 12);
        let bit6seq3 = xorRes.substring(12, 18);
        let bit6seq4 = xorRes.substring(18, 24);
        let bit6seq5 = xorRes.substring(24, 30);
        let bit6seq6 = xorRes.substring(30, 36);
        let bit6seq7 = xorRes.substring(36, 42);
        let bit6seq8 = xorRes.substring(42, 48);

        let bit4seq1 = bitSequenceTo4(bit6seq1, s1Tab)
        let bit4seq2 = bitSequenceTo4(bit6seq2, s2Tab)
        let bit4seq3 = bitSequenceTo4(bit6seq3, s3Tab)
        let bit4seq4 = bitSequenceTo4(bit6seq4, s4Tab)
        let bit4seq5 = bitSequenceTo4(bit6seq5, s5Tab)
        let bit4seq6 = bitSequenceTo4(bit6seq6, s6Tab)
        let bit4seq7 = bitSequenceTo4(bit6seq7, s7Tab)
        let bit4seq8 = bitSequenceTo4(bit6seq8, s8Tab)

        //łączenie 4-bitowych ciągów
        let bit32seq = []
        bit32seq.push(...bit4seq1)
        bit32seq.push(...bit4seq2)
        bit32seq.push(...bit4seq3)
        bit32seq.push(...bit4seq4)
        bit32seq.push(...bit4seq5)
        bit32seq.push(...bit4seq6)
        bit32seq.push(...bit4seq7)
        bit32seq.push(...bit4seq8)

  

        //permutacja
        let pArray = arrayPermutation(bit32seq, pTab)
 

        //krok 15 XOR'owanie uzyskanego bloku blockL
        let XORblock = XOR(pArray,blockL)
        
 
        blockL = blockR.slice()
        blockR = XORblock

    }
    //łaczenie bloków 
    let finalBlock = blockR + blockL

    //krok 18 odwrócona tablica permutacji
    let finalPermutation = arrayPermutation(finalBlock.split(''),ipMinusTab)


    return finalPermutation
}
function handleDES_encipher(){
    let text = document.getElementById('text').value
    let key = document.getElementById('key').value
    if(key.length !== 8){
        alert("Podaj klucz o długości 8 znaków")
        return
    }
    let result = ''
    let bin = ''
    text = fillString(text)

    let n = text.length/8
    for(let i = 0; i <n;i++){
        let temp = text.substring((i*8),((i+1)*8))
        let binResult = DES_encipher(temp,key)
        bin += binResult.join('')
        result += binaryToText(binResult.join(''))
    }
    document.getElementById('result').value = result
    return result
}
function handleDES_decipher(){
    let text = document.getElementById('result').value
    let key = document.getElementById('key').value
    if(key.length !== 8){
        alert("Podaj klucz o długości 8 znaków")
        return
    }
    let result = ''
    let bin = ''

    let n = text.length/8
    for(let i = 0; i <n;i++){
        let temp = text.substring((i*8),((i+1)*8))
        let binResult = DES_decipher(temp,key)
        bin += binResult.join('')
        result += binaryToText(binResult.join(''))
    }
    console.log("result " + result)

    document.getElementById('text').value = result.substring(0,result.length - result[result.length - 1])
    return result
}

