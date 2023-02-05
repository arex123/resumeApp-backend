var controlles = require('../controller/controllers')

module.exports = function(app){
    app.route('/login').post(controlles.login)
    app.route('/student_form').post(controlles.student_detail_submit)
    app.route('/student_list').get(controlles.student_list)
}