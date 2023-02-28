import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import History from "./pages/History";
import Companies from "./pages/Companies";
import Explore from "./pages/Explore";
import Kyoto from "./pages/Kyoto";
import Toei from "./pages/Toei";
import Wit from "./pages/Wit";
import Mappa from "./pages/Mappa";
import Aot from "./pages/Aot";
import Clannad from "./pages/Clannad";
import Dbz from "./pages/Dbz";
import Dororo from "./pages/Dororo";
import Ghs from "./pages/Ghs";
import Jk from "./pages/Jk";
import Kif from "./pages/Kif";
import Lcd from "./pages/Lcd";
import Mhs from "./pages/Mhs";
import Op from "./pages/Op";
import Se from "./pages/Se";
import Sm from "./pages/Sm";
import Violet from "./pages/Violet";
import Vs from "./pages/Vs";
import Yugioh from "./pages/Yugioh";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/kyoto" element={<Kyoto />} />
        <Route path="/toei" element={<Toei />} />
        <Route path="/wit" element={<Wit />} />
        <Route path="/mappa" element={<Mappa />} />
        <Route path="/aot" element={<Aot />} />
        <Route path="/clannad" element={<Clannad />} />
        <Route path="/dbz" element={<Dbz />} />
        <Route path="/dororo" element={<Dororo />} />
        <Route path="/ghs" element={<Ghs />} />
        <Route path="/jk" element={<Jk />} />
        <Route path="/kif" element={<Kif />} />
        <Route path="/lcd" element={<Lcd />} />
        <Route path="/mhs" element={<Mhs />} />
        <Route path="/se" element={<Se />} />
        <Route path="/sm" element={<Sm />} />
        <Route path="/violet" element={<Violet />} />
        <Route path="/vs" element={<Vs />} />
        <Route path="/op" element={<Op />} />
        <Route path="/yugioh" element={<Yugioh />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
