const add =(a,b) =>{
    return a+b;
}

const err = ()=>{
    throw new Error('I am new Error')
}

const promiseTest = (a,b) =>{
    return new Promise((resolve,reject)=>{
        if(a-b>0){
            resolve('+ve')
        }else{
            reject('-ve')
        }
    })
}

const arr = () =>{
    return ['Bat']
}


const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', (req, res) => {
    try {
        // Your logic to fetch users (this is just an example)
        const users = [
            {
                name: 'Umesh',
                email: 'umeshgayashan@gmail.com',
                password: 'Umesh@123'
            }
        ];
        res.status(200).json({ users });
    } catch (error) {
        console.error('Error fetching users:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});
// app.listen(3000)


module.exports = {
    add,err,promiseTest,arr,app
}