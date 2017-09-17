import React from 'react'
import MdDelete from 'react-icons/lib/md/delete'
import MdCreate from 'react-icons/lib/md/create'
import MdShare from 'react-icons/lib/md/share'
import MdFavorite from 'react-icons/lib/md/favorite'
import MdPerson from 'react-icons/lib/md/person'
import MdMenu from 'react-icons/lib/md/menu'
import MdClose from 'react-icons/lib/md/close'
import MdCheck from 'react-icons/lib/md/check'

class Icon extends React.Component {
    render(){
        const name = this.props.name
        var style = styles.icon
        style = this.props.button ? {...style, ...styles.button}: style
        style = this.props.avatar ? {...style, ...styles.avatar}: style
        return(
            <div style={style} >
                {name === "add" ? "+" : null}
                {name === "delete" ? <MdDelete /> : null}
                {name === "create" ? <MdCreate /> : null}
                {name === "share" ? <MdShare /> : null}
                {name === "favorite" ? <MdFavorite /> : null}
                {name === "person" ? <MdPerson /> : null}
                {name === "menu" ? <MdMenu /> : null}
                {name === "close" ? <MdClose /> : null}
                {name === "check" ? <MdCheck />: null}
            </div>
        )
    }
}


const styles = {
    icon: {
        display: "inline",
        fontSize: "24px",
        fontFamily: 'sans-serif',
        fontWeight: 300,
    },
    avatar: {
        height: "50px",
        width: "50px",
        fontSize: "42px",
    	borderRadius: "30px",
        color: "white",
        backgroundColor: "green",
        textAlign: "center",
    },
    button: {
        display: "block",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "20px",
        height: "20px",
        background: "red",
    }
}

export default Icon
