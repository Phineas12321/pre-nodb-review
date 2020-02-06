import React, { Component } from 'react'

class Grass extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            grassClicked: false
        }
    }

    checkGrass(){}

    render(){
        return(
            <div>
                Grass
            </div>
        )
    }
}

export default Grass