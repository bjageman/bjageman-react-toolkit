import React from 'react'
import DynamicStyle from './utils/DynamicStyle'

export class List extends React.Component {
    render() {
        return(
        <ul style={styles.list}>
            {this.props.children}
        </ul>
        )
    }
}

export class ListSelect extends React.Component {
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
        let listItems = React.Children.toArray(this.props.children);
        let list = []
        listItems.map((listItem, i) => {
            let selected = (this.state.selectedIndex == i) ? true : false
            listItem = React.cloneElement(listItem, {
                index: i,
                selected: selected,
                setSelected: this.setSelected,
            })
            list.push(listItem)
        }
        )
        return(<ul style={styles.list}>{list}</ul>)
    }
}

export class ListItem extends React.Component {
    render() {
        return (
            <li style={styles.listItem}>{this.props.children}</li>
            )
    }
}

export class ListSelectItem extends DynamicStyle {
    handleClick(index){
        this.props.setSelected(index)
    }

    render() {
        var style = this.setStyle(styles.listItem)
        const index = this.props.index
        return (
            <li
                onClick = {() => this.handleClick(index)}
                onMouseEnter = {this.enableHover}
                onMouseLeave = {this.disableAll}
                selected = {this.props.selected}
                style={style}>{this.props.children}</li>
            )
    }
}

const styles = {
    list: {
        paddingLeft: "0px",
        listStyleType: "none",
        width: "100%",
    },
    listItem: {
        paddingLeft: "20px",
        hover: {
            backgroundColor: "white",
            cursor: "pointer"
        },
        selected: {
            backgroundColor: "green",
        }
    }
}
