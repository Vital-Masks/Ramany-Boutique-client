import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ImageCarousel from "../../components/Ui/ImageCarousel";
import CardSection from "../../components/Views/CardSection";
import { CartContext } from "../../context/cartContext";
import { getProduct } from "../../services/products";

const Product = () => {
	const [qty, setQty] = useState(1);
	const [selectedSize, setSelectedSize] = useState(null);
	const [product, setProduct] = useState();

	const { addToCart: add } = useContext(CartContext);

	const router = useRouter();
	const { productId } = router.query;

	const addToCart = () => {
		if (!selectedSize) toast.error("Please select a size!");
		if (!productId) toast.error("Something went wrong!");
		if (!qty) toast.error("Quantity must be > 0!");

		if (selectedSize && productId) {
			const product = {
				productId: productId,
				quantity: qty,
				size: selectedSize,
			};
			add(product);
		}
	};

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				let data = await getProduct(productId);
				console.log(data);
				setProduct(data);
			} catch (err) {
				console.log("😟 error at [productId].js line:43");
			}
		};

		if (productId) fetchProduct();
	}, [productId]);

	return (
		<div>
			<Toaster />
			<div className="grid w-full max-w-screen-xl grid-cols-1 gap-10 px-5 py-3 mx-auto mt-20 md:py-5 md:px-20 xl:px-0 lg:mt-28 xl:mt-12 lg:grid-cols-3">
				<div className="lg:col-span-2">
					<ImageCarousel />
				</div>
				<div className="flex flex-col justify-between p-2">
					<div>
						<h2 className="text-2xl font-semibold">{product?.clothName}</h2>
						<p className="mt-1 font-bold text-red-500 text-md"> {product?.clothCode}</p>
						{product?.occasionTypeId.map(({ categoryName }) => (
							<p className="my-2 text-sm font-semibold text-gray-400">
								{categoryName}
							</p>
						))}

						<p className="my-2 text-sm font-semibold text-gray-400">
							{product?.clothingCategoryId?.categoryName}
						</p>

						<div className="my-8">
							<p className="font-bold uppercase">Description</p>
							<p className="mt-2 text-sm text-gray-500">
								{product?.description || ""}
							</p>
						</div>
					</div>

					<div>
						<div className="my-8">
							<p className="font-bold uppercase">Size:</p>
							<div className="flex items-center gap-2 mt-2">
								{product?.sizeAndCount?.map(
									(size, index) =>
										size.count > 0 && (
											<button
												key={index}
												onClick={() => setSelectedSize(size.size)}
												className={`w-10 h-10 border-2 flex items-center justify-center uppercase cursor-pointer hover:bg-black hover:text-white transition-colors ${
													selectedSize === size.size &&
													"bg-black  text-white"
												}`}
											>
												{size.size}
											</button>
										),
								)}
							</div>
						</div>

						<div className="my-4 ">
							<p className="font-bold uppercase">QTY:</p>
							<div className="mt-2">
								<button
									className="px-2 py-1 text-center border border-r-0 border-gray-300"
									onClick={() => setQty(--qty)}
								>
									-
								</button>
								<input
									type="text"
									onChange={(e) => setQty(e.target.value)}
									value={qty}
									className="w-10 py-1 text-center border-t border-b border-gray-300 focus:outline-none"
								/>
								<button
									className="px-2 py-1 text-center border border-l-0 border-gray-300"
									onClick={() => setQty(++qty)}
								>
									+
								</button>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<button className="px-8 py-2 my-2 text-sm font-bold uppercase bg-orange-400 rounded-full">
								Buy Now
							</button>
							<button
								className="px-8 py-2 my-2 text-sm font-bold uppercase bg-orange-400 rounded-full"
								onClick={() => addToCart()}
							>
								Add to cart
							</button>
						</div>
					</div>
				</div>
			</div>
			<CardSection />
		</div>
	);
};

export default Product;
