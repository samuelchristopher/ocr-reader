import Tesseract from 'tesseract.js'

const OcrReader = (image) => {
  console.log('heyy from ocr land')
  Tesseract.recognize(image)
    .progress(p => console.log(p))
    .catch(err => console.log(err))
    .then(result => console.log(result))
}

export default OcrReader
