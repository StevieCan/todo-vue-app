/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      tasks: [
            { id: 1, 
              text: "Finish MVP", 
              completed: true 
            }, { 
              id: 2, 
              text: "Drink Water", 
              completed: true
            }, {
              id: 3, 
              text: "Pray cuz u need some Jesus", 
              completed: false 
            }
            ],
      newTask: {
                id: "",
                text: "",
                completed: ""
                }
    };
  },
  created: function() {},
  methods: {
    addTask: function() {
      var message = "You need to add a task";
      var newTaskInfo = {
                        id: this.newTask.id,
                        text: this.newTask.text,
                        completed: this.newTask.completed
                      };
      if (this.newTask.text) {
        this.tasks.push(newTaskInfo);
        this.newTask = '' ;
      } else {
        return message;
      }
     
    }, 
    markComplete: function(inputTask) {
      var indexOfTask = this.tasks.indexOf(inputTask);
      this.tasks.splice(indexOfTask, 1);
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});