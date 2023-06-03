const categoryController = require("../controllers/category.controller");
const subCategoryController = require("../controllers/subCategory.controller");
const productController = require("../controllers/productController.controller");


module.exports = (app, express) => {
    var router = express.Router();

   
    // category
    router.get("/categories", categoryController.index);
    router.post("/categories/store",  categoryController.store);
    router.post("/categories/update/:id", categoryController.update);
    router.delete("/categories/delete/:id", categoryController.delete);

    // sub-category
    router.get("/sub-categories", subCategoryController.index);
    router.post("/sub-categories/store",  subCategoryController.store);
    router.post("/sub-categories/update/:id", subCategoryController.update);
    router.delete("/sub-categories/delete/:id", subCategoryController.delete);

    // product
    router.get("/products", productController.index);
    router.post("/products/store",  productController.store);
    router.post("/products/update/:id", productController.update);
    router.delete("/products/delete/:id", productController.delete);


   
    app.use('/api/admin', router);
};