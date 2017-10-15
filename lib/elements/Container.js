import React from 'react'

export class Container extends React.Component {
    render(){
        var style = this.props.center ? styles.containerCenter : styles.container
        style = this.props.style ? { ...containerStyle, ...this.props.style } : style
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
    containerCenter: {
        textAlign: "center",
        width:"100%",
    }
}
