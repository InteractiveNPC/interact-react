import { divToImg } from "../../services/propsFormat";
import index_styles from "../../styles/components/ui/index.module.css";

const Nav = ({ clickEvent }) => {
  return (
    <div className={index_styles.nav}>
      <div onClick={clickEvent[0]} {...divToImg("/image/ui/Note.png")} />
      <div onClick={clickEvent[1]} {...divToImg("/image/ui/Home.png")} />
      <div onClick={clickEvent[2]} {...divToImg("/image/ui/Setting.png")} />
    </div>
  );
};

export default Nav;
