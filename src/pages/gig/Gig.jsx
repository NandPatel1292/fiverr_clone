import React from "react";
// import Slider from "infinite-react-carousel";
import { Slider } from "infinite-react-carousel/lib";
import "./Gig.scss";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="content">FIVER AI ARTIEST</span>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img className="pp" src="/images/man.png" alt="" />
            <span>Nand Patel</span>
            <div className="star">
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>
          <div className="seller">
            <h2>About Thr Seller</h2>
            <div className="user">
              <img src="/images/man.png" alt="" />
              <div className="info">
                <span>Nand Patel</span>
                <div className="star">
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contect Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">Ahmedabad</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Sep 2020</span>
                </div>
                <div className="item">
                  <span className="title">Avg Respomce Time</span>
                  <span className="desc">5 Hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 Day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Nand, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>

          <div className="review">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img className="pp" src="/images/man.png" alt="" />
                <div className="info">
                  <span>Nand Patel</span>
                  <div className="country">
                    <img
                      src="https://img.freepik.com/free-vector/round-flag-india_23-2147813736.jpg?w=740&t=st=1680984043~exp=1680984643~hmac=edf6c0565194efaf9445e85609dfb0dc6715f77ff729dce9a7f7ed08f9f9e481"
                      alt=""
                    />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="star">
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/images/like.png" alt="" />
                <span>Yes</span>
                <img src="/images/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />

            <div className="item">
              <div className="user">
                <img className="pp" src="/images/man.png" alt="" />
                <div className="info">
                  <span>Nand Patel</span>
                  <div className="country">
                    <img
                      src="https://img.freepik.com/free-vector/round-flag-india_23-2147813736.jpg?w=740&t=st=1680984043~exp=1680984643~hmac=edf6c0565194efaf9445e85609dfb0dc6715f77ff729dce9a7f7ed08f9f9e481"
                      alt=""
                    />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="star">
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/images/like.png" alt="" />
                <span>Yes</span>
                <img src="/images/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 50.50</h2>
          </div>
          <p>
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="details">
            <div className="item">
              <img src="/images/clock.png" alt="" />
              <span>2 Day Delivery</span>
            </div>
            <div className="item">
              <img src="/images/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="feature">
            <div className="item">
              <img src="/images/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="/images/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="/images/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
