import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "#111",
        color: "white",
        zIndex: "1000"
      }}
    >
      {/* Logo */}
      <h2 style={{ color: "#4CAF50" }}>ShopEasy</h2>

      {/* Links */}
      <div style={{ display: "flex", gap: "30px" }}>
        <Link style={{ color: "white", textDecoration: "none" }} href="/">Home</Link>
        <Link style={{ color: "white", textDecoration: "none" }} href="/products">Products</Link>
        <Link style={{ color: "white", textDecoration: "none" }} href="/cart">Cart</Link>
        <Link style={{ color: "white", textDecoration: "none" }} href="/login">Login</Link>
      </div>
    </nav>
  );
}
