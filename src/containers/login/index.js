import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Register from '../register'
import Body from '../body'

const Login = props => (
    <div>
        <div class="forms">
            <div>
                <p>Welcome to the</p>
                <p>CHATTERBOX</p>
            </div>
            <button class="btn" onClick={() => props.changePage()}>LOGIN</button>
        </div>
    </div>
)

const mapStateToProps = state => {
    
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/body')

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
