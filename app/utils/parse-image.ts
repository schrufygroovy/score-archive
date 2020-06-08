import { createWorker } from 'tesseract.js';
import path from 'path';

const worker = createWorker({
  cachePath: path.join(__dirname, 'resources', 'lang-data'),
  cacheMethod: 'readOnly',
  logger: m => console.log(m)
});

export default async function parseImage() {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const {
    data: { text }
  } = await worker.recognize(path.join(__dirname, 'resources', 'testocr.png'));
  console.log(text);
  await worker.terminate();
  return text;
}
