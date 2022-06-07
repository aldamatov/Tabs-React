import React, { useState } from "react";

const Tabs = () => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <div>
      <main>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          quis!
        </p>
        <div className="container">
          <div className="img-section">
            <img
              src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="tabs-section">
            <ul class="tabs">
              <li
                data-tab-target="#history"
                className={toggle === 1 ? " tab active " : "tab"}
                onClick={() => toggleTab(1)}
              >
                History
              </li>
              <li
                data-tab-target="#vision"
                className={toggle === 2 ? " tab active " : "tab"}
                onClick={() => toggleTab(2)}
              >
                Vision
              </li>
              <li
                data-tab-target="#goals"
                className={toggle === 3 ? " tab active " : "tab"}
                onClick={() => toggleTab(3)}
              >
                Goals
              </li>
            </ul>

            <div className="tab-content">
              <div
                id="history"
                data-tab-content
                className={toggle === 1 ? "active-content" : ""}
              >
                <h1>History</h1>
                <p>
                  I'm baby wolf pickled schlitz try-hard normcore marfa man bun
                  mumblecore vice pop-up XOXO lomo kombucha glossier bicycle
                  rights. Umami kinfolk salvia jean shorts offal venmo.
                  Knausgaard tilde try-hard, woke fixie banjo man bun. Small
                  batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse
                  tacos. Viral direct trade hoodie ugh chambray, craft beer pork
                  belly flannel tacos single-origin coffee art party migas plaid
                  pop-up.
                </p>
              </div>
              <div
                id="vision"
                data-tab-content
                className={toggle === 2 ? "active-content" : ""}
              >
                <h1>Vision</h1>
                <p>
                  Vision Man bun PBR&B keytar copper mug prism, hell of
                  helvetica. Synth crucifix offal deep v hella biodiesel.
                  Church-key listicle polaroid put a bird on it chillwave palo
                  santo enamel pin, tattooed meggings franzen la croix cray.
                  Retro yr aesthetic four loko tbh helvetica air plant, neutra
                  palo santo tofu mumblecore. Hoodie bushwick pour-over jean
                  shorts chartreuse shabby chic. Roof party hammock master
                  cleanse pop-up truffaut, bicycle rights skateboard affogato
                  readymade sustainable deep v live-edge schlitz narwhal.
                </p>
                <ul className="vision-ul">
                  <li>Item1</li>
                  <li>Item2</li>
                  <li>Item3</li>
                  <li>Item4</li>
                </ul>
              </div>
              <div
                id="goals"
                data-tab-content
                className={toggle === 3 ? "active-content" : ""}
              >
                <h1>Goals</h1>
                <p>
                  Chambray authentic truffaut, kickstarter brunch taxidermy vape
                  heirloom four dollar toast raclette shoreditch church-key.
                  Poutine etsy tote bag, cred fingerstache leggings cornhole
                  everyday carry blog gastropub. Brunch biodiesel sartorial
                  mlkshk swag, mixtape hashtag marfa readymade direct trade man
                  braid cold-pressed roof party. Small batch adaptogen coloring
                  book heirloom. Letterpress food truck hammock literally hell
                  of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork
                  yuccie, banh mi salvia venmo photo booth quinoa chicharrones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tabs;
