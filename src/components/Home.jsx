import React from 'react'
import vg from "../assets/2.webp"
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

import "../styles/home.scss"

const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>Techystack</h1>
          <p>Solution to All your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are the only solutions to the all the tech problems you face everyday. We are leading tech company whose aim is to increase the problem solving ability in people.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iusto alias sint eaque nemo rem sunt vitae numquam debitis rerum nam, obcaecati ullam soluta facere ducimus ipsum. Porro perspiciatis voluptates autem corrupti deserunt! Quia velit eum minus! Aperiam inventore tenetur dignissimos, officia ipsa ex, vitae explicabo ut sequi voluptatum laudantium? Quisquam, placeat explicabo quibusdam deleniti facere laboriosam. Laborum assumenda laudantium esse placeat! Est facilis inventore soluta? Alias blanditiis impedit quidem maxime sed temporibus nesciunt cumque doloremque modi enim nulla hic dolorem repudiandae earum, distinctio voluptate culpa delectus amet. Quos minima debitis reprehenderit nisi atque similique molestias vel mollitia placeat quas? Dolor doloribus dolorum minima quis officia ut dolores atque unde sint mollitia harum veniam, numquam iure voluptatum obcaecati ipsum eligendi culpa, sunt perspiciatis quae. Ad deserunt similique omnis fugiat debitis error eum magnam vel tempora! Non accusantium, omnis quisquam obcaecati placeat facilis enim repellat modi quos impedit, voluptates, adipisci maiores?
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
              <div style={{
                animationDelay: "0.3s",
              }}>
                <AiFillGoogleCircle />
                <p>Google</p>
              </div>

              <div style={{
                animationDelay: "0.5s",
              }}>
                <AiFillAmazonCircle />
                <p>Amazon</p>
              </div>

              <div style={{
                animationDelay: "0.7s",
              }}>
                <AiFillYoutube />
                <p>YouTube</p>
              </div>

              <div style={{
                animationDelay: "1s",
              }}>
                <AiFillInstagram />
                <p>Instagram</p>
              </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;