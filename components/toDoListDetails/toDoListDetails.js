/**
 * Created by kevin on 11/22/16.
 */
function detailsController(){

    ctrl = this;


}

angular.module("todoApp").component("listDetails", {
    templateUrl: "./components/toDoListDetails/toDoListDetails.html",
    controller: detailsController,
    bindings: {
        details: "<"
    }
});