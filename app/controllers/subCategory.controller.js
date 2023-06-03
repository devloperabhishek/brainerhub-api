const db = require("../../models");
const subCategoriesModel = db.Subcategories;


exports.index = async (req, res) => {
    subCategoriesModel.findAll()
        .then(async (data) => {
            res.json({ data });
        })
        .catch(error => {
            return res.status(500).send(`something went wrong: ${error}`);
        });
}


exports.store = async (req, res) => {
    let postData = req.body;
    subCategoriesModel.create(postData).then(result => {
        res.send("Sub-category created successfully!");
    }).catch(error => {
        return res.status(500).send(`something went wrong: ${error}`);
    });
};



exports.update = async (req, res) => {
    let postData = req.body;
    subCategoriesModel.update(postData, { where: { id: req.params.id} }).then(result => {
        res.send("Sub-category updated successfully!");
      }).catch(error => { 
        return res.status(500).send(`something went wrong: ${error}`);
      }); 
};



exports.fetch = async (req, res) => {

};



exports.delete = async (req, res) => {
    subCategoriesModel.destroy({ where: { id: req.params.id} }).then(result => {
        res.send('Sub-category deleted Successfully!');
      }).catch(error => {
        return res.status(500).send(`something went wrong: ${error}`);
      });
};