class Task  {
    constructor(name, description, finished, dueDate) {
        this.name = name,
        this.description = description;
        this.finished = finished;
        this.dueDate = dueDate;
    }
}
 
let TaskBuilder = function() {
    return {
        setName: function(name) {
            this.name = name;
            return this;
        },
        setDescription: function(description) {
            this.description = description;
            return this;
        },
        setFinished: function(finished) {
            this.finished = finished;
            return this;
        },
        setDueDate: function(dueDate) {
            this.dueDate = dueDate;
            return this;
        },
        
        build: function() {
            return new Task(this.name, this.description, this.finished, this.dueDate);
        }
    }
}

let task = new TaskBuilder()
.setName('Task 1')
.setDescription('Task 1   aaaaaaaaaaaaa')
.setFinished(false)
.setDueDate(new Date(2023, 1, 1))
.build()
console.log(task)