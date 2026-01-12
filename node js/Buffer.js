const buf = Buffer.from('Hello', 'utf-8');
console.log('Buffer brut :', buf);
console.log('Texte du buffer :', buf.toString());

const buf2 = Buffer.alloc(5);

buf2.write('Hi');
console.log('Buffer2 brut :', buf2);
console.log('Texte du buffer2 :', buf2.toString());
