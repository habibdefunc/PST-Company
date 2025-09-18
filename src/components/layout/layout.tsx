import NavbarComponent from "../navbar/NavbarComponent";
import FooterComponent from "../navbar/FooterComponent";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <NavbarComponent />

      {/* Main content dengan padding-top biar nggak ketimpa navbar */}
      <main className="flex-grow ">{children}</main>

      {/* Footer */}
      <FooterComponent />
    </div>
  );
}
