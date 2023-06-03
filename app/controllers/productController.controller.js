const db = require("../../models");
const productModel = db.Product;


exports.index = async (req, res) => {
    productModel.findAll()
        .then(async (data) => {
            res.json({ data });
        })
        .catch(error => {
            return res.status(500).send(`something went wrong: ${error}`);
        });
}


exports.store = async (req, res) => {
    let postData = req.body;
    productModel.create(postData).then(result => {
        res.send("Product created successfully!");
    }).catch(error => {
        return res.status(500).send(`something went wrong: ${error}`);
    });
};



exports.update = async (req, res) => {
    let postData = req.body;
    productModel.update(postData, { where: { id: req.params.id} }).then(result => {
        res.send("Product updated successfully!");
      }).catch(error => { 
        return res.status(500).send(`something went wrong: ${error}`);
      }); 
};



exports.fetch = async (req, res) => {

};



exports.delete = async (req, res) => {
    productModel.destroy({ where: { id: req.params.id} }).then(result => {
        res.send('Product deleted Successfully!');
      }).catch(error => {
        return res.status(500).send(`something went wrong: ${error}`);
      });
};