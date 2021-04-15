const express = require('express');
const cors = require('cors');
const lowDb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const e = require('express');



const db = lowDb(new FileSync('phones.json'));


const app = express();
app.use(express.static('build'));
app.use(express.static('phonepics'));
app.use(cors());
app.use(express.json());

const getMaxId = () => {
    let phones = db.get('phones').value();
    return Math.max.apply(Math, phones.map(phone => phone.id))
}

//manage GET request to /phones, return the entire phones array.
app.get('/phones', (req, res) => {
    const phones = db.get('phones').value();
    if (phones) {
        res.json(phones)
    } else {
        res.status(404).json({error: 'Cannot resolve /phones'})
    }
    
})

//manage POST requests to /phones, adding the object requested only if has all the needed params.
app.post('/phones', (req, res) => {
    if (req.body.name && req.body.manufacturer && req.body.description
        && req.body.price && req.body.color && req.body.imageFileName
        && req.body.screen && req.body.processor && req.body.ram) {

        db.get('phones').push({
            id: getMaxId() + 1,
            name: req.body.name,
            manufacturer: req.body.manufacturer,
            description: req.body.description,
            color: req.body.color,
            price: req.body.price,
            imageFileName: req.body.imageFileName,
            screen: req.body.screen,
            processor: req.body.processor,
            ram: req.body.ram
        }).write();
        res.json({'sucess': true})
    } else {
        res.json({"error": "The requested object is not well formatted."})
    }
})

//Manage requests for an id.
app.get('/phones/:id', (req, res) => {
    if (req.params.id) {
        let id = Number(req.params.id);
        let phones = db.get('phones').value();
        let searched = phones.find(phone => phone.id === id);

        if (searched) {
            res.json(searched);
        } else {
            res.status(404).json({error: "Request id didnt exist"})
        }
        console.log();
    } else {
        res.status(400).json({error: "Bad request"})
    }
})

//Manage delete request, filter if that id exist or if didnt get an id
app.delete('/phones/:id', (req, res) => {
    if (req.params.id) {
        let id = Number(req.params.id);
        let phones = db.get('phones').value();
        let searched = phones.find(phone => phone.id === id);
        if (searched) {
            db.get('phones').remove({id: id}).write();
            res.json({searched, sucess: true})
        } else {
            res.status(404).json({error: 'Requested id didnt exist'})
        }
        

    } else {
        res.status(400).json({error: "Bad request, required id"})
    }
})

app.put('/phones/:id', (req,res) => {
    if (req.params.id) {
        let id = Number(req.params.id);
        let phones = db.get('phones').value();
        let searched = phones.find(phone => phone.id === id);
        if (searched) {
            const updatedPhone = {
                id: id,
                name: req.body.name ? req.body.name : searched.name,
                manufaturer: req.body.manufacturer ? req.body.manufacturer : searched.manufacturer,
                description: req.body.description ? req.body.description : searched.description,
                price: req.body.price ? req.body.price : searched.description,
                color: req.body.color ? req.body.color : searched.color,
                imageFileName: req.body.imageFileName ? req.body.imageFileName : searched.imageFileName,
                screen: req.body.screen ? req.body.screen : searched.screen,
                processor: req.body.processor ? req.body.processor : searched.processor,
                ram: req.body.ram ? req.body.ram : searched.ram
            }
            if (JSON.stringify(searched) === JSON.stringify(updatedPhone)) {
                res.status(400).json({error: 'Request to update with no changes of phone or didnt add the object'})
            } else {
                db.get('phones').find({id: id}).assign(updatedPhone).write()
                res.json({sucess: true})
            }
        } else {
            res.status(404).json({error: 'Requested id didnt exist'})
        }
    
    } else {
        res.status(400).json({error: "Bad request, required id"})
    }
})

const PORT = process.env.PORT || 3001;
app.listen(PORT)
console.log(`Server running on port ${PORT}`)