import React from "react";
import { Link } from "react-router-dom";

function NewsCard() {
  return (
    <div>
      <div class="bg-gradient-to-bl from-blue-50 to-violet-50 flex items-center justify-center lg:h-screen">
        <div class="container mx-auto p-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            <div class="bg-white rounded-lg border p-4">
              <img
                src="https://placehold.co/300x200/d1d4ff/352cb5.png"
                alt="Placeholder Image"
                class="w-full h-48 rounded-md object-cover"
              />
              <div class="px-1 py-4">
                <div class="font-bold text-xl mb-2">Blog Title</div>
                <p class="text-gray-700 text-base">
                  This is a simple blog card example using Tailwind CSS. You can
                  replace this text with your own blog content.
                </p>
              </div>
              <div class="px-1 py-4">
                <Link to="#" class="text-blue-500 hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
