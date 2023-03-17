
const Footer = (props) => {
  return (
    <footer>
      <h2>Total Items: {props.count}</h2>
    </footer>
  )
}

Footer.defaultProps = {
  count: 0
}

export default Footer;