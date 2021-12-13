const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Qs_4corrected", {
    useNewUrlParser: true
});

const detailsSchema = new mongoose.Schema({
    name: String,
    age: Number,
    dob: Date,
    yearofadm: Number
});

const Student = mongoose.model("Student", detailsSchema)

const Binayak = new Student({
    name: "Binayak",
    age: 19,
    dob: "2002-10-11",
    yearofadm: 2020,
});

const Bishnu = new Student({
    name: "Bishnu",
    age: 18,
    dob: "2001-09-11",
    yearofadm: 2020,
});

const Neo = new Student({
    name: "Neo",
    age: 20,
    dob: "2000-10-11",
    yearofadm: 2021,
});

const Neil = new Student({
    name: "Neil",
    age: 30,
    dob: "1992-10-15",
    yearofadm: 2009,
});

const ABC = new Student({
    name: "ABC",
    age: 26,
    dob: "1995-09-11",
    yearofadm: 2012,
});

Student.insertMany([Binayak, Bishnu, Neo, Neil, ABC], function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("All records added");
    }
});

Student.find(function (err, student) {
    if (err) {
        console.log(err)
    } else {
        student.forEach((student) => {
            console.log(student);
        });
    }
})


var sortage = { age: 1 };
Student.find({}, function (err, result) {
    if (err) {
        console.log("error query")
    } else {
        console.log(result)
    }
}).sort(sortage)



Student.updateOne({ name: "Neil" }, { age: 25 }, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Updated');
    }
})

Student.find(function (err, student) {
    if (err) {
        console.log(err)
    } else {
        student.forEach((student) => {
            console.log(student);
        });
    }
}).limit(4)

var sortage = { age: 1 };
Student.find({age:{$gte:25}}, function (err, result) {
    if (err) {
        console.log("error query")
    } else {
        console.log(result)
    }
}).sort(sortage)

