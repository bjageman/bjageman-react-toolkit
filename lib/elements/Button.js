import React from 'react'

import DynamicStyle from './utils/DynamicStyle'

class Button extends DynamicStyle {
    setButtonType(){
        if (this.props.raised){
            return styles.raised
        }else if (this.props.float){
            return styles.float
        }else{
            return styles.flat
        }
    }

    render(){
        var style = this.setButtonType()
        style = this.setStyle(style)
        return(
            <div style={styles.button}>
                <button
                    onMouseDown={this.enableActive}
                    onMouseUp={this.disableActive}
                    onMouseEnter = {this.enableHover}
                    onMouseLeave = {this.disableAll}
                    style={style}>{this.props.children}</button>
            </div>
        )
    }
}

const styles = {
    button: {
        border: "none",
        cursor: "pointer",
        fontSize: "15px",
        fontFamily: "sans-serif",
        transition: "all 300ms ease",
    },
    float: {
        border: "inherit",
        cursor: "inherit",
        font: "inherit",
        zIndex: 6,
        position: "fixed",
        bottom: "30px",
        right: "30px",
        boxShadow: "0px 2px 5px #666",
        borderRadius:"50%",
        height:"56px",
        width:"56px",
        backgroundColor:"rgba(255,87,34 ,1)",
        color: "white",
        textAlign: "center",
        justifyContent: "center",
        active: {
            zIndex: 12,
            boxShadow: "0px 12px 12px rgba(0, 0, 0, .38)",
        }
    },
    flat: {
        border: "inherit",
        cursor: "inherit",
        font: "inherit",
        margin: "5px",
        padding: 0,
        background: "none",
        color: "#2196F3",
        active: {
            color: "gray",
        },
        hover: {
            color: "gray",
        }
    },
    raised: {
        border: "inherit",
        cursor: "inherit",
        font: "inherit",
        minWidth: "88px",
        height: "36px",
        borderRadius: "5px",
        marginRight: "1%",
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "25px",
        paddingRight: "25px",
        transition: "all 300ms ease",
        backgroundColor: "rgba(3,169,244 ,1)",
        color: "white",
        boxShadow: "0px 0px 0px rgba(0, 0, 0, .38)",
        active: {
            backgroundColor: "#0288D1",
            boxShadow: "0px 2px 2px rgba(0, 0, 0, .38)",
        },
        hover: {
            backgroundColor: "#0288D1",
            color: "white",
        }
    },
}

export default Button
