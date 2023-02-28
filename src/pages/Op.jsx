import React from "react";
import Footer from "../components/Footer";
import LastStep from "../components/LastStep";
import Navbar from "../components/Navbar";

function op() {
  return (
    <div>
      <Navbar />
      <LastStep
        id="1"
        show="0"
        txt="One Piece (stylized as ONE PIECE) is a Japanese anime television series produced by Toei Animation that premiered on Fuji TV in October 1999. It is based on Eiichiro Oda's manga series of the same name. The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit. With his crew of pirates, named the Straw Hat Pirates, Luffy explores the Grand Line in search of the world's ultimate treasure known as One Piece in order to become the next Pirate King."
        txt2="The series focuses on Monkey D. Luffy, a young man made of rubber, who, inspired by his childhood idol, the powerful pirate Red-Haired Shanks, sets off on a journey from the East Blue Sea to find the mythical treasure, the One Piece, and proclaim himself the King of the Pirates. In an effort to organize his own crew, the Straw Hat Pirates,[Jp 1] Luffy rescues and befriends a pirate hunter and swordsman named Roronoa Zoro, and they head off in search of the titular treasure. Afterwards, they met Nami, Usopp, Sanji, Chopper, Robin, Fanky, Brook, and Jimbei. Together, they encounter other pirates, bounty hunters, criminal organizations, revolutionaries, secret agents, and soldiers of the corrupt World Government, and various other friends and foes, as they sail the seas in pursuit of their dreams."
      />
      <Footer />
    </div>
  );
}

export default op;
