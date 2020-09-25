const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }

  encrypt(message, key) {
    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const UNICODE = 65;
    let encryptedWord = '';
    let j = 0;

    if (message === undefined || key === undefined) {
      throw new Error();
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/^[A-Z]$/gi)) {
        let charNumber = message[i].charCodeAt() + key[j].charCodeAt() - 2 * UNICODE;

        (charNumber > ALPHABET.length - 1) ? charNumber -= ALPHABET.length : charNumber;

        encryptedWord += ALPHABET.charAt(charNumber);

        (j < key.length - 1) ? j++ : j = 0;
      } else {
        encryptedWord += message[i];
      }
    }

    return this.type ? encryptedWord : encryptedWord.split('').reverse().join('');
  }

  decrypt(message, key) {
    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let decryptedWord = '';
    let j = 0;

    if (message === undefined || key === undefined) {
      throw new Error();
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/^[A-Z]$/gi)) {
        let charNumber = message[i].charCodeAt() - key[j].charCodeAt();

        (charNumber < 0) ? charNumber += ALPHABET.length : charNumber;

        decryptedWord += ALPHABET.charAt(charNumber);

        (j < key.length - 1) ? j++ : j = 0;
      } else {
        decryptedWord += message[i];
      }
    }

    return this.type ? decryptedWord : decryptedWord.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
