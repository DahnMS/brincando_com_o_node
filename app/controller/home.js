module.exports = {
    before: (req, res) => {},

    get_index: (req, res) => {
        res.render('index.pug', {
           titulo: 'Home index',
           mensagem: 'Funcionando!'
        });
    },

    get_about: (req, res) => {
        res.render('index.pug', {
            titulo: 'Home about',
            mensagem: 'Tambem funcionando!'
        });
    },

    get_me: (req, res) => {
        res.render('index.pug', {
            titulo: 'Me',
            mensagem: 'Daniel Malaquias da Silva'
        });
    }
};