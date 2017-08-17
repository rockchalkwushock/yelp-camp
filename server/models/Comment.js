const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema(
  {
    author: {
      id: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId
      },
      username: String
    },
    text: String
  },
  { timestamps: true }
)

module.exports = mongoose.model('Comment', commentSchema)
