export const FoodDetailSkeleton = () => {
    return (
      <div className="container-custom mt-16 p-6 rounded-2xl border-2 w-full max-w-4xl transition-all duration-300">
        {/* Desktop Layout: Two-column design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Image Skeleton */}
          <div className="w-full h-64 md:h-80 bg-gray-200 animate-pulse rounded-xl shadow-md"></div>
  
          {/* Right: Food Details Skeleton */}
          <div>
            <div className="w-48 h-8 bg-gray-200 animate-pulse rounded"></div>
  
            <div className="flex items-center mt-2">
              <div className="w-32 h-4 bg-gray-200 animate-pulse rounded"></div>
            </div>
  
            <div className="flex items-center justify-between mt-5">
              <div className="w-20 h-4 bg-gray-200 animate-pulse rounded"></div>
              <div className="w-16 h-4 bg-gray-200 animate-pulse rounded"></div>
            </div>
  
            <div className="w-full h-16 bg-gray-200 animate-pulse rounded mt-3"></div>
  
            {/* Variation Skeleton */}
            <div className="bg-gray-100 p-5 rounded-lg mt-6">
              <div className="flex items-center justify-between mb-3">
                <div className="w-32 h-5 bg-gray-200 animate-pulse rounded"></div>
                <div className="w-16 h-5 bg-gray-200 animate-pulse rounded"></div>
              </div>
  
              <div className="space-y-3 mt-3">
                {[1, 2, 3].map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-slate-200 p-3 rounded-lg animate-pulse"
                  >
                    <div className="w-24 h-4 bg-gray-300 rounded"></div>
                    <div className="w-16 h-4 bg-gray-300 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        {/* Frequently Bought Together Skeleton */}
        <div className="mt-8">
          <div className="w-40 h-6 bg-gray-200 animate-pulse rounded"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center bg-gray-200 p-3 rounded-lg animate-pulse">
                <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                <div className="w-24 h-4 bg-gray-300 rounded ml-3"></div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Add to Cart Skeleton */}
        <div className="flex items-center gap-3 mt-6">
          {/* Quantity Selector Skeleton */}
          <div className="w-32 h-12 bg-gray-200 animate-pulse rounded-lg"></div>
  
          {/* Buttons */}
          <div className="w-full h-12 bg-gray-200 animate-pulse rounded-lg"></div>
          <div className="w-full h-12 bg-gray-200 animate-pulse rounded-lg"></div>
        </div>
      </div>
    );
  };
  
 export const MenuSkeleton = () => {
    return (
      <main className="bg-gray-900 ">
        <div className="text-white container-custom py-10">
     
          <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2 gap-8">
            {[1, 2, 3, 4, ].map((_, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full bg-gray-700 animate-pulse"></div>
                <div className="flex-1">
                  <div className="w-full h-6 bg-gray-600 animate-pulse rounded"></div>
                  <div className="w-40 h-4 bg-gray-500 animate-pulse rounded mt-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  };
  
  export const CategorySlekeloton=()=>{
return (
     
     <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-lg mb-6">
     {[1, 2, 3, 4, 5].map((_, index) => (
       <div key={index} className="w-20 h-10 bg-gray-700 animate-pulse rounded-lg"></div>
     ))}
   </div>
)
  }
 
  