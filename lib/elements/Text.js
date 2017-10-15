import React from 'react'

class Typography extends React.Component {
    render(){
        let style = this.props.style ? {...this.props.style, ...styles.text} : styles.text
        let text = null
        if (this.props.h1){
            text = <h1 style={styles.h1}>{this.props.children}</h1>
        }else if (this.props.h2){
            text = <h2 style={styles.h2}>{this.props.children}</h2>
        }else if (this.props.h3){
            text = <h3 style={styles.h3}>{this.props.children}</h3>
        }else{
            text = <p style={styles.p}>{this.props.children}</p>
        }
        return(
            <span style={style}>
                {text}
            </span>
        )

    }
}

const styles = {
    text: {
        fontFamily: '"Roboto", sans-serif',
    },
    h1: {
        marginBottom: "5px",
    },
    h2: {

    },
    h3: {
    },
    p: {
        marginTop: 5,
    }
}

export default Typography
