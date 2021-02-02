import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'school_db',
    password: 'postgres',
    port: 5432,
});

const getTeachers = (req: any, res:any) => {
    pool.query('SELECT * FROM teacher ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  };

  const getTeacherById = (req: any, res:any) => {
    const id = parseInt(req.params.id)

    pool.query('SELECT * FROM teacher WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  };

  const createTeacher = (req: any, res:any) => {
    const { name, last_name, age, sex, years_of_experience, worked_in_universities, can_teach_subjects } = req.body

    pool.query('INSERT INTO teacher (name, last_name, age, sex, years_of_experience, worked_in_universities, can_teach_subjects) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
      [name, last_name, age, sex, years_of_experience, worked_in_universities, can_teach_subjects ], 
      (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send(`User added with ID: ${results}`)
    })
  };

  const updateTeacher = (req: any, res:any) => {
    const id = parseInt(req.params.id)
    const { name, last_name, age, sex, years_of_experience, worked_in_universities, can_teach_subjects } = req.body

    pool.query(
      'UPDATE teacher SET name = $1, last_name = $2, age = $3, sex = $4, years_of_experience = $5, worked_in_universities = $6, can_teach_subjects = $7, id WHERE id = $8',
      [name, last_name, age, sex, years_of_experience, worked_in_universities, can_teach_subjects, id],
      (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send(`User modified with ID: ${id}`)
      }
    )
  };

  const deleteTeacher = (req: any, res:any) => {
    const id = parseInt(req.params.id)

    pool.query('DELETE FROM teacher WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`User deleted with ID: ${id}`)
    })
  };


  export { getTeachers, getTeacherById, createTeacher, updateTeacher, deleteTeacher};
