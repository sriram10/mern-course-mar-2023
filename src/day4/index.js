import React from 'react';
import Card from '../components/Card';
// import App from '../day3';

class Day4App extends React.Component {
  // default constructor
  constructor(props) {
    super(props);
    console.log('Day4App constructor');
    // initialize things
    this.state = {
      title: 'Title of the App',
      list: [
        { title: 'One', desc: 'This is the first item' },
        { title: 'Two', desc: 'This is the second item' },
        { title: 'Three', desc: 'This is the third item' },
      ],
    }
  }

  // this will get triggered before render method
  // on mounting process & whenever the props are changed
  // static getDerivedStateFromProps(props, state) {
  //   // console.log(props, state)
  //   console.log('getDerivedStateFromProps')
  //   return {
  //     subtitle: 'Some sub heading',
  //     list: [
  //       ...state.list,
  //       { title: 'Four', desc: 'This is the Four item' },
  //     ],
  //   }
  // }

  // any side effect like API call or animations or event listeners
  // will get triggered after render method only once at mounting
  componentDidMount() {
    console.log('componentDidMount')
    // this.setState({
    //   title: 'New Title from Mount'
    // })
  }

  // triggered only on component updations
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate', nextState)
  //   if (nextProps.count % 2 === 0)
  //     return true;

  //   return false;
  //   // compare nextState vs this.state
  //   // compare nextprops vs this.props
  //   // return false
  // }

  onRemove(index) {
    this.setState((state) => {
      return {
        list: state.list.filter((item, i) => {
          return index !== i
        })
      }
    })
  }

  // triggers after every render cycle on updations
  // won't get triggered on mounting
  componentDidUpdate(prevProps, prevState, fromSnapshot) {
    console.log('componentDidUpdate', fromSnapshot)
    // if (this.state.title === '') {
      // this.setState({
      //   title: 'New Title from Update'
      // })
    // }
  }

  // triggers after every render cycle on updations
  // won't get triggered on mounting
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')
    return 123;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    alert('componentWillUnmount')
  }

  render() {
    const { list, title } = this.state;
    console.log('render day4app')

    return (
      <>
        <h1>{title}</h1>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
        {
          list.map((item, index) => {
            return (
              <Card
                key={item.title+index}
                title={item.title}
                desc={item.desc}
                onRemove={() => this.onRemove(index)}
                />
            )
          })
        }

        </div>
      </>
    );
  }
}

export default Day4App;