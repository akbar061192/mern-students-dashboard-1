import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
  registrationNumber: {
    type: Number,
    required: 1,
  },
  name: String,
  grade: String,
  section: {
    type: String,
    defaul: 'A',
  },
});

const StudentModel = mongoose.model('student', studentSchema);

export default StudentModel;
