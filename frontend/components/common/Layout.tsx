import Footer from "components/common/Footer";
import Header from "components/common/Header";
import { StrictPropsWithChildren } from "interface/Common.interface";

const Layout = ({ children }: StrictPropsWithChildren) => (
  <div className="max-w-[1080px] mx-auto h-full flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
