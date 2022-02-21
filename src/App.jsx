import Modal from './Modal/Modal';
import { useState } from 'react';


function App() {

  const [modalActive, setModalActive] = useState(false)

  return (
    <div className="contaiter">
      <table>
        <tr>
          <th>#</th>
          <th>ФИО студента</th>
          <th>Отметка</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Ирина</td>
          <button className={"rating"} onClick={() => setModalActive(true)}>н</button>
        </tr>
        <tr>
          <td>2</td>
          <td>Саня</td>
          <button className={"rating"}>5</button>
        </tr>
        <tr>
          <td>3</td>
          <td>Наташа</td>
          <button className={"rating"}>н</button>
        </tr>
      </table>
      <Modal active={modalActive} setActive={setModalActive}>
        <p className="zagolovok">Поставить отметку</p>
        <div className="modal1">
        <p className="student">Студент</p>
        <p>Ирина</p>
        </div>
        <div className="modal1">
          <p className="date">Дата</p>
          <p>21.11.2021</p>
        </div>
        <div className="check">
          <input type="checkbox"/>
          <p className="attend">Не присутстовал</p>
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
  )
}

export default App;
