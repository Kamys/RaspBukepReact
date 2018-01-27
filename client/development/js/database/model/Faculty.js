function Faculty(json) {
    this.getName = function () {
        return json['faculty']['value']
    };
    this.getKey = function () {
        return json['faculty']['key']
    };
    this.getIsActiveSchedule = function () {
        return json['isActiveSchedule']
    };
    this.toString = function () {
        return `${this.getName()} - ${this.getKey()} - ${this.getIsActiveSchedule()}`;
    }
}

module.exports = Faculty;