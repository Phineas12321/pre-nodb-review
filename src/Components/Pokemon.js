import React from 'react'

class Pokemon extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isEditing: false,
            userInput: '',
        }
    }

    toggleEdit(){
        if(this.state.isEditing){
            this.state.isEditing = false
        }else{
            this.state.isEditing = true
        }
    }

    handleChange(e){

    }

    render(){
        return(
            <div>
                Pokemon
            </div>
        )
    }
}

export default Pokemon