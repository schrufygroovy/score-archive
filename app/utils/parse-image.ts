import { createWorker } from 'tesseract.js';
import path from 'path';

const worker = createWorker({
  cachePath: path.join(__dirname, 'resources', 'lang-data'),
  cacheMethod: 'readOnly',
  logger: m => console.log(m)
});

let isloaded = false;

async function loadWorker() {
  if (isloaded) {
    return;
  }
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  isloaded = true;
}

export default async function parseImage() {
  await loadWorker();
  const {
    data: { text }
  } = await worker.recognize(path.join(__dirname, 'resources', 'testocr.png'));
  console.log(text);
  // do not terminate: await worker.terminate();
  return text;
}
