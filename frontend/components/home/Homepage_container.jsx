import { connect } from 'react-redux';
import { fetchPsalm, fetchIsaiah, fetchProverbs } from "../../actions/home_actions";
import Homepage from "./Homepage";

const mapStateToProps = (state) => {
    return({
        home: state.ui.loading.home,
        splash: state.ui.loading.splash,
    });
};

const mapDispatchToProps = (dispatch) => {
    return({
        fetchPsalm: () => dispatch(fetchPsalm()),
        fetchIsaiah: () => dispatch(fetchIsaiah()),
        fetchProverbs: () => dispatch(fetchProverbs()),

    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);