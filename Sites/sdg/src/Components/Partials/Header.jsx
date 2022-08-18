export const Header = (props) => {
  return (
    <header>
      <h1>
        {props.pagetitle ? props.pagetitle : "React Repetition med verdensmål"}
      </h1>
      <hr />
    </header>
  );
};
