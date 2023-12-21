import headerStyles from "./header.module.scss"

const Header = ({ categories, text }) => {
  // console.log(text);
  return (
    <div className={headerStyles.header}>
      <h1>{text}</h1>
      <div className={headerStyles.btns}>
        {categories.map((item) => (
          <button key={item}>{item}</button>
        ))}
      </div>
    </div>
  );
};

export default Header;
