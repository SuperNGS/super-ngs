export default class TestModel {
    static async test(app) {
        return app.locals.db.ref('/public').child('/test').once('value', (snapshot) => {
            return snapshot.val();
        }).catch(err => {
            console.error(err);
            throw err;
        });
    }
}

