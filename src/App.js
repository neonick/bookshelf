import React, { Component } from 'react';
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Badge from "./badge";
import BadgeList from "./BadgeList";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h1 className="mt-5 mb-5">Список чтения</h1>

          <table className="table table-hover table-border">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Название</th>
                  <th scope="col">Комментарий</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <a
                      className="d-block"
                      href="https://www.livelib.ru/book/1002950866-pochti-dva-kilogramma-slov-aleksej-polyarinov"
                    >
                      Почти два килограмма слов
                    </a>
                    <BadgeList className="" types="russian, fiction" />
                  </td>
                  <td>Посоветовал Тёма Лебедев </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <a
                      className="d-block"
                      href="https://www.livelib.ru/book/1002950866-pochti-dva-kilogramma-slov-aleksej-polyarinov"
                    >
                      Почти два килограмма слов
                    </a>
                    <p>
                      <span className="badge badge-warning">Warning</span>{" "}
                      <span className="badge badge-warning">Warning</span>{" "}
                      <span className="badge badge-warning">Warning</span>{" "}
                    </p>
                  </td>
                  <td>Посоветовал Тёма Лебедев </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <a
                      className="d-block"
                      href="https://www.livelib.ru/book/1002950866-pochti-dva-kilogramma-slov-aleksej-polyarinov"
                    >
                      Почти два килограмма слов
                    </a>
                    <p>
                      <span className="badge badge-warning">Warning</span>{" "}
                      <span className="badge badge-warning">Warning</span>{" "}
                      <span className="badge badge-warning">Warning</span>{" "}
                    </p>
                  </td>
                  <td>Посоветовал Тёма Лебедев </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <a
                      className="d-block"
                      href="https://www.livelib.ru/book/1002950866-pochti-dva-kilogramma-slov-aleksej-polyarinov"
                    >
                      Почти два килограмма слов
                    </a>
                    <p>
                      <span className="badge badge-warning">Warning</span>{" "}
                      <span className="badge badge-warning">Warning</span>{" "}
                      <span className="badge badge-warning">Warning</span>{" "}
                    </p>
                  </td>
                  <td>Посоветовал Тёма Лебедев </td>
                </tr>
              </tbody>
          </table>

          <h2 className="mb-5">Рассчеты и рекомендации:</h2>

          <div className="row">
            <div className="col-4">
              <div className="card bg-light mb-3">
                <div className="card-header">
                  Прочитано:{" "}
                  <span className="badge badge-pill badge-danger">10</span>{" "}
                  из{" "}
                  <span className="badge badge-pill badge-success">50</span>
                </div>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <Badge type="russian" />

                    <span className="badge badge-pill badge-secondary text-right">
                      3
                    </span>
                  </li>
                  <li className="list-group-item">
                    <Badge type="english" />
                    <span className="badge badge-pill badge-secondary text-right">
                      3
                    </span>
                  </li>
                  <li className="list-group-item">
                    <Badge type="fiction" />
                    <span className="badge badge-pill badge-secondary text-right">
                      3
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="card bg-light mb-3">
                <div className="card-header">
                  Прочитано:{" "}
                  <span className="badge badge-pill badge-danger">10</span>{" "}
                  из{" "}
                  <span className="badge badge-pill badge-success">50</span>
                </div>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <Badge type="russian" />

                    <span className="badge badge-pill badge-secondary text-right">
                      3
                    </span>
                  </li>
                  <li className="list-group-item">
                    <Badge type="english" />
                    <span className="badge badge-pill badge-secondary text-right">
                      3
                    </span>
                  </li>
                  <li className="list-group-item">
                    <Badge type="fiction" />
                    <span className="badge badge-pill badge-secondary text-right">
                      3
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="card bg-light mb-3">
                <div className="card-header">
                  Прочитано:{" "}
                  <span className="badge badge-pill badge-danger">10</span>{" "}
                  из{" "}
                  <span className="badge badge-pill badge-success">50</span>
                </div>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <Badge type="russian" />

                    <span className="badge badge-pill badge-secondary text-right">
                      3
                    </span>
                  </li>
                  <li className="list-group-item">
                    <Badge type="english" />
                    <span className="badge badge-pill badge-secondary text-right">
                      3
                    </span>
                  </li>
                  <li className="list-group-item">
                    <Badge type="fiction" />
                    <span className="badge badge-pill badge-secondary text-right">
                      3
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
