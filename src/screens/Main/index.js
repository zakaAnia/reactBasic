/* eslint-disable linebreak-style */
import React, { useState } from "react";
import Header from "../shared/Header";
import Table from "../shared/Table";

export default function Main() {
  const usersInitial = [
    { idUser: 1, firstName: "Jan", lastName: "Kowalski" },
    { idUser: 2, firstName: "Kazik", lastName: "Kaziowski" },
    { idUser: 3, firstName: "Tadzik", lastName: "Tadziowski" },
    { idUser: 4, firstName: "Zosia", lastName: "Zosiowska" },
    { idUser: 5, firstName: "Krysia", lastName: "Krysińska" },
    { idUser: 6, firstName: "Basia", lastName: "Basiak" },
    { idUser: 7, firstName: "Albert", lastName: "Albercki" },
  ];

  const [users, setUsers] = useState(usersInitial);
  const [selectedUser, setSelectedUser] = useState({});
  const [setSelectedHeader] = useState({});

  const addUser = (e) => {
    if (!users.length) {
      setUsers([
        ...users,
        {
          idUser: 1,
          firstName: "Aaa",
          lastName: "Bbb",
        },
      ]);
    } else {
      setUsers([
        ...users,
        {
          idUser: users[users.length - 1].idUser + 1,
          firstName: "Aaa",
          lastName: "Bbb",
        },
      ]);
    }
  };

  const deleteUser = (e) => {
    const usersList = users
      .slice()
      .filter((u) => u.idUser !== selectedUser.idUser);
    setUsers([...usersList]);
  };

  const sortUser = (c) => {
    if (c === "first name") {
      users.sort((user1, user2) => {
        const user1fname = user1.firstName.toLowerCase();
        const user2fname = user2.firstName.toLowerCase();
        let flag = 0;
        if (user1fname > user2fname) {
          flag = 1;
        } else if (user1fname < user2fname) {
          flag = -1;
        }
        return flag;
      });
    } else if (c === "last name") {
      users.sort((user1, user2) => {
        const user1lname = user1.lastName.toLowerCase();
        const user2lname = user2.lastName.toLowerCase();
        let flag = 0;
        if (user1lname > user2lname) {
          flag = 1;
        } else if (user1lname < user2lname) {
          flag = -1;
        }
        return flag;
      });
    } else if (c === "id user") {
      users.sort((user1, user2) => {
        let flag = 0;
        if (user1.idUser > user2.idUser) {
          flag = 1;
        } else if (user1.idUser < user2.idUser) {
          flag = -1;
        }
        return flag;
      });
    }
    setUsers([...users]);
  };

  const setCurrentlySelectedUser = (user) => {
    setSelectedUser(user);
  };

  const setCurrentlySelectedHeader = () => {
    setSelectedHeader();
  };

  return (
    <>
      <Header />
      <div className="container">
        <br />
        <button type="button" onClick={addUser} className="btn">
          Dodaj użytkownika
        </button>
        <button
          type="button"
          onClick={deleteUser}
          className="btn"
          style={{ float: "right" }}
        >
          Usuń użytkownika
        </button>
        <Table
          users={users}
          setSelectedUser={setCurrentlySelectedUser}
          selectedUser={selectedUser}
          setSelectedHeader={setCurrentlySelectedHeader}
          sortUser={sortUser}
        />
      </div>
    </>
  );
}
