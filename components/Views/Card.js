import Image from "next/image";
import Link from "next/link";

const Card = ({ id, name, code, image }) => {
	const srcImage = image.base64URL ?? "/no-image.png";

	return (
		<Link href={`/products/${id}`} passHref>
			<div className="w-full cursor-pointer">
				<div className="relative w-full h-96">
					<Image src={srcImage} layout="fill" objectFit="cover" alt="img" />
				</div>
				<h3 className="px-2 mt-2 font-semibold text-center text-gray-600">{name}</h3>
				<p className="mt-2 text-sm text-center text-gray-500">{code}</p>
			</div>
		</Link>
	);
};

export default Card;
