import React from 'react'

class FileInput extends React.Component {
    render(){
    var label = this.props.label
    var type = this.props.type || "file"
    var name = this.props.name || "file"
    return(
        <div style={styles.container}>
            { label ? <label style={styles.label}>{label}</label> : null }
            <input name={name} type={type} onChange={this.props.onChange} />
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
    container:{

    }
}

export default FileInput
