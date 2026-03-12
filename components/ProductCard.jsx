export default function ProductCard({ product }) {
  return (
    <div
      style={{
        width:"250px",
        border:"1px solid #ddd",
        padding:"30px",
        borderRadius:"10px",
        textAlign:"center",
        boxShadow:"0 2px 10px rgba(0,0,0,0.1)"
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{width:"200px",height:"200px",objectFit:"cover"}}
      />

      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
    </div>
  );
}
