let faculties = require('./jsonData/getFaculties');
let specialtys = require('./jsonData/getSpecialtys');
let courses = require('./jsonData/getCourses');
let groups = require('./jsonData/getGroups');
let groupLessons = require('./jsonData/getGroupLessons');
let pulpits = require('./jsonData/getPulpits');
let teacher = require('./jsonData/getTeacher');
let teacherLessons = require('./jsonData/getTeacherLessons');

function providerData() {

    this.getFaculties = function () {
        return faculties;
    };
    this.getSpecialtys = function (idFaculty) {
        return specialtys;

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

module.exports = providerData;