export default class PublicModel {
    static async getHeadshot(app) {
        return app.locals.db.ref('/public').child('/headshot').once('value', (snapshot) => {
            return snapshot.val();
        }).catch(err => {
            throw err;
        });
    }

    static async getHeadline(app) {
        return app.locals.db.ref('/public').child('/headline').once('value', (snapshot) => {
            return snapshot.val();
        }).catch(err => {
            throw err;
        });
    }

    static async getHeadlineName(app) {
        return app.locals.db.ref('/public').child('/headline').child('/name').once('value', (snapshot) => {
            return snapshot.val();
        }).catch(err => {
            throw err;
        });
    }

    static async getHeadlineTitle(app) {
        return app.locals.db.ref('/public').child('/headline').child('/name').once('value', (snapshot) => {
            return snapshot.val();
        }).catch(err => {
            throw err;
        });
    }

    static async getHeadlineLinkedin(app) {
        return app.locals.db.ref('/public').child('/headline').child('/linkedin').once('value', (snapshot) => {
            return snapshot.val();
        }).catch(err => {
            throw err;
        });
    }

    static async getHeadlineGithub(app) {
        return app.locals.db.ref('/public').child('/headline').child('/github').once('value', (snapshot) => {
            return snapshot.val();
        }).catch(err => {
            throw err;
        });
    }
}

