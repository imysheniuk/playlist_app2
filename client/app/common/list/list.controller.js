class ListController {
    constructor() {
        this.name = 'list';
    }
}

export default ListController;


// angular.module('myModule')
//   .controller('MyAppComponent', function(dependency1, dependency2){
//     //My controller code using dependencies
//     this.name = dependency1.getName();
//   })

//   export default class MyAppComponent {
//     constructor(dependency1, dependency2) {
//       this.dependency1 = dependency1;
//       this.dependency2 = dependency2;
//     }
//     myName() {
//       return this.dependency1.getName();
//     }
//   }