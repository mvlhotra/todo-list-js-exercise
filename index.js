// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function () {
      this.complete = true;
    }
  };

  return task;

}


// DRIVER CODE BELOW

const task1 = newTask("Clean cat litter", "take all the poo out the litter box");
const task2 = newTask("Do laundry", "ugh man");

task1.logState();
task1.markCompleted();
task1.logState();
