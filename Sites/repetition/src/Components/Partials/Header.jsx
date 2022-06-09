export const Header = (props) => {
  return (
    <header className="w-full p-8 bg-indigo-700 text-white">
      <h1 className="text-xl text-white">
        {props.pagetitle ? props.pagetitle : "React Repetition med TailwindCSS"}
      </h1>
    </header>
  );
};
