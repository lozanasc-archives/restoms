import React from 'react';
import Label from '../../../../common/Label/Label';

import Leo from '../../../../../assets/members/member01.png';
import Erica from '../../../../../assets/members/member02.png';
import Sean from '../../../../../assets/members/member03.png';

const About = () => {
    return (
        <div className = "AboutContainer">
            <Label
                LabelContent = "About"
                isLabelContrast = {true}
                Style = {{textAlign: 'start'}}
            />
            <Label
                LabelContent = "This page is only available for the development/prototyping stage, this page or module will not be included in deployment."
                Style = {{textAlign: 'start', color: '#E56B6F', fontSize: 'clamp(10px,20px,30px)'}}
            />
            <Label
                LabelContent = {`A Software Analysis and Design and Software Engineering I/II projects for the entire AY 2020-2021
                A web-based Restaurant Management System that is maximizing on the ability of Progressive Web Applications that will enable clients to use the system on multiple platforms thus reducing cost on development. The system also have built-in integrated logging system for covid safety protocol compliance.`}
                isLabelContrast = {true}
                Style = {{textAlign: 'start', fontSize: 'clamp(10px,20px,30px)'}}
            />
            <Label
                LabelContent = "Members"
                isLabelContrast = {true}
                Style = {{textAlign: 'start', fontSize: 'clamp(20px,40px,50px)'}}
            />
            <div className="MemberListContainer">
                <div className="MemberCard">
                    <img src={Leo} alt=""/>
                    <Label
                        LabelContent = "Leo Lloyd Catalan"
                        Style = {{color: '#ffff', fontSize: 'clamp(10px,20px,30px)'}}
                    />
                </div>
                <div className="MemberCard">
                    <img src={Erica} alt=""/>
                    <Label
                        LabelContent = "Erica Marie Pastidio"
                        Style = {{color: '#ffff', fontSize: 'clamp(10px,20px,30px)'}}
                    />
                </div>
                <div className="MemberCard">
                    <img src={Sean} alt=""/>
                    <Label
                        LabelContent = "Sean Christian Lozana"
                        Style = {{color: '#ffff', fontSize: 'clamp(10px,20px,30px)'}}
                    />
                </div>
            </div>

        </div>
    )
}

export default About;
