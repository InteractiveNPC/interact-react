import { divToImg } from "../../../services/propsFormat";
import setting_styles from "../../../styles/components/ui/setting.module.css";

const Nav = ({ selected, clickEvent }) => {
  return (
    <div className={setting_styles.nav}>
      <div
        onClick={clickEvent[0]}
        {...divToImg(
          `/image/ui/setting/AudioButton_${
            selected === "audio" ? "o" : "x"
          }.png`
        )}
      />
      <div
        onClick={clickEvent[1]}
        {...divToImg(
          `/image/ui/setting/CreditButton_${
            selected === "credit" ? "o" : "x"
          }.png`
        )}
      />
    </div>
  );
};

export default Nav;
