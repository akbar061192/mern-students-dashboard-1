import StudentModel from '../models/student.js';

const getAllStudents = async (req, res) => {
  try {
    const students = await StudentModel.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createNewStudent = async (req, res) => {
  const student = req.body;
  try {
    const newStudentData = new StudentModel(student);
    // await newStudentData.save();

    await StudentModel.create(newStudentData);
    res.status(201).json(newStudentData);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteStudents = async (req, res) => {
  const { deleteStudents } = req.body;
  try {
    deleteStudents.map(async student => {
      await StudentModel.deleteOne({ _id: student._id });
      res.send('Deleted Successfully');
    });
  } catch (error) {
    console.log(error.message);
  }
};

export { getAllStudents, createNewStudent, deleteStudents };
