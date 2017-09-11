import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
import { push } from 'react-router-redux'
import  store  from 'redux/store'

//Material-UI


class ReduxLink extends React.Component {
    render(){

        var to = this.props.to
        if (this.props.campaignLink){
            to = "/campaign/" + this.props.campaign.slug + "/" + to
        }

        return(
        <a style={styles.link} onClick={ () => store.dispatch(push(to)) }>{this.props.children}</a>
        )
    }
}

const styles = {
    link: {
      cursor: "pointer",
    },
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxLink);
