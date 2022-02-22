import React from 'react';
import Student from "./Student"

const Students = () => {

  const students = [
    {
      id: 1,
      name: "Анна Каренина",
      rating: "H",
    },
    {
      id: 2,
      name: "Алла Пугачева",
      rating: "H",
    },
    {
      id: 3,
      name: "Макка Межиева",
      rating: "H",
    },
  ]


  return (
    <>
      <table>
      <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Студент</th>
        <th scope="col">Отметка</th>
      </tr>
      </thead>
      </table>
      {students.map(student => {
        return (
          <Student
          key={student.id}
          id={student.id}
          name={student.name}
          rating={student.rating}
          />
          )
      })}
    </>
  );
};

export default Students;