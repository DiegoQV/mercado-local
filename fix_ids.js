const fs = require('fs');
const path = 'c:/Users/Usuario/Desktop/mercado-digital/src/lib/mockData.ts';
let content = fs.readFileSync(path, 'utf8');

// We will find each product object block
// Disclaimer: This regex assumes a specific structure but should work for this file
const productRegex = /\{[\s\n]*"id":\s*"([^"]+)",[\s\S]*?"storeId":\s*"([^"]+)"[\s\S]*?\}/g;

let match;
const seen = new Set();
const replacements = [];

// First pass: identify all products and construct new unique IDs
content = content.replace(productRegex, (fullMatch, oldId, storeId) => {
    // Construct a unique ID using storeId and some part of the old ID
    // or just use storeId and original suffix
    let newId = `${storeId}-${oldId.replace(/^prod-[^-]+-/, '')}`;
    
    // Safety check for duplicates even with storeId (unlikely but possible if suffix repeats in store)
    let finalId = newId;
    let counter = 1;
    while (seen.has(finalId)) {
        finalId = `${newId}-${counter}`;
        counter++;
    }
    seen.add(finalId);
    
    return fullMatch.replace(`"id": "${oldId}"`, `"id": "${finalId}"`);
});

fs.writeFileSync(path, content);
console.log("Fixed IDs in mockData.ts");
