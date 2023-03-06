import setting_styles from "../../../styles/components/ui/setting.module.css";

const Nav = ({ selected, clickEvent }) => {
  return (
    <div className={setting_styles.nav}>
      <img
        onClick={clickEvent[0]}
        src={
          process.env.PUBLIC_URL +
          `/image/ui/setting/audioNav_${
            selected === "audio" ? "sel" : "nonsel"
          }.png`
        }
      />
      <img
        onClick={clickEvent[1]}
        src={
          process.env.PUBLIC_URL +
          `/image/ui/setting/creditNav_${
            selected === "credit" ? "sel" : "nonsel"
          }.png`
        }
      />
    </div>
  );
};

export default Nav;
