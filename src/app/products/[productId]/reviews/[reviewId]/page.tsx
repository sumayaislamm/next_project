export default async function Reviewdetails({params}:
  {params : Promise <{ productId : string, reviewId : string; }>}
){
    const {productId, reviewId} = await params;
    return (
    <>
    <h1>Review of {reviewId}</h1>
    <h1>Of the product of {productId}</h1>
    </>
    );
} 