import React, { useState, useEffect } from 'react';
import firebaseDb from '../../config/firebase.js';
import { Link } from 'react-router-dom';
import './styles.css';
import { toast } from 'react-toastify';

const Home = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    firebaseDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({
          ...snapshot.val(),
        });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, []);

  const onDelete = (id) => {
    if (window.confirm("Você tem Certeza que Deseja Deletar Esse Usuário ?")) {
      firebaseDb.child(`contacts/${id}`).remove((err) => {
        if (err) {
          console.log(err);
        } else {
          toast.success("Usuário Deletado com Sucesso");
        }
      });
    }
  };
  return (
    <div className="home">
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Contato</th>
            <th>Ações (CRUD)</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{data[id].name}</td>
                <td>{data[id].email}</td>
                <td>{data[id].contact}</td>
                <td>
                  <Link to={`/update/${id}`}>
                    <button className="btn btn-edit">Editar</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => onDelete(id)}
                  >
                    Deletar
                  </button>
                  <Link to={`/view/${id}`}>
                    <button className="btn btn-view">Ver</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;