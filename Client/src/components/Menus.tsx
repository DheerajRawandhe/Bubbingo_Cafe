// import { MenuItem } from "@/types/restaurantType";
// import { Button } from "./ui/button";
// import { Card, CardContent, CardFooter } from "./ui/card";
// import { useCartStore } from "@/store/useCartStore";
// import { useNavigate } from "react-router-dom";

// const AvailableMenu = ({ menus }: { menus: MenuItem[] }) => {
//   const { addToCart } = useCartStore();
//   const navigate = useNavigate();
//   return (
//     <div className="md:p-4">
//       <h1 className="text-xl md:text-2xl font-extrabold mb-6">
//         Available Menus
//       </h1>
//       <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
//         {menus.map((menu: MenuItem) => (
//           <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
//             <img src={menu.image} alt="" className="w-full h-40 object-cover" />
//             <CardContent className="p-4">
//               <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
//                 {menu.name}
//               </h2>
//               <p className="text-sm text-gray-600 mt-2">{menu.description}</p>
//               <h3 className="text-lg font-semibold mt-4">
//                 Price: <span className="text-[#D19254]">₹{menu.price}</span>
//               </h3>
//             </CardContent>
//             <CardFooter className="p-4">
//               <Button
//                 onClick={() => {
//                   addToCart(menu);
//                   navigate("/cart");
//                 }}
//                 className="w-full bg-orange hover:bg-hoverOrange"
//               >
//                 Add to Cart
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AvailableMenu;



// ========================================================================================== //


// import { MenuItem } from "@/types/restaurantType";
// import { Button } from "./ui/button";
// import { Card, CardContent, CardFooter } from "./ui/card";
// import { useCartStore } from "@/store/useCartStore";
// import { useNavigate } from "react-router-dom";

// type MenusProps = {
//   menus?: MenuItem[]; // make it optional
// };

// const Menus = ({ menus = [] }: MenusProps) => {
//   const { addToCart } = useCartStore();
//   const navigate = useNavigate();

//   // If menus array is empty
//   if (!menus.length) {
//     return (
//       <div className="md:p-4 text-center">
//         <h1 className="text-xl md:text-2xl font-extrabold mb-4">
//           Available Menus
//         </h1>
//         <p className="text-gray-500">No menus available right now.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="md:p-4">
//       <h1 className="text-xl md:text-2xl font-extrabold mb-6">
//         Available Menus
//       </h1>
//       <div className="grid md:grid-cols-3 gap-6">
//         {menus.map((menu: MenuItem) => (
//           <Card
//             key={menu.id}
//             className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden"
//           >
//             <img
//               src={menu.image}
//               alt={menu.name}
//               className="w-full h-40 object-cover"
//             />
//             <CardContent className="p-4">
//               <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
//                 {menu.name}
//               </h2>
//               <p className="text-sm text-gray-600 mt-2">{menu.description}</p>
//               <h3 className="text-lg font-semibold mt-4">
//                 Price: <span className="text-[#D19254]">₹{menu.price}</span>
//               </h3>
//             </CardContent>
//             <CardFooter className="p-4">
//               <Button
//                 onClick={() => {
//                   addToCart(menu);
//                   navigate("/cart");
//                 }}
//                 className="w-full bg-orange hover:bg-hoverOrange"
//               >
//                 Add to Cart
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Menus;




/////////////////////////////////////////////////////////////////////////



import { useRestaurantStore } from "@/store/useRestaurantStore";
import AvailableMenu from "./AvailableMenu";
// import { Badge } from "./ui/badge";
// import { Timer } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantDetail = () => {
  const params = useParams();
  const { singleRestaurant, getSingleRestaurant } = useRestaurantStore();

  useEffect(() => {
    getSingleRestaurant(params.id!); 
    
  }, [params.id]);

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="w-full">
        {/* <div className="relative w-full h-32 md:h-64 lg:h-72">
          <img
            src={singleRestaurant?.imageUrl || "Loading..."}
            alt="res_image"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div> */}
        {/* <div className="flex flex-col md:flex-row justify-between">
          <div className="my-5">
            <h1 className="font-medium text-xl">{singleRestaurant?.restaurantName || "Loading..."}</h1>
            <div className="flex gap-2 my-2">
              {singleRestaurant?.cuisines.map((cuisine: string, idx: number) => (
                <Badge key={idx}>{cuisine}</Badge>
              ))}
            </div>
            <div className="flex md:flex-row flex-col gap-2 my-5">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5" />
                <h1 className="flex items-center gap-2 font-medium">
                  Delivery Time: <span className="text-[#D19254]">{singleRestaurant?.deliveryTime || "NA"} mins</span>
                </h1>
              </div>
            </div>
          </div>
        </div> */}


        
       {singleRestaurant?.menus && <AvailableMenu menus = {singleRestaurant?.menus!}/>} 
      </div>
    </div>
  );
};

export default RestaurantDetail;
