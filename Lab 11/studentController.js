let students = [];
let idCounter = 1;
const path = require("path");
const fs = require("fs");

exports.getStudents = (req, res) => {
  res.json(students);
};

exports.addStudent = (req, res) => {
  const { name, course } = req.body;
  let imagePath = "";

  if (req.file) {
    imagePath = "/uploads/" + req.file.filename;
  }

  const newStudent = {
    id: idCounter++,
    name,
    course,
    image: imagePath,
  };

  students.push(newStudent);
  res.status(201).json({ message: "Student added", student: newStudent });
};

exports.deleteStudent = (req, res) => {
  const { id } = req.params;
  students = students.filter((student) => student.id !== parseInt(id));
  res.json({ message: "Student deleted" });
};