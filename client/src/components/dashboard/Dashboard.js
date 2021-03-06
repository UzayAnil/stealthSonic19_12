import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile,  } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
// import ModelType from  "../../components/modeltype/ModelType";
import ModelType from  "../../components/modeltype/ModelType";
import Review from  "../../components/customOrder/checkout/Review";



class Dashboard extends Component {
	// componentDidMount() {
	// 	this.props.getCurrentProfile();
	// }
	render() {
		const { user } = this.props.auth;
		// const { profile, loading } =this.props.profile;
		// const { login, loading } =this.props.login;

		// let dashboardContent;

		// if(login === null || loading){
		// 	dashboardContent = <Spinner/>

		// }else{
		// 	dashboardContent = <h1>Hello</h1>
		// }
		return (
			<div className="dashboard">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="col-md-12">
								<h1 className="display-4">Check your review Items ...</h1>
								{/* {dashboardContent} */}
							</div>
							<Review />
							<div className="col-md-12">
								{/* <ModelType /> */}
							</div>
						
						</div>
					</div>
				</div>
			</div>
		)
	}
}
Dashboard.propTypes = {
	auth: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	profile: state.profile,
	auth: state.auth
})
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);