const fs = require('fs');
const execSync = require('child_process').execSync;
const argv = require('yargs').argv;
const path = require('path');

let mdFile = argv.i,
  pdfDir = argv.p || './pdfs',
  pngDir = argv.o || './pngs';

const mdData = fs.readFileSync(mdFile, 'utf8');
const re = /```[a-z]*\n([\s\S]*?\n)```/gi;

let m;
const codeblocks = [];
while ((m = re.exec(mdData)) !== null) {
    if (m.index === re.lastIndex) {
        re.lastIndex++;
    }
    codeblocks.push(m[0]);
}

codeblocks.forEach((code, iter) => {
  console.log('Writing:', code);

  // save the temp markdown file
  let tmpMd = pdfDir + '/' + path.basename(mdFile, '.md') + '_' + iter + '.md';
  fs.writeFileSync(tmpMd, code, 'utf8');

  // make the intermediary PDF
  let outFileName = pdfDir + '/' + path.basename(mdFile, '.md') + '_' + iter + '.pdf';
  console.log('Creating PDF: ', outFileName);
  execSync('m2p ' + tmpMd + ' ' + outFileName);

  // now we make the png
  let pngName = pngDir + '/' + path.basename(mdFile, '.md') + '_' + iter + '.png';
  console.log('Using imagemagic to make png: ', pngName);
  execSync('convert -density 300 ' + outFileName + ' -quality 100 -trim ' + pngName);
});
