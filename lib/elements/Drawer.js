import React from 'react'

import OutsideClickDetect from './utils/OutsideClickDetect'

class Drawer extends React.Component {

    handleOnRequestClose() {
        if (this.props.open && this.props.onOutsideClick) {
            this.props.onOutsideClick()
        }
    }

    render(){
        var container = this.props.open ? { ...styles.container, ...styles.container.open } : styles.container
        return(
            <OutsideClickDetect onOutsideClick={() => this.handleOnRequestClose()} >
            <div
                style={container}
                onClick = {this.props.onClick}
                >
                {this.props.children}
            </div>
            </OutsideClickDetect>
            )
    }
}

const styles = {
    container: {
        height: "100%",
        width: 0,
        position: "fixed",
        zIndex: 1,
        top: 0,
        left: 0,
        backgroundColor: "white",
        overflowX: "hidden",
        transition: "0.3s",
        open: {
            width: "250px",
        }
    }
}

export default Drawer
