export default class SkillsModel {
    static async getSkills(app) {
        return app.locals.db.ref('/skills').once('value', (snapshot) => {
            return snapshot.val();
        }).catch(err => {
            throw err;
        });
    }
    static async getSoftSkills(app, id) {
        if( id != undefined ) {
            return app.locals.db.ref('/skills').child('/soft').child(`/${id}`).once('value', (snapshot) => {
                return snapshot.val();
            }).catch(err => {
                throw err;
            });
        } else {
            return app.locals.db.ref('/skills').child('/soft').once('value', (snapshot) => {
                return snapshot.val();
            }).catch(err => {
                throw err;
            });
        }
    }
    static async getTechnicalSkills(app, id) {
        if( id != undefined ) {
            return app.locals.db.ref('/skills').child('/technical').child(`/${id}`).once('value', (snapshot) => {
                return snapshot.val();
            }).catch(err => {
                throw err;
            });
        } else {
            return app.locals.db.ref('/skills').child('/technical').once('value', (snapshot) => {
                return snapshot.val();
            }).catch(err => {
                throw err;
            });
        }
    }
}

