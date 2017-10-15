import React from 'react'

export default class Checkbox extends React.Component {
    render(){
        var {style, ...other} = this.props
        style = this.props.style ? { ...styles.checkbox, ...this.props.style } : styles.checkbox
        return(
            <div>
                <input
                    style={styles.checkbox}
                    checked={this.props.value}
                    type="checkbox"
                    id={ "checkbox_" + this.props.label }
                    {...other} />
                <label style={styles.checkbox} htmlFor={ "checkbox_" + this.props.label }>{this.props.label}</label>
            </div>
        )
    }
}


const styles = {
    checkbox: {
        cursor: "pointer",
    },
}
