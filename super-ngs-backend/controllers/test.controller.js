import TestModel from '../models/test.model.js';

export default class TestController {
    static async test(req, res) {
        TestModel.test(req.app)
            .then((data) => {
                if (data.exists()) {
                    res.status(200).json({
                        success:true, 
                        data: data.val()
                    });
                } else {
                    res.status(404).json({ 
                        success:false, 
                        message: 'No data available'
                    });
                }
            }).catch((err) => { 
                console.error(err);
                return res.status(500).json({
                    success: false,
                    message: 'Internal Server Error'
                });
             });
    }
}