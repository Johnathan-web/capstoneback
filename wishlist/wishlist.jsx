import React from "react";
import { useWishlist } from "../context/WishlistContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="absolute top-16 right-4 bg-white shadow-lg rounded-md p-4 w-64">
      <h2 className="font-bold text-lg">Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-black-500">Your wishlist is empty!</p>
      ) : (
        <ul>
          {wishlist.map((item) => (
            <li key={item.id} className="flex justify-between items-center py-2">
              <span>{item.title}</span>
              <button className="text-red-500 hover:text-red-700" onClick={() => removeFromWishlist(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Wishlist;