import Navbar from "../../components/navbar";

export default function DefaultTemplate({ children }) {
  return (
    <div className="page">
      <Navbar />

      {children}
    </div>
  );
}
