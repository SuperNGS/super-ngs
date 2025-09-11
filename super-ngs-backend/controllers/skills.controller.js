import SkillsModel from '../models/skills.model.js';

export default class SkillsController {

    static async getSkills(req, res) {
        const id = req.query?.id;
        SkillsModel.getSkills(req.app, id)
            .then((data) => {
                return res.status(200).json({
                    success: true,
                    data: data
                });
            })
            .catch((err) => { 
                console.error(err);
                return res.status(500).json({
                    success: false,
                    message: 'Internal Server Error'
                });
             });
    }
}