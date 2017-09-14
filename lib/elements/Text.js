import React from 'react'

class Typography extends React.Component {
    render(){
        if (this.props.h1){
            return(<h1 style={styles.h1}>{this.props.children}</h1>)
        }else if (this.props.h2){
            return(<h2 style={styles.h3}>{this.props.children}</h2>)
        }else if (this.props.h3){
            return(<h3 style={styles.h3}>{this.props.children}</h3>)
        }else{
            return(<p style={styles.p}>{this.props.children}</p>)
        }

    }
}

const styles = {
    h1: {
        font: "Roboto, sans-serif",
    },
    h2: {
        font: "Roboto, sans-serif",
    },
    h3: {
        font: "Roboto, sans-serif",
    },
    p: {
        marginTop: 5,
        font: "Roboto, sans-serif",
    }
}

export default Typography
