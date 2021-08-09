const Router = require("express");

const router = new Router();

router.get('/', (req, res, next) => {
    axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&key=${process.env.API_KEY}`).
    then(response => res.send(response)).
    catch (e => res.send(e)) ;
})

module.exports = router;
