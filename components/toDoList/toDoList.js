/**
 * Created by kevin on 11/22/16.
 */
function toDoListController(){

    ctrl = this;

    ctrl.toDoList = [
        {
            title: 'Lecture',
            dueDate: '12/21/2017',
            status: 'open',
            details: 'Talk to people about stuff'
        },
        {
            title: 'Wash Car',
            dueDate: '12/2/2016',
            status: 'open',
            details: 'Hand wax and vacuum'
        },
        {
            title: 'Groceries',
            dueDate: '12/5/2016',
            status: 'open',
            details: 'Eggs, Milk, Bananas, Cereal, Coffee, Cheese, Sugar for coffee'
        },
        {
            title: 'Feed the bear',
            dueDate: '12/2/2016',
            status: 'open',
            details: 'Use caution'
        }];

    ctrl.addToList = function(){

    };

    ctrl.deleteFromList = function(){

    };

    ctrl.updateListItem = function(){

    };
}

angular.module('todoApp').component('toDoList', {
    templateUrl: './components/toDoList/toDoList.html',
    controller: toDoListController
});