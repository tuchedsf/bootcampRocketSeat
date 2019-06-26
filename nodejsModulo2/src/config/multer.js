/**
 * multer biblioteca de upload de arquivos.
 * yarn add multer
 */
const path = require('path')
const crypto = require('crypto')
const multer = require('multer')

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'), // diretorio onde serao salvos a imagem.
    filename: (req, file, cb) => {
      // caso queira incluir ou renomear os arquivos que são feitos upload.
      crypto.randomBytes(16, (err, raw) => {
        // gera caracter de 16 bytes.
        if (err) return cb(err)
        cb(null, raw.toString('hex') + path.extname(file.originalname))
      })
    }
  })
}
