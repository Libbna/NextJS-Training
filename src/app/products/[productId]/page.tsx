import { Metadata } from 'next';

type Props = {
  params: {
    productId: string;
  };
};

/**
 * Generates metadata for a product page dynamically based on the product ID.
 * This is a Next.js dynamic metadata function that runs on the server side.
 * 
 * @param {Object} props - The component props object
 * @param {Object} props.params - Route parameters object
 * @param {string} props.params.productId - The ID of the product from the dynamic route
 * 
 * @returns {Promise<Metadata>} A promise that resolves to a Metadata object containing the page title
 * 
 * @example
 * // For route /products/123
 * // Returns { title: "OnePlus 123" }
 * 
 * @remarks
 * The function includes a simulated delay of 100ms using setTimeout to demonstrate async behavior.
 * In a real application, this would typically be replaced with an actual API call or database query.
 */
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise<string>((resolve) =>
    setTimeout(() => {
      resolve(`OnePlus ${params.productId}`);
    }, 100)
  );
  return {
    title: title
  };
};


export default function ProductDetails({ params }: Props) {
  return (
    <>
      <h1>Details about product {params.productId}</h1>
    </>
  );
}
