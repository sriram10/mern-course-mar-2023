import React from "react"


/**
 * 
 * 
 */
const withAuthorization = (AnyComponent) => {
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

      return <h1>!Don't have access to view this content</h1>
    }
  }
}

export default withAuthorization;