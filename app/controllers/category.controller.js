const db = require("../../models");
const categoriesModel = db.Categories;


exports.index = async (req, res) => {
    categoriesModel.findAll()
        .then(async (data) => {
            res.json({ data });
        })
        .catch(error => {
            return res.status(500).send(`something went wrong: ${error}`);
        });
}


exports.store = async (req, res) => {
    let postData = req.body;
    categoriesModel.create(postData).then(result => {
        res.send("Category created successfully!");
    }).catch(error => {
        return res.status(500).send(`something went wrong: ${error}`);
    });
};



exports.update = async (req, res) => {
    let postData = req.body;
    categoriesModel.update(postData, { where: { id: req.params.id} }).then(result => {
        res.send("Category updated successfully!");
      }).catch(error => { 
        return res.status(500).send(`something went wrong: ${error}`);
      }); 
};



exports.fetch = async (req, res) => {

};



exports.delete = async (req, res) => {
    categoriesModel.destroy({ where: { id: req.params.id} }).then(result => {
        res.send('Category deleted Successfully!');
      }).catch(error => {
        return res.status(500).send(`something went wrong: ${error}`);
      });
};