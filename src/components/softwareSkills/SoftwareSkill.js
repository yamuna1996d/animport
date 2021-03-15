import React from "react";
import "./SoftwareSkill.css";
import {skillsSection} from "../../portfolio";
import styled from 'styled-components'
import {Mongodb} from '@styled-icons/simple-icons/Mongodb'
import {Flutter} from '@styled-icons/remix-fill/Flutter'
export default function SoftwareSkill() {
  const Mongo = styled(Mongodb)`
  color: #868e96;
  height:50px;
`
const Flutt = styled(Flutter)`
color: #868e96;
height:50px;
`
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
              
            );
          })}<br></br>
          <Mongo></Mongo><Flutt/>
        </ul>
      </div>
    </div>
  );
}
