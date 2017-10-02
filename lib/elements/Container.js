import React from 'react'

export class Container extends React.Component {
    render(){
        var style = this.props.style ? { ...styles.container, ...this.props.style } : styles.container
        return(
            <div style={style} >
                {this.props.children}
            </div>
        )
    }
}


const styles = {
    container: {
        overflow: "auto",
        width:"100%",
        boxSizing: "border-box",
        padding: "10px",
    },
}
