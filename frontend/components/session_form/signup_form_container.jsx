import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, removeSessionErrors } from '../../actions/session_actions';
import { createCollection } from "../../actions/collection_actions";

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'SIGN UP'
})

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors()),
    createCollection: (collection) => dispatch(createCollection(collection))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);