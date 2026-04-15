const Footer = () => {
  return (
    <div className="bg-[#244D3F]">
      <footer className="pt-20 w-11/12 mx-auto">
        <div className="grid place-items-center text-center">
          <img src="/assets/logo-xl.png" alt="" />
          <p className="text-[#FFFFFF70] pt-4">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <div className="pt-4 pb-10">
            <h2 className="text-[#FFFFFF] font-medium">Social Links</h2>
            <div className="flex gap-3 pt-4">
              <img src="/assets/instagram.png" alt="" />
              <img src="/assets/facebook.png" alt="" />
              <img src="/assets/twitter.png" alt="" />
            </div>
          </div>
          <div className="w-full text-[#FAFAFA60] pb-7.5">
            <hr className="pt-8" />
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                <div>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                </div>
                <div className="flex gap-4">
                    <h4>Privacy Policy</h4>
                    <h4>Terms of Service</h4>
                    <h4>Cookies</h4>
                </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
