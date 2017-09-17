import React from 'react'

class TextInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {focus: false}
    }
    render(){
    var { fullWidth, label, ...other } = this.props
    var inputStyle = this.state.focus ?  {...styles.input, ...styles.input.focus} : styles.input
    return(
        <div style={styles.container}>
        { label ? <label style={styles.label}>{label}</label> : null }
        <input
            style={inputStyle}
            type="text"
            onFocus={() => this.setState({focus: true})}
            onBlur={() => this.setState({focus: false})}
            {...other}
             />
        </div>
        )
    }
}

const styles = {
    label: {
        display: "block",
        fontSize: "10px",
        color: "#555"
    },
    input: {
        width: "200px",
        padding: "12px 20px",
        margin: "1% 0% 1% 0%",
        boxSizing: "borderBox",
        border: "3px solid #ccc",
        transition: "0.5s",
        outline: "none",
        focus: {
            border: "3px solid #555",
        }
    }
}

export default TextInput
