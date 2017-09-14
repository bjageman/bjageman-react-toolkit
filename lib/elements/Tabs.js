import React from 'react'

import DynamicStyle from './utils/DynamicStyle'

export class Tabs extends React.Component {
    constructor(props){
        super(props)
        this.setSelected = this.setSelected.bind(this)
        this.state = {
            selectedIndex: this.props.value
        }
    }
    setSelected(index){
        this.setState({selectedIndex: index})
        this.props.getIndex(index)
    }

    render(){
        let tabs = React.Children.toArray(this.props.children);
        let tabList = []
        tabs.map((tab, i) => {
            let selected = (this.state.selectedIndex == i) ? true : false
            tab = React.cloneElement(tab, {
                index: i,
                selected: selected,
                setSelected: this.setSelected,
            })
            tabList.push(tab)
        }
        )
        return(<div style={styles.container}>{tabList}</div>)
    }
}

export class Tab extends DynamicStyle {

    handleClick(index){
        this.props.setSelected(index)
    }

    render(){
        var style = this.setStyle(styles.tab)
        style = this.props.selected ? {...style, ...style.selected} : style
        const index = this.props.index
        return(
            <button
                onClick = {() => this.handleClick(index)}
                onMouseEnter = {this.enableHover}
                onMouseLeave = {this.disableHover}
                style={style}>{this.props.children}</button>
        )
    }
}

const styles = {
    container: {
        overflow: "hidden",
        border: "none",
        color: "#fff",
        backgroundColor: "#000",
        fontFamily: "Verdana,sans-serif",
        fontSize: "15px",
    },
    tab: {
        backgroundColor: "inherit",
        color: "inherit",
        font: "inherit",
        float: "left",
        border: "none",
        outline: "none",
        cursor: "pointer",
        padding: "14px 16px",
        transition: "0.3s",
        hover: {
            backgroundColor:"gray",
        },
        selected: {
            backgroundColor: "green",
        }
    }
}
