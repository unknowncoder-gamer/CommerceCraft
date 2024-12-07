import Footer from "@/components/my ui/home/Footer";

interface Props {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div>
      {/* Nav */}
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
