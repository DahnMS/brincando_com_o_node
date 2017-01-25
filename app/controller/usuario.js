module.exports = {
    get_importar: (req, res) => {
        res.render('index.pug', {
           titulo: req.params.action,
           mensagem: 'Funcionando 1!'
        }); 
    },

    get_exportar: (req, res) => {
        res.render('index.pug', {
           titulo: req.params.action,
           mensagem: 'Funcionando 2!'
        }); 
    }
};