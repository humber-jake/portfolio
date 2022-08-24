import React, { useImperativeHandle } from 'react';
import { useState } from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Company(props, ref) {

    let { company } = props;

    const [collapsed, setCollapsed] = useState(false)

    function toggleCollapsed(){
        setCollapsed(!collapsed);
    }

    function collapse(){
        setCollapsed(true)
    }
    function expand(){
        setCollapsed(false)
    }

    useImperativeHandle(ref, () => {
        return {toggleCollapsed: toggleCollapsed, collapse: collapse, expand: expand}
    }, [])

    return (
        <div key={company.name} className='ExperienceCompany'>
            <div className='container'>
                <ArrowForwardIosIcon className={collapsed ? 'collapsed' : ''}/>
                <div className={'CompanyTitle'} onClick={toggleCollapsed}>{company.name}</div>
            </div>

            {company.position.map((pos, i) => 
                    <div key={pos.title} className={`ExperiencePosition ${collapsed ? 'collapsed' : ''}`}>
                        <div className={`ExperienceIcon`}></div>
                        <div className='ExperienceTitleContainer'>
                            <div className='ExperienceTitle'>{pos.title}</div>
                            <div className='ExperienceDates'>{pos.dates}</div>
                        </div>
                        <div className={((company.position.length > 1) && (i+1 !== company.position.length)) ? 'ExperienceIcon stretch' : ''}></div>
                        <div className='ExperiencePoints'>
                            {pos.points.map((point, i) =>
                                    <div key={i} className='ExperiencePoint'><KeyboardDoubleArrowRightIcon/>{point}</div>
                            )}
                        </div>
                    </div>
            )}
        </div>
    );
}


export default React.forwardRef(Company);