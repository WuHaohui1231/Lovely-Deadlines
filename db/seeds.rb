# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

todos = Todo.create([
    {
        title: "Have Lunch",
        description: "Go to dough magic",
        tag: "life",
        deadline: "12:00 at 22/01/2022",
        completed: true
    },
    {
        title: "CVWO Assignment",
        description: "Create a task management App",
        tag: "important",
        deadline: "25/01/2022",
        completed: false
    },
    {
        title: "Do something",
        description: "efagheahjuwe",
        tag: "life",
        deadline: "",
        completed: false
    },
    {
        title: "Does this work",
        description: "It does",
        tag: "",
        deadline: "25/01/2022",
        completed: false
    }
])