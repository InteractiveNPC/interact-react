import index_styles from "../../styles/components/ui/index.module.css";

const Nav = ({ clickEvent }) => {
  return (
    <div className={index_styles.nav}>
      <img
        onClick={clickEvent[0]}
        src={process.env.PUBLIC_URL + "/image/ui/Note.png"}
      />
      <img
        onClick={clickEvent[1]}
        src={process.env.PUBLIC_URL + "/image/ui/Home.png"}
      />
      <img
        onClick={clickEvent[2]}
        src={process.env.PUBLIC_URL + "/image/ui/Setting.png"}
      />
    </div>
  );
};

export default Nav;
