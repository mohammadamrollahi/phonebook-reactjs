import React, {Component} from 'react'
export default class personsCard extends React.Component
{
    state={
        contancts:[
            {id:1,name:"mohammad",lastname:"amrollahi",phon:"9207376575"},
            {id:2,name:"mohammad",lastname:"amrollahi",phon:"9207376575"},
            {id:3,name:"mohammad",lastname:"amrollahi",phon:"9207376575"},
            {id:4,name:"mohammad",lastname:"amrollahi",phon:"9207376575"}
        ]
    }
    render()
    {
        const {contancts}=this.state
        return(
            <div className="cardsContainer">
                {contancts.map((item)=>(
                    <div className="card">
                        
                    </div>
                )
                
                )}
            </div>
        )
    }
}