import Hotels from "../Models/Hotels.js"

export let createHotel = async (req, res, next) => {
    let newHotel = new Hotels(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        next(error)
    }
}
export let updateHotel = async (req, res, next) => {
    try {
        let updatedHotel = await Hotels.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)
    } catch (error) {
        next(error)
    }
}
export let getHotels = async (req, res, next) => {
    try {
        let allHotels = await Hotels.find(req.body)
        res.status(200).json(allHotels)
    } catch (error) {
        next(error)
    }
}
export let getHotel = async (req, res, next) => {
    try {
        let oneHotel = await Hotels.findById(req.params.id)
        res.status(200).json(oneHotel)
    } catch (error) {
        next(error)
    }
}
export let deleteHotel = async (req, res, next) => {
    try {
        await Hotels.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted")
    } catch (error) {
        res.status(500).json(error)
    }
}
