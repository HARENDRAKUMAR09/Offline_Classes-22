const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

let mapRoutes = (app) => {

    // for Home Page
    app.get('/',(request,response) => {
        response.sendFile(path.join(__dirname, '..' , 'views','index.html'));
    });

    // for About Us Page
    app.get('/about',(request,response) => {
        response.sendFile(path.join(__dirname, '..' , 'views','about.html'));
    });

    // for services Page with Query Strings
    app.get('/services',(request,response) => {
        let query = request.query;
        console.log(query);
        response.sendFile(path.join(__dirname, '..' , 'views','services.html'));
    });

    // for Profile Page
    app.get('/profile',(request,response) => {
        response.sendFile(path.join(__dirname,  '..' , 'views','profile.html'));
    });

    // for Profile Page with Query Parameters
    app.get('/profile/:id',(request,response) => {
        let profileId = Number.parseInt(request.params.id);
        // Reading the profiles.json file
        fs.readFile(path.join(__dirname,'..' , 'data' , 'profiles.json'),'utf8',(err,data) => {
            if(err){
                throw  err;
            }
            let profiles = JSON.parse(data);
            let selectedProfile = profiles.find(function(profile) {
                return profile.id === profileId;
            });
            console.log(selectedProfile);
        });
        response.sendFile(path.join(__dirname,  '..' , 'views','profile.html'));
    });

    // for Contact Us Page
    app.get('/contact',(request,response) => {
        response.sendFile(path.join(__dirname, '..' , 'views','contact.html'));
    });

    // for Contact Page Submission
    app.post('/contact-form', urlencodedParser , (request,response) => {
        let contactFormData = request.body;
        console.log(contactFormData);
        response.sendFile(path.join(__dirname, '..' , 'views','contact-success.html'));
    });

    // for 404 page
    app.use((request,response) => {
        response.sendFile(path.join(__dirname, '..' , 'views','404.html'));
    });
};

module.exports = {
    mapRoutes
};