class SearchController{
    // [GET] /search
    search(req, res){
        res.render('search');
    }
}
module.exports = new SearchController;