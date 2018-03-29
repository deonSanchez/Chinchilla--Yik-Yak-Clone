import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/data';

function mapStateToProps(state) {
    return {
        data: state.data,
        token: state.auth.token,
        loaded: state.data.loaded,
        isFetching: state.data.isFetching,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export class Home extends React.Component {
    componentDidMount() {
        this.fetchData();
    }


    fetchData() {
        this.props.fetchPostData();
    }

    render() {
        return (
            <div>
                {!this.props.loaded
                    ? <h1>Loading data...</h1>
                    :
                    <div>
                        <h1>Welcome back,&nbsp;
                            {this.props.userName}!</h1>
                        <h1>{this.props.data.data.email}</h1>
                        <h1>{this.props.data.data.title}</h1>
                    </div>
                }
            </div>
        );
    }
}

Home.propTypes = {
    fetchPostData: React.PropTypes.func,
    loaded: React.PropTypes.bool,
    userName: React.PropTypes.string,
    data: React.PropTypes.any,
    token: React.PropTypes.string,
};
