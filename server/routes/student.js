import express from 'express';
import { getAllStudents, createNewStudent, deleteStudents } from '../controllers/student.js';
const router = express.Router();

router.get('/', getAllStudents).post('/', createNewStudent).delete('/', deleteStudents);

export default router;
