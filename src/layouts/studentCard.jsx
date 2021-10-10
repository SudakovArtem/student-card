import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {prettifyYear} from '../utils/prettifyYear';

const StudentCard = () => {
  const [data] = useState(JSON.parse(localStorage.getItem('student')));

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h1 className="mb-4">Карточка студента</h1>
          {data ? (
            <>
              <p className="mb-4 mt-0"><b>Имя:</b> {data.name}</p>
              <p className="mb-4 mt-0"><b>Фамилия:</b> {data.surname}</p>
              <p className="mb-4 mt-0"><b>Год рождения:</b> {data.year} ({prettifyYear(data.year)})</p>
              <p className="mb-4 mt-0"><b>Портфолио:</b> <a href={data.portfolio}>{data.portfolio}</a></p>
            </>
          ) : <p>Нет данных</p>}
          <Link className="btn btn-primary" to="/form">{data ? 'Редактировать' : 'Добавить'}</Link>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
