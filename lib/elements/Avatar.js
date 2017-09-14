import React from 'react'

class Avatar extends React.Component {
    render(){
        const { image, name, icon, ...other } = this.props
        return(
            <img style={styles.avatar} src={image} alt={name} />
        )
    }
}

const styles = {
    avatar: {
        height: "50px",
        width: "50px",
    	borderRadius: "30px",
    }
}

export default Avatar
