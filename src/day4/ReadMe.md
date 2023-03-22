# Life Cycle

1. Mounting
2. UnMounting
3. Updations - props / states

## Mounting - Class
1. constructor
2. static getDerivedStateFromProps(newProps, currentStateObj)
3. render()
4. componentDidMount(props, state)

## Updations - Class
1. static getDerivedStateFromProps(newProps, currentStateObj) => returns state values
2. shouldComponentUpdate() => returns boolean and false will stop render
3. render() => mounts the elements to the DOM (if changed)
4. getSnapshotBeforeUpdate(props, state) => returns a computed value that is passed down to DidUpdate
4. componentDidUpdate(props, state, snapshot) => this gets triggered on every render after mounting

## Unmounting - Class
1. componentWillUnmount - Just before removing the elements from DOM


![Life Cycle of a Component](https://i.imgur.com/PVPr1dK.jpg)