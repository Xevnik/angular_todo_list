/**
 * Created by kevin on 11/22/16.
 */
function toDoListController(){
    this.toDoList = [];

    this.addToList = function(){

    };

    this.deleteFromList = function(){

    };

    this.updateListItem = function(){

    };

}

angular.module('todoApp').component('toDoList', {
    templateUrl: 'toDoList.html',
    controller: toDoListController
});