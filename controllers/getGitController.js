const axios = require('axios');

class GetGitController {
    async getGit(req, res) {
        try {
            const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&key=${process.env.API_KEY}`);
            
            return res.json({
                data
            })
    
        } catch (e) {
            console.log(e);
            res.send({message: "Server error"})
        }
    }
}

module.exports = new GetGitController()
