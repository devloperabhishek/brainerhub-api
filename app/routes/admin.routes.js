
const categoryController = require("../controllers/admin.controller");


module.exports = (app, express) => {
    var router = express.Router();

   
    // category
    router.get("/categories", categoryController.index);

   
    app.use('/api/admin', router);
};