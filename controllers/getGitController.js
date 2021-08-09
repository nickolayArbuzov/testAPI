const axios = require('axios');

class GetGitController {
    async getGit(req, res) {
        try {
            
            const sleep = (ms) => {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            
            let {data} = await axios.get(
                `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&key=${process.env.API_KEY}`
            )
            let returnedData = data.results;
            if (data.next_page_token) {
                let flag = data.next_page_token;
                do {
                    await sleep(4000);
                    let {data} = await axios.get(
                        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&key=${process.env.API_KEY}&pagetoken=${flag}`
                    )
                    returnedData = [...returnedData, ...data.results];
                    flag = data.next_page_token;
                } while (flag);
            }
            return res.json({
                returnedData
            });
    
        } catch (e) {
            console.log(e);
            res.send({message: 'Server error'})
        }
    }
}

module.exports = new GetGitController()

