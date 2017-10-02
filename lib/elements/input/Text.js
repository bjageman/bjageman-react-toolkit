import React from 'react'

export class TextInput extends React.Component {
    state = {focus: false}

    render(){
    var { style, label, ...other } = this.props
    var inputStyle = this.state.focus ?  {...styles.input, ...styles.input.focus} : styles.input
    inputStyle = this.props.style ? { ...inputStyle, ...this.props.style } : inputStyle
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

export class TextArea extends React.Component {
    state = {focus: false}

    render(){
    var { fullWidth, label, ...other } = this.props
    var inputStyle = this.state.focus ?  {...styles.area, ...styles.area.focus} : styles.area
    return(
        <div style={styles.container}>
        { label ? <label style={styles.label}>{label}</label> : null }
        <textarea
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
        fontFamily: '"Roboto", sans-serif',
        display: "block",
        fontSize: "10px",
        color: "#555"
    },
    input: {
        fontFamily: '"Roboto", sans-serif',
        fontSize: "16px",
        width: "200px",
        padding: "12px 20px",
        margin: "1% 0% 1% 0%",
        boxSizing: "border-box",
        border: "3px solid #ccc",
        transition: "0.5s",
        outline: "none",
        focus: {
            border: "3px solid #555",
        }
    },
    area: {
        width: "100%",
        height: "150px",
        padding: "12px 20px",
        boxSizing: "border-box",
        border: "2px solid #ccc",
        borderRadius: "4px",
        backgroundColor: "#f8f8f8",
        fontSize: "16px",
        resize: "none",
        focus: {
            border: "3px solid #555",
        }
    }
}
