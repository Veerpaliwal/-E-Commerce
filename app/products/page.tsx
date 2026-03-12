import ProductCard from "../../components/ProductCard";

export default function Products() {

  const products = [
    { id:1, name:"iPhone 14", price:80000, image:"https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg"},
    { id:2, name:"Samsung Galaxy S23", price:75000, image:"https://m.media-amazon.com/images/I/61VfL-aiToL._SL1500_.jpg"},
    { id:3, name:"OnePlus 11", price:65000, image:"https://m.media-amazon.com/images/I/61amb0CfMGL._SL1500_.jpg"},
    { id:4, name:"MacBook Air", price:120000, image:"https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg"},
    { id:5, name:"Dell Laptop", price:70000, image:"https://m.media-amazon.com/images/I/61xk4XNRktL._SL1500_.jpg"},
    { id:6, name:"HP Laptop", price:68000, image:"https://m.media-amazon.com/images/I/71f5Eu5lJSL._SL1500_.jpg"},
    { id:7, name:"Sony Headphones", price:9000, image:"https://m.media-amazon.com/images/I/61CGHv6kmWL._SL1500_.jpg"},
    { id:8, name:"Boat Headphones", price:2500, image:"https://m.media-amazon.com/images/I/61KNJav3S9L._SL1500_.jpg"},
    { id:9, name:"JBL Headphones", price:4000, image:"https://m.media-amazon.com/images/I/61XUGpV9A6L._SL1500_.jpg"},
    { id:10, name:"Apple Watch", price:45000, image:"https://m.media-amazon.com/images/I/71XMTKj3YCL._SL1500_.jpg"},
    { id:11, name:"Samsung Watch", price:30000, image:"https://m.media-amazon.com/images/I/61y2VVWcGBL._SL1500_.jpg"},
    { id:12, name:"Realme Watch", price:5000, image:"https://m.media-amazon.com/images/I/61pPaJ7K2CL._SL1500_.jpg"},
    { id:13, name:"iPad", price:55000, image:"https://m.media-amazon.com/images/I/61NGnpjoRDL._SL1500_.jpg"},
    { id:14, name:"Samsung Tablet", price:40000, image:"https://m.media-amazon.com/images/I/71X2VhCUYKL._SL1500_.jpg"},
    { id:15, name:"Lenovo Tablet", price:25000, image:"https://m.media-amazon.com/images/I/61RZDb2mQxL._SL1500_.jpg"},
    { id:16, name:"Gaming Mouse", price:1500, image:"https://m.media-amazon.com/images/I/61mpMH5TzkL._SL1500_.jpg"},
    { id:17, name:"Mechanical Keyboard", price:3500, image:"https://m.media-amazon.com/images/I/71kr3WAj1FL._SL1500_.jpg"},
    { id:18, name:"Bluetooth Speaker", price:3000, image:"https://m.media-amazon.com/images/I/71HnKjM9FCL._SL1500_.jpg"},
    { id:19, name:"Smart TV", price:60000, image:"https://m.media-amazon.com/images/I/81hU5W0FZLL._SL1500_.jpg"},
    { id:20, name:"Gaming Console", price:50000, image:"https://m.media-amazon.com/images/I/61x3b6a1eCL._SL1500_.jpg"}
  ];

  return (
    <div
      style={{
        display:"flex",
        flexWrap:"wrap",
        gap:"30px",
        padding:"80px",
        justifyContent:"center"
      }}
    >
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
