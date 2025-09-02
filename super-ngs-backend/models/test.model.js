export default class TestModel {
    static async test(app) {
        return app.locals.db.get('/public/test');
    }
}

