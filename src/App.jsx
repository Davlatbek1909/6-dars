import "./App.css";
import imagesPage from "./assets/images/imges1.png";
import images from "./assets/images/img2.png";
import img3 from "./assets/images/img3.png";
import img4 from "./assets/images/img4.png";
import img5 from "./assets/images/img5.png";
import img6 from "./assets/images/img6.png";
import img7 from "./assets/images/img7.png";
import img8 from "./assets/images/img8.png";
function App() {
  return (
    <div className="countainer">
      <div className="header">
        <div className="p">
          <h4 className="p1" >SUPPLEMENT</h4>
          <h4 className="p1" >LASER</h4>
          <h4 className="p1" >REVIEWS</h4>
          <h4 className="p1" >JOURNAL</h4>
          <h4 className="p1" >ABOUT</h4>
          <img className="img1" src={imagesPage} alt="" />
          <h4 className="p2" >HELP & SUPPORT</h4>
          <h4 className="p2" >ACTIVATE</h4>
          <h4 className="p2" >ACCOUNT</h4>
          <button className="btn1"><h5>BUY</h5></button>
        </div>
        <div className="main1">
          <img className="img2" src={images} alt="" />
          <h2>THE FUTURE OF WELLNESS.</h2>
          <p>The perfect balance of science, nature and technology. <br />Prepare to look and feel your absolute best.</p>
          <button className="but" >SUPPLEMENT</button>
          <button className="but1" >SUPPLEMENT</button>
        </div>
        <div className="main2">
          <img className="img3" src={img3} alt="" />
          <img className="img4" src={img4} alt="" />
        </div>
        <div className="main3">
          <h1 className="hn" >THE QUEST FOR BETTER.</h1>
          <img className="img5" src={img5} alt="" />
          <p className="pn">At LYMA, we’re always searching for the perfect balance of science, <br /> nature and technology. Every LYMA product has been designed to <br /> work together. We know that when we discover the best, you’ll <br /> discover yours.</p>
        </div>
        <div className="main4">
          <img className="img6" src={img6} alt="" />
          <h1 className="hj">Wellness innovation at its <br /> scientific best.</h1>
          <button className="but" >SUPPLEMENT</button>
          <button className="but1" >SUPPLEMENT</button>
        </div>
        <div className="main5">
          <img className="img7" src={img7} alt="" />
          <h1 className="kl">Meet our founder.</h1>
          <p className="pk">Lucy’s story is one you really need to read; it <br /> changed an industry forever.</p>
          <h3 className="nk">READ MORE</h3>
        </div>
        <div className="main6">
          <img className="img8" src={img8} alt="" />

        </div>
        <div class="lkj">
          <div class="hp">
            <h2 className="ph ">SUPPLEMENT</h2>
            <br />
            <br />
            <p className="ph ">Benefits</p>
            <br />
            <p className="ph ">Formula</p>
            <br />
            <p className="ph ">Immunity</p>
            <br />
            <p className="ph ">Journal</p>
            <br />
            <p className="ph ">Reviews</p>
            <br />
            <br />
            <h3 className="ph ">Buy</h3>
          </div>


          <div class="hta">
            <h2 className="ph ">LYMA LASER</h2>
            <br />
            <br />
            <p className="ph ">Benefits</p>
            <br />
            <p className="ph ">Formula</p>
            <br />
            <p className="ph ">Immunity</p>
            <br />
            <p className="ph ">Journal</p>
            <br />
            <p className="ph ">Technology</p>
            <br />
            <p className="ph ">Reviews</p>
            <br />
            <p className="ph ">Priming Serum</p>
            <br />
            <br />
            <h3 className="ph ">Buy</h3>
          </div>

          <div class="hta">
            <h2 className="ph ">ABOUT</h2>
            <br />
            <br />
            <p className="ph ">Benefits</p>
            <br />
            <p className="ph ">Formula</p>
            <br />
            <p className="ph ">Immunity</p>
            <br />
            <p className="ph ">Journal</p>
            <br />
            <p className="ph ">Technology</p>
            <br />
            <p className="ph ">Reviews</p>
            <br />
            <br />
            <h3 className="ph ">Buy</h3>
          </div>
          <div class="hta">
            <h2 className="ph ">ACCOUNT</h2>
            <br />
            <br />
            <p className="ph ">Benefits</p>
            <br />
            <p className="ph ">My subscription</p>
            <br />
            <p className="ph ">Account details</p>
            <br />
            <p className="ph ">Payment method</p>
            <br />
            <p className="ph ">Technology</p>
            <br />
            <p className="ph ">Reviews</p>
            <br />
            <br />
            <h3 className="ph ">Buy</h3>
          </div>
<div className="ins">
<h2 className="ph2">NEWSLETTER</h2>
<h3 className="ph3" > Subscribe to our newsletter.</h3>
<form>
<input type="text" placeholder="LYMA Newsletter" required />
<button className="btn3">SIGN UP</button>
</form>
</div>
        </div>
      </div>
    </div>
  );
}

export default App;
