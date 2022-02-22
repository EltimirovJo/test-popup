import React, { useState } from 'react';
import Modal from "../Modal/Modal"

const Student = ({ id, name, rating }) => {

  const [modalActive, setModalActive] = useState(false)

  return (
    <div>
    <table className="table">
      <tbody>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td><button className={"rating"} onClick={() => setModalActive(true)}>{rating}</button>
        </td>
      </tr>
      </tbody>
    </table>
      <Modal active={modalActive} setActive={setModalActive}>
        <p className="zagolovok">Поставить отметку</p>
        <div className="modal1">
          <p className="student">Студент</p>
          <p>{name}</p>
        </div>
        <div className="modal1">
          <p className="date">Дата</p>
          <p>21.11.2021</p>
        </div>
        <div className="check">
          <input type="checkbox"/>
          <p className="attend">Не присутствовал</p>
        </div>
        <div className="input">
          <input type="text" className="form-control"/>
        </div>
        <div className="button">
          <button className="button-control">Поставить отметку
          </button>
        </div>
      </Modal>
    </div>
  );
};
export default Student;