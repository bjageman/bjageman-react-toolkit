import React from 'react'

class DynamicStyle extends React.Component {
    constructor(props){
        super(props)
        this.enableHover = this.enableHover.bind(this)
        this.enableActive = this.enableActive.bind(this)
        this.enableFocus = this.enableFocus.bind(this)
        this.enableSelected = this.enableSelected.bind(this)
        this.disableHover = this.disableHover.bind(this)
        this.disableActive = this.disableActive.bind(this)
        this.disableFocus = this.disableFocus.bind(this)
        this.disableSelected = this.disableSelected.bind(this)
        this.disableAll = this.disableAll.bind(this)
        this.state = {
            hover: false,
            active: false,
            focus: false,
            selected: false,
        }
    }
    enableHover(){ this.setState({hover: true}) }
    disableHover(){ this.setState({hover: false}) }
    enableActive(){ this.setState({active: true}) }
    disableActive(){ this.setState({active: false}) }
    enableFocus(){ this.setState({focus: true}) }
    disableFocus(){ this.setState({focus: false}) }
    enableSelected(){ this.setState({selected: true}) }
    disableSelected(){ this.setState({selected: false}) }
    disableAll(){ this.setState({hover: false, active: false})}

    setStyle(style){
        if (this.state.hover && style.hover){
            style = {...style, ...style.hover}
        }
        if (this.state.active && style.active){
            style = {...style, ...style.active}
        }
        if (this.state.focus && style.focus){
            style = {...style, ...style.focus}
        }
        if (this.state.selected && style.selected){
            style = {...style, ...style.selected}
        }
        return style
    }

}

export default DynamicStyle
