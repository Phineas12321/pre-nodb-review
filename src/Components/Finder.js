import React from 'react'
import Grass from './Grass'

class Finder extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            wildPokemon: [],
        }
    }

    componentDidMount(){}

    render(){
        return(
            <div>
            Finder
            <Grass/>
            </div>
        )
    }
}

export default Finder