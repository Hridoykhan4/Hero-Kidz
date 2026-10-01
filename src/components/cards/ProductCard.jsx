import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import CartButton from "../buttons/CartButton";


const ProductCard = ({ product }) => {
    const { _id, title, image, price, ratings = 0, reviews = 0, sold = 0 } = product || {};

    return (
        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden flex flex-col justify-between h-full">
            {/* 2. Image Container: Fixed Aspect Ratio & Flex Centering */}
            <figure className="relative w-full h-52 p-4 bg-gray-50 flex items-center justify-center overflow-hidden">
                <Image
                    src={image}
                    alt={title || "Product image"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    /* 3. Object-contain ensures the FULL image fits inside without cropping */
                    className="object-contain p-2 hover:scale-105 transition-transform duration-300"
                    priority={false}
                />
            </figure>

            {/* Card Details */}
            <div className="card-body p-4 flex flex-col justify-between grow">
                <div>
                    <h2 className="card-title text-base font-semibold line-clamp-2 min-h-[3rem]" title={title}>
                        {title}
                    </h2>

                    {/* Rating Section */}
                    <div className="flex items-center space-x-2 mt-2">
                        <div className="flex text-yellow-400" aria-label={`Rating: ${ratings} out of 5`}>
                            {Array.from({ length: 5 }, (_, i) => (
                                <FaStar
                                    key={i}
                                    className={i < Math.round(ratings) ? "opacity-100" : "opacity-30 text-gray-300"}
                                />
                            ))}
                        </div>
                        <span className="text-xs text-gray-500 font-medium">({reviews} reviews)</span>
                    </div>
                </div>

                {/* Pricing & Call to Action */}
                <div className="mt-4 pt-2 border-t border-gray-100">
                    <div className="flex justify-between items-center mb-3">
                        <span className="font-bold text-xl text-primary">৳{price?.toLocaleString()}</span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{sold} sold</span>
                    </div>

                    <CartButton product={{ ...product, _id: _id.toString() }}></CartButton>


                    <Link
                        href={`/products/${_id}`}
                        className="btn mt-3 btn-primary btn-outline btn-sm w-full font-medium"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;