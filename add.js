const express = require("express"); //получеие пакета с помощью require
const config = require('config')
const mongoose = require('mongoose')


const app = express() //результат работы функции express

/*роутинг*/
app.use('/api/auth', require('./routes/authRoutes'))
const PORT = config.get('port') || 5000

async function start(){ //подлючение бд
    try{
        await mongoose.connect(config.get('mongoUrl'), {
            /*useNewUrlParser: true, //для успешного коннекта
            useUnifiedTopology: true,
            useCreateIndex: true*/
        })
        app.listen(PORT, ()=> console.log('App start server')) //запуск сервера на порт 5000
    }
    catch(e){
        console.log('Server error')
        process.exit(1) //закрытие сервера
    }
}
start()





