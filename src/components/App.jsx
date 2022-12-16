import logo from "../images/svg/logo.svg"
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#FF4656'
      }}
    >
      AGENTS
      <img src={require("images/png/akali.png")} alt="" srcset="" width={30} height={30} />
      <img src={require("images/png/Art.png")} alt="" srcset="" width={200} height={500} />
       <img src={logo} alt="" srcset="" width={30} height={50} />
    </div>
  );
};
