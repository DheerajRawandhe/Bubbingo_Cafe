// import { useState } from "react";
// import { Input } from "./ui/input";
// import { Search } from "lucide-react";
// import { Button } from "./ui/button";
// // import HeroImage from "@/assets/hero_pizza.png";
// import Video from ".././assets/Bubbingo_cafe_video.mp4";
// import { useNavigate } from "react-router-dom";

// const HereSection = () => {
//   const [searchText, setSearchText] = useState<string>("");
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-center m-4 gap-20">
//       <div className="flex flex-col gap-10 md:w-[40%]">
//         <div className="flex flex-col gap-5">
//           <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl">
//             Order Food anytime & anywhere
//           </h1>
//           <p className="text-gray-500">
//             Hey! Our Delicios food is waiting for you, we are always near to
//             you.
//           </p>
//         </div>
//         <div className="relative flex items-center gap-2">
//           <Input
//             type="text"
//             value={searchText}
//             placeholder="Search restaurant by name, city & country"
//             onChange={(e) => setSearchText(e.target.value)}
//             className="pl-10 shadow-lg"
//           />
//           <Search className="text-gray-500 absolute inset-y-2 left-2" />
//           <Button onClick={() => navigate(`/search/${searchText}`)} className="bg-orange hover:bg-hoverOrange">Search</Button>
//         </div>
//       </div>

//       {/* // Image */}
//       {/* <div>
//         <img 
//         src={HeroImage} 
//         alt="img" 
//         className="object-cover w-full max-h-[500px]"
//         />
//       </div> */}

//       {/*=============== Bubbingo-Video ==============*/}
//       {/* <div>
//     <video 
//     src={Video} 
//     autoPlay 
//     loop 
//     muted 
//     className="object-cover w-full max-h-[500px]"
//   />
// </div> */}



// {/* ============================================= */}

// <div className="relative w-full h-[500px] overflow-hidden">
//   <video 
//     src={Video} 
//     autoPlay 
//     loop 
//     muted 
//     playsInline
//     className="absolute top-0 left-0  w-full h-full object-cover rounded-t-2xl rounded-b-2xl"
//   />
//   <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-t-2xl rounded-b-2xl">
//     <h1 className="text-white text-4xl font-bold">Welcome to Bubbingo_Cafe</h1>
//   </div>
// </div>




//     </div>
//   );
// };

// export default HereSection;



// =========================================================================================== //


import { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import Video from ".././assets/Bubbingo_cafe_video.mp4";
import { useNavigate } from "react-router-dom";

const HereSection = () => {
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-between m-4 gap-10">
      
      {/* ==== Left side: Text Section ==== */}
      <div className="flex flex-col gap-10 md:w-1/2">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl">
            Order Food anytime & anywhere
          </h1>
          <p className="text-gray-500">
            Hey! Our Delicious food is waiting for you, we are always near to you.
          </p>
        </div>

        <div className="relative flex items-center gap-2">
          <Input
            type="text"
            value={searchText}
            placeholder="Search restaurant by name, city & country"
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 shadow-lg"
          />
          <Search className="text-gray-500 absolute inset-y-2 left-2" />
          <Button 
            onClick={() => navigate(`/search/${searchText}`)} 
            className="bg-orange hover:bg-hoverOrange"
          >
            Search
          </Button>
        </div>
      </div>

      {/* ======================= Right side: Video Section ===================== */}
      
      {/* <div className="relative md:w-1/2 h-[400px] overflow-hidden rounded-2xl">
        <video 
          src={Video} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-2xl">
          <h1 className="text-white text-3xl font-bold text-center">
            Welcome to Bubbingo_Cafe
          </h1>
        </div>
      </div> */}



        {/* ======================================= */}

<div className="relative w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-lg">
  <video
    src={Video}
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover rounded-2xl"
  />
  <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-2xl px-3">
    <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-snug drop-shadow-md">
      Welcome to Bubbingo_Cafe
    </h1>
  </div>
</div>

    </div>
  );
};

export default HereSection;
