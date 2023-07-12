import Footer from "components/common/Footer";
import Header from "components/common/Header";
import { StrictPropsWithChildren } from "interface/Common.interface";

const Layout = ({ children }: StrictPropsWithChildren) => (
  <div className="flex flex-col flex-1 ">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
