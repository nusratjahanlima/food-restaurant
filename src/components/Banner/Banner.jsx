import './Banner.css'


const Banner = () => {
    return (
        <div className="carousel banner w-full">
    <div id="slide1" className="carousel-item banner-item relative w-full">
    <img src="https://as2.ftcdn.net/v2/jpg/01/38/06/81/1000_F_138068141_IqQbrh41debp7YEchoLMyiyhF4X0lNOt.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item banner-item relative w-full">
    <img src="https://t3.ftcdn.net/jpg/01/15/26/28/240_F_115262838_Qdfwviyw9ATjw0TNnky95RjvKoQXprj5.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item banner-item relative w-full">
    <img src="https://t4.ftcdn.net/jpg/06/94/59/75/240_F_694597508_g1wwyoaht1RQq2hTLg90sWtx4AZ4kdMh.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item banner-item relative w-full">
    <img src="https://as2.ftcdn.net/v2/jpg/02/09/64/33/1000_F_209643310_7tdlZx6oMF9iPqnt2PzbXdfYTNKGohdm.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item banner-item relative w-full">
    <img src="https://as2.ftcdn.net/v2/jpg/07/65/31/75/1000_F_765317508_aCNWmNJ9avwHAGHAd2DlWnFNZvZJvFVq.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item banner-item relative w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide7" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide7" className="carousel-item banner-item relative w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide6" className="btn btn-circle">❮</a> 
      <a href="#slide8" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide8" className="carousel-item banner-item relative w-full">
    <img src="https://t4.ftcdn.net/jpg/07/17/54/51/240_F_717545144_ZVIuLy3aMjk7clL49d762p92PiLunc1P.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide7" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;