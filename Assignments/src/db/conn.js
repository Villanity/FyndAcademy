const mongoose=require('mongoose');

mongoose.connect('mongoose://localhost/batcheight')
.then(()=> console.log('Made'))
