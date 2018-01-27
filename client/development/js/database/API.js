let faculties = require('./jsonData/getFaculties');
let specialties = require('./jsonData/getSpecialtys');
let courses = require('./jsonData/getCourses');
let groups = require('./jsonData/getGroups');
let groupLessons = require('./jsonData/getGroupLessons');
let pulpits = require('./jsonData/getPulpits');
let teacher = require('./jsonData/getTeacher');
let teacherLessons = require('./jsonData/getTeacherLessons');

let Faculty = require('./model/Faculty');

/**
 * Используется для получения данных.
 * @constructor
 */
function API() {

    /**
     * return {Faculty}
     */
    this.getFaculties = function () {
        return faculties.map((val) => new Faculty(val));
    };
    this.getSpecialtys = function (idFaculty) {
        return specialties;
    };
    this.getCourses = function (idFaculty, idsSpecialty) {
        return courses;

    };
    this.getGroups = function (idFaculty, idCourse, idsSpecialty) {
        return groups;

    };
    this.getGroupLessons = function (idsScheduleGroup, dateFrom, dateTo) {
        return groupLessons;

    };
    this.getPulpits = function () {
        return pulpits;

    };
    this.getTeacher = function (idPulpit) {
        return teacher;

    };
    this.getTeacherLessons = function (idsTeacher, dateFrom, dateTo) {
        return teacherLessons;

    };
}

module.exports = API;