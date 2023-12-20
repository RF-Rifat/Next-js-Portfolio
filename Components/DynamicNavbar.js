import dynamic from 'next/dynamic';

const DynamicNavbar = dynamic(() => import('@//Components/Navbar'), { ssr: false });

const Nav = () => {
  return (
    <div>
      {/* Other components */}
      <DynamicNavbar />
      {/* Other components */}
    </div>
  );
};

export default Nav;
