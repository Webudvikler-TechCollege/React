/**
 * Udskriver sidetitel, descriptiob og 
 * h1 og h2 overskrifter på sider
 * @param {*} props 
 * @returns 
 */
const ContentWrapper = (props) => {
  // Sætter page title
  document.title = props.title

  // Sætter page description hvis der en
  if (props.description) {
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", props.description)
  }

  return (
    <>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
      <div>{props.children}</div>
    </>
  )
}

export { ContentWrapper }
