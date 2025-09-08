import PublicModel from '../models/public.model.js';

export default class PublicController {
    static async getHeadshot(req, res) {
        PublicModel.getHeadshot(req.app)
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