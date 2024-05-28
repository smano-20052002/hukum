import React from 'react'
import logo from "../assets/file.png"

import "../style/Sidebar.css"
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import MapsHomeWorkRoundedIcon from '@mui/icons-material/MapsHomeWorkRounded';
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';

export const Sidenavbar=()=>{

    const fixedSidebarStyle = {
        position: 'fixed',
       // top: 0,
        //left: 0,
       // bottom: 0,
        //width: '250px', // Adjust the width as needed
        //overflowY: 'auto',
        backgroundColor: '#23275c',
        color:'#23275c' // Adjust the color as needed
    };
    return (
        <div>
            
            <SideNav id="Admin-Side-bar"
                onSelect={(selected) => {
                   console.log("selected")
                }}
                className="sidenav"
  
            >
                
                <SideNav.Toggle />
                
                <SideNav.Nav defaultSelected="home">
                <NavItem>
                        <NavIcon>
                        <img src={logo} width={50} height={50}/>
                        </NavIcon>
                        <NavText style={{ fontSize: '1.75em' }}>
                            LXP
                        </NavText>
                    </NavItem>
                
                    <NavItem eventKey="home">
                        <NavIcon>
                            <MapsHomeWorkRoundedIcon style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="course">
                        <NavIcon>
                            <LocalLibraryRoundedIcon style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Course
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="learners">
                        <NavIcon>
                            <PeopleRoundedIcon style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Learners
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Reports">
                        <NavIcon>
                            <AssessmentRoundedIcon style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Reports
                        </NavText>
                        <NavItem eventKey="userReport">
                            {/* <NavIcon>
                                <PeopleRoundedIcon />
                            </NavIcon> */}
                            <NavText>
                                Learner Reports
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="courseReport">
                            {/* <NavIcon>
                                <LocalLibraryRoundedIcon />
                            </NavIcon> */}
                            <NavText>
                                Course Reports
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="courseEnroll">
                            <NavText>
                                Course Enrollement
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="quiz">
                            <NavText>
                               Quiz Report
                            </NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
           
        </div>
    )
}


