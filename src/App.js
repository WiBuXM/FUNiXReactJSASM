import React, { Component }  from 'react';
import './App.css';
import Menu from './components/StaffListComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <div className="nav-bar bg-primary text-white p-3  mb-5">
          <div >Ứng Dụng Quản lý Nhân Sự V1.0</div>
        </div>
        <div>
          <div className="w-100 text-center mb-5 heading-title">Danh sách nhân sự</div>
        <Menu />
        </div>
      </header>
    </div>
  );
}

export default App;
