import React from 'react';


const SerachBox = ({search , serachchange}) =>{

    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue"
            type='serch'
            placeholder="serch robot" 
            onChange ={serachchange}
            />
        </div>
    );

}
export default SerachBox;