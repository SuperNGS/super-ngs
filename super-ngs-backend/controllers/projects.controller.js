import ProjectsModel from '../models/projects.model.js';

export default class ProjectsController {
    static async getProjects(req, res) {
        const id = req.query?.id;
        ProjectsModel.getProjects(req.app, id)
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
};