const Router = require("express");
const getGitController = require('../controllers/getGitController')

const router = new Router();

router.get('/', getGitController.getGit)

module.exports = router;