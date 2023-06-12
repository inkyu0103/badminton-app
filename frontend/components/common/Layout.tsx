import Footer from "components/common/Footer";
import Header from "components/common/Header";
import { ReturnChildrenProps } from "interface/Common.interface";

const Layout = ({ children }: ReturnChildrenProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
