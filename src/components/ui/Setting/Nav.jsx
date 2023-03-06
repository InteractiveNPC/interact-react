import setting_styles from "../../../styles/components/ui/setting.module.css";

const Nav = ({ selected, clickEvent }) => {
  return (
    <div className={setting_styles.nav}>
      <img
        onClick={clickEvent[0]}
        src={
          process.env.PUBLIC_URL +
          `/image/ui/setting/AudioButton_${
            selected === "audio" ? "o" : "x"
          }.png`
        }
      />
      <img
        onClick={clickEvent[1]}
        src={
          process.env.PUBLIC_URL +
          `/image/ui/setting/CreditButton_${
            selected === "credit" ? "o" : "x"
          }.png`
        }
      />
    </div>
  );
};

export default Nav;
