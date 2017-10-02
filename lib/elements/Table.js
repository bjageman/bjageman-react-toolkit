import React from 'react'

export class Table extends React.Component {
    render(){
        const headers = this.props.headers
        return(
        <div style={styles.container}>
            <table style={styles.table}>
                <thead>
                    <tr>
                        { headers.map((header, i) =>
                            <th>{header}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
        </div>
        )
    }
}

export class TableRow extends React.Component {
    render() {
        const rows = this.props.rows
        return(
            <tr>
                { rows.map((row, i) =>
                    <td style={styles.cell}>{row}</td>
                )}
            </tr>
        )
    }
}

const styles = {
    container: {
        marginTop: "5px",
        overflowX:"auto",
    },
    table: {
        borderCollapse: "collapse",
        borderSpacing: 0,
        width: "100%",
        border: "1px solid #ddd",
    },
    cell: {
        border: "none",
        textAlign: "left",
        padding: "8px",
    },
}
