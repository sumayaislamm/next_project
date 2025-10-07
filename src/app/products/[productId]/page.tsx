export default async function Productdetails( {params}: {
    params: Promise<{ productId : string}>;
}) {
  const productId = (await params).productId; 
  return <h1>Product Details {productId}</h1>
}