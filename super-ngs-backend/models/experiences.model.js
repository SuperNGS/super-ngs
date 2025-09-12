export default class ExperiencesModel {
    static async getExperiences(app, id) {
        if( id != undefined ) {
            return app.locals.db.ref("/experiences").child(`/${id}`).once('value', (snapshot) => {
                return snapshot.val();
            }).catch((err) => {
                throw err;
            });
        } else {
            return app.locals.db.ref('/experiences').orderBy("start_date").once('value', (snapshot) => {
                return snapshot.val();
            }).catch(err => {
                throw err;
            });
        }
    }
}