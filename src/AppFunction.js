import React from 'react'
import PropTypes from 'prop-types'

const AppFunction = props => {
    return (
        <div>
             <h1>App Parent Class Component=>{props.a}</h1>

            <button onClick={props.toogleModel}>toogleModel</button>
        </div>
    )
}

AppFunction.propTypes = {

}

export default AppFunction
