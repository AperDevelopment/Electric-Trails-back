const router = require('express').Router();

const coordinatesDistance = (a, b) => {
    return Math.acos(Math.sin(a[0]) * Math.sin(b[0]) + Math.cos(a[0]) * Math.cos(b[0]) * Math.cos(b[1] - a[1])) * 6371;
};

router.post('/', (req, res) => {
    try {
        const { coordinates, travel_speed } = req.body;
        let distance = 0;

        for (let i = 1; i < coordinates.length; i++) distance += coordinatesDistance(coordinates[i - 1], coordinates[i]);

        const travel_time = distance / travel_speed;

        res.status(200).send({
            message: travel_time,
            success: true
        });
    } catch (error) {
        res.status(422).send({
            message: `Missing attributes from request body`,
            success: false
        });
    }

});

module.exports = router;