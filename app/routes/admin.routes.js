const authJwt  = require("../middleware/authJwt");
const categoryController = require("../controllers/category.controller");
const subCategoryController = require("../controllers/subCategory.controller");
const productController = require("../controllers/productController.controller");
const authController = require("../controllers/auth.controller");


module.exports = (app, express) => {
    var router = express.Router();

    //auth
    router.post("/auth/signin",  authController.signin);
    // router.post("/logout", authController.logout);
   
    // category
    router.get("/categories", authJwt.verifyToken, categoryController.index);
    router.post("/categories/store", authJwt.verifyToken, categoryController.store);
    router.post("/categories/update/:id", authJwt.verifyToken, categoryController.update);
    router.delete("/categories/delete/:id", authJwt.verifyToken, categoryController.delete);

    // sub-category
    router.get("/sub-categories", authJwt.verifyToken, subCategoryController.index);
    router.post("/sub-categories/store", authJwt.verifyToken, subCategoryController.store);
    router.post("/sub-categories/update/:id", authJwt.verifyToken, subCategoryController.update);
    router.delete("/sub-categories/delete/:id", authJwt.verifyToken, subCategoryController.delete);

    // product
    router.get("/products", authJwt.verifyToken, productController.index);
    router.post("/products/store", authJwt.verifyToken, productController.store);
    router.post("/products/update/:id", authJwt.verifyToken, productController.update);
    router.delete("/products/delete/:id", authJwt.verifyToken, productController.delete);


   
    app.use('/api/admin', router);
};