import React from "react"
import { Navigate } from "react-router-dom";


/**
 * 
 * 
 */
const PrivateRoute = ({ children: AnyComponent}) => {
  return class extends React.Component {
    state = {}

    componentDidMount() {
      const user = localStorage.getItem("user");
      const status = localStorage.getItem("loggedIn");
      if (user?.length > 1 && status?.length === 1) {
        this.setState({
          authorized: Boolean(Number(status)),
          user: JSON.parse(user),
        })
      }
    }

    render() {

      if (this.state.authorized) {
        return (
          <AnyComponent
            {...this.props}
            {...this.state}
          />
        )
      }

      return <Navigate to="/401" replace={true} />
    }
  }
}

export default PrivateRoute;