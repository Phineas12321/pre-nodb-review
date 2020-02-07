import React from 'react'

class Grass extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            grassClicked: false
        }
    }

    checkGrass(){}

    render(){
        console.log(this.props)
        return(
            <div>
                <p>{this.props.pokemon.name} </p>
                <img src={this.props.pokemon.sprites.front_default} alt={''}
                onClick={()=>{
                    this.props.catchPokemon({
                        name: this.props.pokemon.name,
                        image: this.props.pokemon.sprites.front_default
                    })
                }} />
            </div>
        )
    }
}

export default Grass