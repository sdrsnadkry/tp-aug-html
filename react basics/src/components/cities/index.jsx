import { useState } from "react";

export default function Cities() {

  const [image, setImage] = useState("https://thealtruistictraveller.com/wp-content/uploads/2023/05/raimond-klavins-n0RIwkDfJ1g-unsplash-1.jpg")

  

  function setKtm(){
    setImage("https://thealtruistictraveller.com/wp-content/uploads/2023/05/raimond-klavins-n0RIwkDfJ1g-unsplash-1.jpg")
  }

  function setBkt(){
    setImage("https://upload.wikimedia.org/wikipedia/commons/d/d9/Nyatpola_%26_Bhairav_Temple.jpg")
  }

  return (
    <div>
      <img
        src={image}
        height={200}
        width={400}
        alt=""
      />

      <div>


      <button onClick={setKtm}>Ktm</button>
      <button onClick={setBkt}>Bkt</button>
      <button>ltr</button>
      </div>
    </div>
  );
}
