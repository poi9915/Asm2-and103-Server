const express = require('express')
const router = express.Router()

//MODEL

const Car = require('../model/car')

router.get('/list-all', async (req, res) => {
    try {
        const data = await Car.find()
        res.json({
            "status": 200,
            "data": data
        })
    } catch (e) {
        console.log("Failed to get cars from database : " + e)
    }
})
router.post('/create', async (req, res) => {
    try {
        const data = req.body
        const newCar = new Car({
            name: data.name,
            namSx: data.namSx,
            brandName: data.brandName,
            price: data.price
        })
        const result = await newCar.save()
        if (result) {
            res.json({
                "status": 200,
                "data": data
            })
        }
    } catch (err) {
        console.log("Failed to create a car" + err)
    }
})
router.put('/update/:id', async (req, res) => {
    try {
        const {id} = req.params
        const data = req.body
        let result = null
        const updateCar = await Car.findById(id)
        if (updateCar) {
            updateCar.name = data.name ?? updateCar.name
            updateCar.namSx = data.namSx ?? updateCar.namSx
            updateCar.brandName = data.brandName ?? updateCar.namSx
            updateCar.price = data.price ?? updateCar.namSx
        }
        result = await updateCar.save()
        if (result) {
            res.json({
                "status": 200,
                "data": result
            })
        }
    } catch (err) {
        console.log("Failed to update a car :" + err)
    }
})
router.delete('/delete/:id', async (req, res) => {
    try{
        const id = req.params.id
        const data = await Car.findByIdAndDelete(id)
        res.json({
            "status": 200,
            "message": "Car deleted successfully"
        })
    }catch (err){
        console.log("Failed to delete car :" + err)
    }


})

module.exports = router