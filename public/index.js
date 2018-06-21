

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      tasks: [],
      newTask: {
                id: "",
                text: "",
                completed: ""
                }
    };
  },
  created: function() {
    axios
    .get('/api/tasks')
    .then(function(response) {
      this.tasks = response.data;
    }.bind(this));
  },
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
    },

    toggleCompleted: function(inputTask) {
      inputTask.completed = !inputTask.completed;
    },

    numberOfIncompleteTasks: function(inputTask) {
      var count = 0;

      this.tasks.forEach(function(task) {
        if (!task.completed) {
          count++;
        }
      });

      return count;
    },

    deleteCompleted: function() {
      var incompleteTasks = [];
      this.tasks.forEach(function(task) {
        if (!task.completed) {
          incompleteTasks.push(task);
        }
      });
      this.tasks = incompleteTasks;
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