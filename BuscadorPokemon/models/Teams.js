const {v4: uudiv4} = require('uuid');

class Team {

    Id = '';
    List = [];

    constructor(List){
        this.Id = uudiv4();
        this.List = List;
    }
}

module.exports = {Team: Team};
