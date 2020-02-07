import React from 'react'
import Grass from './Grass'
import axios from 'axios'

class Finder extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            wildPokemon: [],
        }
    }

    componentDidMount(){
        axios.get('/api/wild-pokemon').then((res)=>{
            this.setState({
                wildPokemon: res.data,
            })

        })
    }

    render(){

        const pokemonList = this.state.wildPokemon.map(e => {
            return <Grass key = {e.id} catchPokemon = {this.props.catchPokemon} pokemon = {e} />
        })

        return(
            <div>
                {pokemonList}
            </div>
        )
    }
}

export default Finder