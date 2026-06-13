const fs = require('fs');
const content = fs.readFileSync('c:/Users/Usuario/Desktop/mercado-digital/src/lib/mockData.ts', 'utf8');
const idRegex = /"id":\s*"([^"]+)"/g;
const ids = {};
const duplicates = [];

let match;
while ((match = idRegex.exec(content)) !== null) {
  const id = match[1];
  if (ids[id]) {
    ids[id]++;
    if (ids[id] === 2) {
      duplicates.push(id);
    }
  } else {
    ids[id] = 1;
  }
}

console.log(JSON.stringify(duplicates));
