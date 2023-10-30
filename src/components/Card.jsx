const Card = ({title,description,price,discountPercentage,thumbnail}) => {

  return (
    <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img
        className="h-48 w-full object-cover object-center"
        src={thumbnail}
        alt="Product Image"
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
          {title}
        </h2>
        <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
          {description}
        </p>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
            ${price - (price * discountPercentage / 100)}
          </p>
          <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
            ${price}
          </p>
          <p className="ml-auto text-base font-medium text-green-500">
            {discountPercentage}% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
