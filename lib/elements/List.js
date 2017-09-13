import React from 'react'

export class List extends React.Component {
    render() {
        return(
        <ul style={styles.list}>
            {this.props.children}
        </ul>
        )
    }
}

export class ListItem extends React.Component {
    render() {
        return (
            <li style={styles.listItem}>{this.props.children}</li>
            )
    }
}

const styles = {
    list: {
        listStyleType: "none",
        width: "500px",
    },
    listItem: {
        padding: "10px",
        overflow: "auto",
    }
}
