import React from 'react'
import  styles from './findteachers.module.css';
import { NavLink, Outlet } from 'react-router-dom';


function FindTeachers() {
  const teacherList = ["Adam","Ales","Petr"]
  const randomTeacherName = teacherList[Math.floor(Math.random()*teacherList.length)]

  return (
    <div className={styles.title} >FindTeachers
    <NavLink to={`/findteachers/${randomTeacherName}`}>{randomTeacherName}
      
    </NavLink>    
    
    <Outlet/>
    
    </div>
  )
}

export default FindTeachers