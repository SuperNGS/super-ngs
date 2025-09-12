export default class ProjectsModel {
    static async getProjects(app, id) {
        if( id != undefined ) {
            return app.locals.db.ref("/projects").child(`/${id}`).once('value', (snapshot) => {
                return snapshot.val();
            }).catch((err) => {
                throw err;
            });
        } else {
            return app.locals.db.ref("/projects").orderByChild("start_date").once('value', (snapshot) => {
                return snapshot.val();
            }).catch((err) => {
                throw err;
            });
        }
    }  
};