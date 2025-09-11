export default class SkillsModel {
    static async getSkills(app, id) {
        if(id) {
            return app.locals.db.ref('/skills').child(`/${id}`).once('value', (snapshot) => {
                return snapshot.val();
            }).catch(err => {
                throw err;
            });
        } else {
            return app.locals.db.ref('/skills').once('value', (snapshot) => {
                return snapshot.val();
            }).catch(err => {
                throw err;
            });
        }
    }
}

