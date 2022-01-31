import { readable } from 'svelte/store';
import BCHJS from 'bch-consumer';
//import BCHJS from '@psf/bch-js/src/bch-js.js';
//const BCHJS = require('@psf/bch-js')
const BCHN_MAINNET = 'https://free-bch.fullstack.cash';

// Instantiate bch-js.
const bchjs = new BCHJS({ restURL: BCHN_MAINNET });
let outStr = '';
const outObj = {};
const lang = 'english';
let addrs = [];

async function createWallet() {
  try {
    // create 256 bit BIP39 mnemonic
    const mnemonic = bchjs.Mnemonic.generate(
      128,
      bchjs.Mnemonic.wordLists()[lang]
    );
    console.log('BIP44 $BCH Wallet');
    outStr += 'BIP44 $BCH Wallet\n';
    console.log(`128 bit ${lang} BIP39 Mnemonic: `, mnemonic);
    outStr += `\n128 bit ${lang} BIP32 Mnemonic:\n${mnemonic}\n\n`;
    outObj.mnemonic = mnemonic;

    // root seed buffer
    const rootSeed = await bchjs.Mnemonic.toSeed(mnemonic);

    // master HDNode
    const masterHDNode = bchjs.HDNode.fromSeed(rootSeed);

    // HDNode of BIP44 account
    console.log("BIP44 Account: \"m/44'/145'/0'\"");
    outStr += "BIP44 Account: \"m/44'/145'/0'\"\n";

    // Generate the first 10 seed addresses.
    for (let i = 0; i < 10; i++) {
      const childNode = masterHDNode.derivePath(`m/44'/145'/0'/0/${i}`);
      console.log(
        `m/44'/145'/0'/0/${i}: ${bchjs.HDNode.toCashAddress(childNode)}`
      );
      outStr += `m/44'/145'/0'/0/${i}: ${bchjs.HDNode.toCashAddress(
        childNode
      )}\n`;

      // Save the first seed address for use in the .json output file.
      if (i === 0) {
        outObj.cashAddress = bchjs.HDNode.toCashAddress(childNode);
        outObj.legacyAddress = bchjs.HDNode.toLegacyAddress(childNode);
        outObj.WIF = bchjs.HDNode.toWIF(childNode);
      }
    }
  } catch (err) {
    console.error('Error in createWallet(): ', err);
  }
}
export const walletinfo = readable(outObj, function getData(set) {
  () => set(addrss);
  outObj.addrss;
  this.addrs.push(outObj);
});
