import { ref, getDownloadURL } from "firebase/storage";

export default class HomeModel {
    static async getHeadshot(app) {
        return app.locals.db.ref('/public').child('/headshot').once('value', (snapshot) => {
            return snapshot.val();
        }).catch(err => {
            throw err;
        });
    }
}

