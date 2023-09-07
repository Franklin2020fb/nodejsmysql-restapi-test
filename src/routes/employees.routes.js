import { Router } from "express";
import { getEmployees, createEmployees, updateEmployees, deleteEmployees,updateEmployee, getEmployee,deleteEmployee} from "../controllers/employees.controller.js";

const router = Router();

router.get('/employees', getEmployees);

router.get('/employees/:id', getEmployee);

router.post('/employees', createEmployees);

router.patch('/employees/:id',updateEmployee)

router.put('/employees', updateEmployees);

router.delete('/employees/:id', deleteEmployee);

router.delete('/employees', deleteEmployees);

export default router;
