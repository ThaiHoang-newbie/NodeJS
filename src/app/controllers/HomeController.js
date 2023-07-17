class HomeController{

    // [GET] /
    index(req, res){
        res.render('home');
    }
}
module.exports = new HomeController;