const express = require('express')
const multer = require('multer')
const app = express()

// Thiết lập cấu hình lưu trữ cho Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Thư mục lưu trữ tệp
  },
  filename: function (req, file, cb) {
    // Đặt tên tệp: sử dụng tên gốc của tệp và thêm timestamp
    cb(null, file.originalname)
  }
})

// Khởi tạo Multer với cấu hình lưu trữ
const upload = multer({ storage: storage })

app.post('/file', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully!')
})

// Endpoint để xử lý tải lên nhiều tệp với cùng tên trường
app.post('/photos', upload.array('photos', 12), (req, res) => {
  res.send('Files uploaded successfully!')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
