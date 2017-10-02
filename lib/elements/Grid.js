import React from 'react'

class Grid extends React.Component {
  render() {
    return (
        <ul style={styles.grid}>
            {this.props.children}
        </ul>
    )
  }
}

export class GridItem extends React.Component {
  render() {
    return (
        <li style={styles.item}>
            {this.props.children}
        </li>
    )
  }
}

const styles = {
    grid: {
        padding: 0,
        margin: 0,
        listStyle: "none",
        display: "flex",
        flexDirection: "row",
	    flexWrap: "wrap",
        flexFlow: "row wrap",
        width:"100%",
    },
    item: {
        marginTop:"5px",
        padding: "1%",
    },
    content: {
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        padding: "1em",
        flex:3,
    }
}

export default Grid
