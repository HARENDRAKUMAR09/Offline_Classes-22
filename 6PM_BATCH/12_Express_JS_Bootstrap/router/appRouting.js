const path = require('path');

let mapRoutes = (app) => {

    // for Home Page
    app.get('/',(request,response) => {
        response.sendFile(path.join(__dirname, '..' , 'views','index.html'));
    });

    // for About Us Page
    app.get('/about',(request,response) => {
        response.sendFile(path.join(__dirname, '..' , 'views','about.html'));
    });

    // for services Page
    app.get('/services',(request,response) => {
        response.sendFile(path.join(__dirname, '..' , 'views','services.html'));
    });

    // for Profile Page
    app.get('/profile',(request,response) => {
        response.sendFile(path.join(__dirname,  '..' , 'views','profile.html'));
    });

    // for Profile Page w
    app.get('/profile',(request,response) => {
        response.sendFile(path.join(__dirname,  '..' , 'views','profile.html'));
    });

    // for Contact Us Page
    app.get('/contact',(request,response) => {
        response.sendFile(path.join(__dirname, '..' , 'views','contact.html'));
    });

    // for 404 page
    app.use((request,response) => {
        response.sendFile(path.join(__dirname, '..' , 'views','404.html'));
    });
};

module.exports = {
    mapRoutes
};