import MyFooter from "../components/Footer/MyFooter";

export default function FooterPage() {
  return (
    <div className="footer">
      <h2 style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}></h2>
      <MyFooter author="TranDuyMinhKha" email="khabt2005@gmail.com" linkGithub="https://github.com/Kha-Noob/FER202.git" />
    </div>
  );
}
