import "@/styles/Navbar.scss"; // Import SCSS

function Navbar() { 
  return (
    <nav style={{ backgroundColor: "blue", padding: "10px", color: "white" }}>
      <h1>This is the Navbar</h1>
    </nav>
  );
}

export default Navbar; // ✅ Export the function only once
