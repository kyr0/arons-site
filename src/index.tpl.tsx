import { HomepageComponent } from "./index";
import { tsx } from "springtype/web/vdom";

export default (cmp: HomepageComponent) => <fragment>

<div id="index-banner" class="parallax-container parallax-header" style="min-height: 680px">
  <div class="section no-pad-bot">
    <div class="container" style="padding-top: 80px">

      <h1 class="header center white-text"><img class="round-corner-picture" alt="Background" src={require('../assets/images/aron_quad.jpg')} /></h1>

      <h4 class="header center white-text name light">Hi, my name is Aron</h4>

      <div class="row center">
        <h5 class="header col s12 light white-text">or <code>
          <a class="header-link" href="https://github.com/kyr0" target="_blank" rel="noreferrer">kyr0</a>
        </code> (in <code>nerd mode</code>)</h5>
      </div>
    </div>
  </div>
  <div class="parallax"><img src={require("../assets/images/background1.jpg")} alt="Background" /></div>
</div>

<div class="container">

  <div class="section">

    <div class="row">

      <div class="col s12 m4">
        <h5>About me</h5>
        <p class="light">
          I'm a Software Engineer and Entrepreneur. I have a fable for music, art, philosophy, mountains, hiking trails, bouldering and biking. 
          I'm fluent in 🇩🇪 (mother tongue) and 🇬🇧 but not in 🇷🇺 yet :)
        </p>
      </div>

      <div class="col s12 m4">
        <h5>Activism</h5>
        <p class="light">
          I'm driven by the motivation to make a difference. I believe that we're facing plenty challenging problems.
          That's why I've joined <a href="https://www.climatepartner.com" target="_blank">ClimatePartner.com</a> to counter climate change
          and take part in social Hackathons (<a href="https://colivery.de/" target="_blank">Colivery</a>, <a href="https://wirvsvirus.org/" target="_blank">#WirVsVirus</a>, top 20 winner, March 2020).
        </p>
      </div>

      <div class="col s12 m4">
        <h5>Music, Code &amp; Philosophy</h5>
        <p class="light">
          My <a href="https://open.spotify.com/artist/3M2oPVMtw7Km9kIGVKzYVO" target="_blank">chillout music</a> aims to calm stressed souls.&nbsp;  
          <a href="https://fluctura.tech" target="_blank">FLUCTURA</a> DevTools and APIs help developers succeed every day.
          I'm also working on a(nother) book - this time on philosophy. It will be released by 2022.
        </p>
      </div>
    </div>
  </div>
</div>

<div class="parallax-container valign-wrapper">
  <div class="section no-pad-bot">
    <div class="container">
      <div class="row center">
        <h5 class="header col s12 light"><i>&bdquo;It's not in the stars to hold our destiny but in ourselves.&rdquo;<br /><br /> &ndash; William Shakespeare</i></h5>
      </div>
    </div>
  </div>
  <div class="parallax"><img src={require("../assets/images/background3.jpg")} alt="It's not in the stars to hold our destiny but in ourselves" /></div>
</div>

<div class="container">
  <div class="section">

    <div class="row">
      <div class="col s12 m4">

        <div class="card hoverable">
          <div class="card-image">
            <img src={require('../assets/images/background4.jpg')} alt="Background" />
            <span class="card-title">Software Engineering</span>
          </div>
          <div class="card-content light">
            I help teams transforming their visions into successful software projects.
            <ul>
              <li>&ndash; autodidact, computer science expert</li>
              <li>&ndash; 1st LoC &ndash; <strong>when I was 11 years old</strong></li>
              <li>&ndash; <strong>15+ years</strong> of prof. experience</li>
              <li>&ndash; <strong>loves front-end</strong> web development</li>
              <li>&ndash; <strong>TypeScript</strong>, <strong>React</strong>, <strong>Angular</strong></li>
              <li>&ndash; <strong>Material Design</strong>, <strong>Ionic</strong>, <strong>Bootstrap</strong></li>
            </ul>
          </div>
          <div class="card-action">
            <a href="#skill-matrix" class="blue-text">
              My skill matrix</a>

            <a href="https://www.linkedin.com/in/aronhomberg/" target="_blank" rel="noreferrer" class="blue-text">
              LinkedIn</a>
          </div>
        </div>

      </div>

      <div class="col s12 m4">

        <div class="card hoverable">
          <div class="card-image">
            <img alt="Background" src={require('../assets/images/teaching-christina-wocintechchat-com-bPVM4nOy0Rg-unsplash.jpg')} />
            <span class="card-title">Training &amp; Mentoring</span>
          </div>
          <div class="card-content light">

            I love to share my skills to help people:

            <ul>
              <li>&ndash; starting in <strong>software development</strong></li>
              <li>&ndash; developing <strong>successful products</strong></li>
              <li>&ndash; <strong>grow</strong> as engineers</li>
              <li>&ndash; <strong>become</strong> critical thinkers</li>
            </ul>

            Over the course
            of the past 15 years, I've taught HTML, CSS, JavaScript, TypeScript and various frameworks to 1000+ talents.
          

          </div>
          <div class="card-action">
            <a href="javascript:" class="grey-text disabled">Masterclass to be released by 2021</a>
          </div>
        </div>

      </div>

      <div class="col s12 m4">

        <div class="card hoverable">
          <div class="card-image">
            <img alt="Background" src={require('../assets/images/social-activism-jon-tyson-XzUMBNmQro0-unsplash.jpg')} />
            <span class="card-title">Open Source</span>
          </div>
          <div class="card-content light">

            I'm always seeking to find the best technical solution. If there is none, you'll find me implementing one:

            <ul>
              <li>&ndash; <a href="https://springtype.org" target="_blank" rel="noreferrer">SpringType</a></li>
              <li>&ndash; <a href="https://github.com/kyr0/PCemV14MacOSX" target="_blank" rel="noreferrer">PCem v14 port for MacOS</a></li>
              <li>&ndash; <a href="https://github.com/vegarringdal/custom-elements-hmr-polyfill" target="_blank" rel="noreferrer">Custom Web Components HMR</a></li>
              <li>&ndash; <a href="https://github.com/kyr0/assemblyscript-js-wasm-interop-example" target="_blank" rel="noreferrer">AssemblyScript SharedMemory</a></li>
              <li>&ndash; <a href="https://github.com/w3c/webcomponents/issues/829#issuecomment-525064177" target="_blank" rel="noreferrer">W3C contributions</a></li>
            </ul>
          </div>
          <div class="card-action">
            <a href="https://github.com/sponsors/kyr0" target="_blank" rel="noreferrer" class="blue-text">
              Support my work</a>

            <a href="https://github.com/kyr0" target="_blank" rel="noreferrer" class="blue-text">
              GitHub</a>
          </div>
        </div>

      </div>
    </div>

    <div class="row">

      <div class="col s12 m4">

        <div class="card hoverable">
          <div class="card-image">
            <img alt="Background" src={require('../assets/images/author-green-chameleon-s9CC2SKySJM-unsplash.jpg')} />
            <span class="card-title">Writing</span>
          </div>
          <div class="card-content light">

            In 2011 I wrote a <a target="_blank" rel="noreferrer" href="https://www.amazon.de/ExtJS-kurz-gut-OReillys-Taschenbibliothek/dp/3897215578">book on Ext JS</a>, published by O'Reilly Germany.
              This let me become a slightly popular Ext JS and JavaScript consultant at the time.
              Since then I took a pause from writing.
          </div>
          <div class="card-action">
            <a href="javascript:" class="grey-text disabled">Next book to be released by 2022</a>
          </div>
        </div>

      </div>

      <div class="col s12 m4">


        <div class="card hoverable">
          <div class="card-image">
            <img alt="Background" src={require('../assets/images/music-james-owen-c-NBiJrhwdM-unsplash.jpg')} />
            <span class="card-title">Music</span>
          </div>
          <div class="card-content light">

            Since 2008 I fell in love with electronic music production. My favourite DAW is Logic Pro X.
              I use sound design, creative sampling and wavetable synthesis to create unique soundscapes. 
          </div>
          <div class="card-action">
            <a href="https://soundcloud.com/fluctura-records" target="_blank" rel="noreferrer" class="blue-text">Fluctura Records</a>
          </div>
        </div>

      </div>


      <div class="col s12 m4">

        <div class="card hoverable">
          <div class="card-image">
            <img alt="Background"  src={require('../assets/images/nature.jpg')} />
            <span class="card-title">Nature</span>
          </div>
          <div class="card-content light">

            Hiking is one of my favourite ways to enjoy the summertime.
           By hiking, I became a minimalist.
            Munich &ndash; Venice [2015]; Haute Route [2017]; GR221 Mallorca [2017] + 3000km Alps.

          </div>
          <div class="card-action">
            <a href="https://www.instagram.com/fluctus.et.figura" target="_blank" rel="noreferrer" class="blue-text">Follow me on Instagram</a>
          </div>
        </div>


      </div>

    </div>
    


  </div>
</div>


<div class="parallax-container valign-wrapper">
  <div class="section no-pad-bot">
    <div class="container">
      <div class="row center">
        <h3 class="header col s12 light">Happy Customers</h3>
        <h3 class="header col s12 light" style="font-size:2em">(2008 &ndash; 2020)</h3>
      </div>
    </div>
  </div>
  <div class="parallax"><img src={require("../assets/images/kaleb-tapp-1deQbU6DhBg-unsplash.jpg")} alt="Customers" /></div>
</div>


<div class="container">
  <div class="section">

    <div class="row">
      <div class="col s12 center">

        <p class="light">
          Years of work in various businesses, roles and positions allowed me to gain a deep understanding of <strong>FinTech</strong>, <strong>Banking</strong>, <strong>Medicine</strong>, <strong>Publishing</strong>, <strong>Social Networks</strong>, <strong>Energy Markets</strong>, <strong>Logistics</strong>, <strong>Insurances / InsurTech</strong>, <strong>SEM/SEA</strong>, <strong>GIS</strong> and <strong>OLAP big data analysis</strong>.
        </p>

        <div class="carousel">
          
          <a class="carousel-item" href="https://dessign.group/" target="_blank" rel="noreferrer"><img alt="Dessign Group" src={require('../assets/images/customer_logos/dessign_logo.png')} /></a>
          <a class="carousel-item" href="https://oreilly.com/" target="_blank" rel="noreferrer"><img alt="O'Reilly" src={require('../assets/images/customer_logos/oreilly_logo.png')} /></a>
          <a class="carousel-item" href="https://www.soprasteria.com/" target="_blank" rel="noreferrer"><img alt="Sopra Steria" src={require('../assets/images/customer_logos/sopra_steria_logo.svg')} /></a>
          <a class="carousel-item" href="https://onpex.com/" target="_blank" rel="noreferrer"><img alt="ONPEX" src={require('../assets/images/customer_logos/onpex_logo.png')} /></a>
          <a class="carousel-item" href="https://matrix-vision.com/" target="_blank" rel="noreferrer"><img alt="Matrix-Vision" src={require('../assets/images/customer_logos/matrix_vision_logo.png')} /></a>
          <a class="carousel-item" href="https://www.fiduciagad.de/" target="_blank" rel="noreferrer"><img alt="Fiducia GAD" src={require('../assets/images/customer_logos/fiducia_gad_logo.png')} /></a>
          <a class="carousel-item" href="https://www.arvato-systems.de/" target="_blank" rel="noreferrer"><img alt="Arvato Bertelsmann" src={require('../assets/images/customer_logos/arvato_logo.png')} /></a>
          <a class="carousel-item" href="https://www.financial.com/" target="_blank" rel="noreferrer"><img alt="financial.com" src={require('../assets/images/customer_logos/financial.com_logo.png')} /></a>
          <a class="carousel-item" href="https://www.gis-consult.de/" target="_blank" rel="noreferrer"><img alt="GIS Consult" src={require('../assets/images/customer_logos/gis_consult_logo.png')} /></a>
          <a class="carousel-item" href="https://www.ibo.de/" target="_blank" rel="noreferrer"><img alt="IBO" src={require('../assets/images/customer_logos/ibo_logo.svg')} /></a>
          <a class="carousel-item" href="https://www.intelliad.de" target="_blank" rel="noreferrer"><img alt="intelliad" src={require('../assets/images/customer_logos/intelliad_logo.png')} /></a>
          <a class="carousel-item" href="https://www.jungheinrich.com" target="_blank" rel="noreferrer"><img alt="Jungheinrich" src={require('../assets/images/customer_logos/jungheinrich_logo.png')} /></a>
          <a class="carousel-item" href="https://www.mayflower.de" target="_blank" rel="noreferrer"><img alt="Mayflower" src={require('../assets/images/customer_logos/Mayflower-Logo.png')} /></a>
          <a class="carousel-item" href="https://www.muenchnersingles.de" target="_blank" rel="noreferrer"><img alt="muenchner singles" src={require('../assets/images/customer_logos/meunchner_singles_logo.png')} /></a>
          <a class="carousel-item" href="https://www.tngtech.com" target="_blank" rel="noreferrer"><img alt="TNG Technology Consulting" src={require('../assets/images/customer_logos/tng_logo.png')} /></a>
          <a class="carousel-item" href="https://www.toyotafinancial.com" target="_blank" rel="noreferrer"><img alt="Toyota Financial" src={require('../assets/images/customer_logos/toyota_financial_logo.jpeg')} /></a>
        </div>

        <p class="light">
          Swipe left and right.
        </p>

      </div>
    </div>
  </div>
</div>


<a name="get-in-touch" />
<div class="parallax-container valign-wrapper">
  <div class="section no-pad-bot">
    <div class="container">
      <div class="row center">
        <h3 class="header col s12 light">Get in touch</h3>
      </div>
    </div>
  </div>
  <div class="parallax"><img src={require("../assets/images/background5.jpg")} alt="Background" /></div>
</div>

<div class="container">
  <div class="section">
  
    <div class="row">
      {/*
      <div class="col s12 center">
        <p class="light">
          Just leave me a message. I'll get back to you asap.
          <br /><br />
        </p>
        <form ref={{contactForm: cmp}}>
          <div class="row">
            <div class="input-field col s6">
              <input required ref={{firstNameField: cmp}} placeholder="Yout first name" id="first_name" type="text" class="validate" />
              <label for="first_name" class="active">First Name *</label>
            </div>
            <div class="input-field col s6">
              <input required ref={{lastNameField: cmp}} placeholder="Your last name" id="last_name" type="text"  class="validate" />
              <label for="last_name" class="">Last Name *</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input required ref={{emailField: cmp}} placeholder="Your email address" id="email" type="email" class="validate" />
              <label for="email">Email *</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input ref={{phoneField: cmp}} placeholder="Your phone no" id="phone" type="tel" class="validate" />
              <label for="phone">Phone</label>
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              <label class="left" for="message">Your message *</label>
              <textarea required ref={{messageField: cmp}} placeholder="Hi Aron, this is what I'd like to tell you" id="message" class="materialize-textarea validate"></textarea>
            </div>
          </div>
        </form>

        <div class="row center">
          * = Required
          <p ref={{validationErrorMessage: cmp}} class="validity-error-message">

          </p>

          <a onclick={cmp.onEmailSubmit} class="btn-large waves-effect waves-light white darken-2 black-text">
            Send message</a>
        </div>

        <p class="light">
          Your message will be directly forwarded to my email inbox.
        </p>
      </div>
      */}

      <br />

      <center>Just drop me a line via <a href="mailto:info@aron-homberg.de">info@aron-homberg.de</a></center>


    </div>

  </div>
</div>

<a name="skill-matrix" />
<div class="parallax-container valign-wrapper">
  <div class="section no-pad-bot">
    <div class="container">
      <div class="row center">
        <h5 class="header col s12 light"><i>&bdquo;Never become so much of an expert that you stop gaining expertise.&rdquo;<br /><br /> &ndash; Denis Waitley</i></h5>
      </div>
    </div>
  </div>
  <div class="parallax"><img src={require("../assets/images/background4.jpg")} alt="Background"  /></div>
</div>

<div class="container">
  <div class="section">

    <div class="row">
      <div class="col s12 center">
        <h3><i class="mdi-content-send brown-text"></i></h3>
        <h4>Skill Matrix</h4>

        <a href="javascript:(function() {document.querySelector('#skill-matrix').style.display='block';})()">Click here to switch to nerd mode.</a>

        <div id="skill-matrix" style="display:none">
          <p class="light"><i>Level range: Beginner, Intermediate, Advanced, Expert</i></p>
          <p class="light"><i>🔥= recommendation to use</i></p>

          <h5 class="table-header">Roles</h5>
          <table class="striped">
            <thead>
              <tr>
                <th width="60%">Skill</th>
                <th width="30%">Level</th>
                <th width="10%">Years</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Senior Software Engineer / Consultant</td>
                <td>Expert</td>
                <td>10+</td>
              </tr>
              <tr>
                <td>UX Designer, Web Designer</td>
                <td>Advanced</td>
                <td>15+</td>
              </tr>
              <tr>
                <td>Team Lead, "Head of Frontend", Scrum Master</td>
                <td>Advanced <i>(for teams up to 5 people)</i></td>
                <td>10+</td>
              </tr>
              <tr>
                <td>Project Management</td>
                <td>Advanced</td>
                <td>10+</td>
              </tr>
              <tr>
                <td>Product Management</td>
                <td>Intermediate</td>
                <td>4+</td>
              </tr>
              <tr>
                <td>CTO</td>
                <td>Intermediate <i>(for Startups)</i></td>
                <td>2+</td>
              </tr>
            </tbody>
          </table>

          <p class="light">
            Although I love helping teams to thrive and reach their goals, I'm tremendously in love with actual software engineering and programming.
          </p>


          <h5 class="table-header">Programming Languages</h5>
          <table class="striped">
            <thead>
              <tr>
                <th width="60%">Skill</th>
                <th width="30%">Level</th>
                <th width="10%">Years</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>JavaScript &amp; ES6+</td>
                <td>Expert</td>
                <td>15+</td>
              </tr>
              <tr>
                <td>TypeScript 🔥</td>
                <td>Expert</td>
                <td>5+</td>
              </tr>
              <tr>
                <td>HTML5 🔥</td>
                <td>Expert</td>
                <td>20</td>
              </tr>
              <tr>
                <td>CSS3, &amp; CSS4 🔥</td>
                <td>Expert</td>
                <td>20</td>
              </tr>
              <tr>
                <td>PHP (3,4,5,7)</td>
                <td>Expert [Zend Certified Engineer, 2009]</td>
                <td>15+</td>
              </tr>
              <tr>
                <td>SQL</td>
                <td>Expert [MySQL Certified Developer, 2009]</td>
                <td>15+</td>
              </tr>
              <tr>
                <td>Java (1.4,5,7,8)</td>
                <td>Advanced</td>
                <td>15+</td>
              </tr>
              <tr>
                <td>Shell / Bash</td>
                <td>Advanced</td>
                <td>15+</td>
              </tr>
              <tr>
                <td>XSL-T</td>
                <td>Intermediate</td>
                <td>3+</td>
              </tr>
              <tr>
                <td>WebAssembly, <a href="https://docs.assemblyscript.org/" target="_blank" rel="noreferrer">AssemblyScript</a> 🔥</td>
                <td>Intermediate, <a href="https://github.com/kyr0/assemblyscript-js-wasm-interop-example" target="_blank" rel="noreferrer">JS/WASM shared memory interop</a></td>
                <td>2+</td>
              </tr>
              <tr>
                <td>C, C++, Objective C, ASM</td>
                <td>Beginner</td>
                <td>2+</td>
              </tr>
              <tr>
                <td>Golang</td>
                <td>Learning</td>
                <td>less than 1</td>
              </tr>
            </tbody>
          </table>

          <p class="light">
            Good code is ideomatic, well tested, comes with meaningful documentation and fits into the chosen architecture.
          </p>

          <h5 class="table-header">Programming Styles</h5>

          <table class="striped">
            <thead>
              <tr>
                <th width="60%">Skill</th>
                <th width="30%">Level</th>
                <th width="10%">Years</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Imperative, object-oriented (OOP) 🔥</td>
                <td>Expert</td>
                <td>20+</td>
              </tr>
              <tr>
                <td>Functional, Reactive 🔥</td>
                <td>Advanced</td>
                <td>5+</td>
              </tr>
              <tr>
                <td>Procedural</td>
                <td>Advanced</td>
                <td>20+</td>
              </tr>
              <tr>
                <td>Metaprogramming</td>
                <td>Advanced</td>
                <td>10+</td>
              </tr>
            </tbody>
          </table>

          <p class="light">
            I favor patterns like Domain Driven Design (DDD) and try to keep it as simple and stupid (KISS) as possible.
          </p>

          <h5 class="table-header">Frontend Frameworks</h5>
          <table class="striped">
            <thead>
              <tr>
                <th width="30%">Skill</th>
                <th width="30%">Language</th>
                <th width="30%">Level</th>
                <th width="10%">Years</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>React 🔥, Preact</td>
                <td>TypeScript</td>
                <td>Expert, <a href="https://github.com/kyr0/decorative-react" target="_blank" rel="noreferrer">ES7 decorator library</a></td>
                <td>5+</td>
              </tr>
              <tr>
                <td>SpringType (own framework)</td>
                <td>TypeScript</td>
                <td><a href="https://springtype.org">Co-Founder &amp; Lead Developer</a></td>
                <td>2+</td>
              </tr>
              <tr>
                <td>Angular</td>
                <td>TypeScript</td>
                <td>Advanced</td>
                <td>4+</td>
              </tr>
              <tr>
                <td>Ext JS (3, 4, 5)</td>
                <td>JavaScript, CSS</td>
                <td>Expert, <a href="https://www.amazon.de/ExtJS-kurz-gut-OReillys-Taschenbibliothek/dp/3897215578" target="_blank" rel="noreferrer">my book: ExtJS &ndash; kurz &amp; gut</a></td>
                <td>10+</td>
              </tr>
              <tr>
                <td>jQuery</td>
                <td>JavaScript</td>
                <td>Expert</td>
                <td>12+</td>
              </tr>
              <tr>
                <td>Ionic 3, Ionic 4 🔥</td>
                <td>TypeScript</td>
                <td>Advanced</td>
                <td>5+</td>
              </tr>
              <tr>
                <td>Materialize 🔥</td>
                <td>JavaScript, CSS</td>
                <td>Advanced</td>
                <td>5+</td>
              </tr>
              <tr>
                <td>Bootstrap 3/4</td>
                <td>JavaScript, CSS</td>
                <td>Advanced</td>
                <td>10+</td>
              </tr>
              <tr>
                <td>Electron 🔥</td>
                <td>JavaScript, TypeScript</td>
                <td>Advanced</td>
                <td>4+</td>
              </tr>
            </tbody>
          </table>

          <p class="light">
            In the past, I was known as being an expert in "ancient" frameworks like the "dojo toolkit" ;-)
          </p>

          <h5 class="table-header">JavaScript Libraries</h5>
          <table class="striped">
            <thead>
              <tr>
                <th width="60%">Skill</th>
                <th width="30%">Level</th>
                <th width="10%">Years</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><a href="https://redux.js.org/" target="_blank" rel="noreferrer">Redux</a> 🔥</td>
                <td>Advanced</td>
                <td>4+</td>
              </tr>
              <tr>
                <td><a href="https://rxjs-dev.firebaseapp.com/" target="_blank" rel="noreferrer">RxJS</a> 🔥</td>
                <td>Advanced</td>
                <td>4+</td>
              </tr>
              <tr>
                <td><a href="https://datatables.net/" target="_blank" rel="noreferrer">Datatables.net</a></td>
                <td>Advanced</td>
                <td>10+</td>
              </tr>
              <tr>
                <td><a href="https://momentjs.com/" target="_blank" rel="noreferrer">Moment.js</a>,
                <a href="https://date-fns.org/" target="_blank" rel="noreferrer">date-fns</a> 🔥</td>
                <td>Advanced</td>
                <td>5+</td>
              </tr>
              <tr>
                <td><a href="https://ace.c9.io/" target="_blank" rel="noreferrer">Ace</a>,
                <a href="https://ckeditor.com/" target="_blank" rel="noreferrer">CKeditor</a>,
                <a href="https://www.tiny.cloud/features" target="_blank" rel="noreferrer">TinyMCE</a>,
                <a href="https://quilljs.com/" target="_blank" rel="noreferrer">Quill</a></td>
                <td>Advanced</td>
                <td>10+</td>
              </tr>
              <tr>
                <td><a href="https://lodash.com/" target="_blank" rel="noreferrer">Lodash</a> 🔥,
                <a href="https://underscorejs.org/" target="_blank" rel="noreferrer">Underscore</a></td>
                <td>Advanced</td>
                <td>8+</td>
              </tr>
              <tr>
                <td><a href="https://mustache.github.io/" target="_blank" rel="noreferrer">Mustache</a>,&nbsp;
                <a href="https://handlebarsjs.com/" target="_blank" rel="noreferrer">Handlebars</a>,&nbsp;
                <a href="https://ejs.co/" target="_blank" rel="noreferrer">EJS</a></td>
                <td>Advanced</td>
                <td>6+</td>
              </tr>
            </tbody>
          </table>

          <h5 class="table-header">CSS, PostCSS, Sass, Less</h5>

          <table class="striped">
            <thead>
              <tr>
                <th width="30%">Skill</th>
                <th width="60%">Level</th>
                <th width="10%">Years</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Box model, tabelless</td>
                <td>Expert</td>
                <td>15+</td>
              </tr>
              <tr>
                <td>Flexbox 🔥</td>
                <td>Advanced</td>
                <td>8+</td>
              </tr>
              <tr>
                <td>Responsive Design, Media Queries 🔥</td>
                <td>Advanced</td>
                <td>5+</td>
              </tr>
              <tr>
                <td>CSS3 animations, 3D transforms 🔥</td>
                <td>Advanced</td>
                <td>5+</td>
              </tr>
              <tr>
                <td><a href="https://postcss.org/" target="_blank" rel="noreferrer">PostCSS</a> 🔥,
                <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">SCSS / Sass</a> 🔥,
                <a href="http://lesscss.org/">Less</a></td>
                <td>Advanced</td>
                <td>9+</td>
              </tr>
              <tr>
                <td>CSS4, Variables 🔥</td>
                <td>Intermediate</td>
                <td>1+</td>
              </tr>
              <tr>
                <td>CSS Grid</td>
                <td>Beginner</td>
                <td>1+</td>
              </tr>
            </tbody>
          </table>

          <p class="light">
            All my projects are responsive, mobile-first.
          </p>


          <h5 class="table-header">Backend Frameworks</h5>

          <table class="striped">
            <thead>
              <tr>
                <th width="30%">Skill</th>
                <th width="30%">Language</th>
                <th width="30%">Level</th>
                <th width="10%">Years</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Node.js, express 🔥</td>
                <td>JavaScript, TypeScript</td>
                <td>Advanced, <a href="https://twitter.com/munichnug/status/138712210020122624?ref_src=twsrc%5Etfw">[Munich Node.js user-group co-founder]</a></td>
                <td>10+</td>
              </tr>
              <tr>
                <td>Zend Framework</td>
                <td>PHP</td>
                <td>Advanced</td>
                <td>8+</td>
              </tr>
              <tr>
                <td>Laravel</td>
                <td>PHP</td>
                <td>Intermediate</td>
                <td>3+</td>
              </tr>
              <tr>
                <td>Slim</td>
                <td>PHP</td>
                <td>Intermediate</td>
                <td>3+</td>
              </tr>
              <tr>
                <td>Spring Boot, Hibernate, jetty</td>
                <td>Java</td>
                <td>Intermediate</td>
                <td>3+</td>
              </tr>
            </tbody>
          </table>

          <p class="light">
            Nowadays, I focus on Node.js, cloud-scalable micro services and serverless architectures (Firebase, AWS, etc.).
          </p>

          <h5 class="table-header">Mobile Frameworks</h5>

          <table class="striped">
            <thead>
              <tr>
                <th width="30%">Skill</th>
                <th width="30%">Language</th>
                <th width="30%">Level</th>
                <th width="10%">Years</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Android Native</td>
                <td>Java</td>
                <td>Advanced, <a href="https://www.amazon.de/dp/B06XDC89KF" target="_blank" rel="noreferrer">Prof. Appraiser, O'Reilly</a></td>
                <td>10+</td>
              </tr>
              <tr>
                <td>Ionic 3, Ionic 4 🔥</td>
                <td>JavaScript, TypeScript</td>
                <td>Advanced</td>
                <td>6+</td>
              </tr>
              <tr>
                <td>Cordova, PhoneGap</td>
                <td>JavaScript</td>
                <td>Advanced</td>
                <td>6+</td>
              </tr>
              <tr>
                <td>Appcelerator Titanium</td>
                <td>JavaScript, XML, Java, Objective C</td>
                <td>Intermediate</td>
                <td>4+</td>
              </tr>
            </tbody>
          </table>

          <p class="light">
            My mobile apps are modern PWAs ("add to home screen") nowadays.
          </p>

          <h5 class="table-header">CMS</h5>

          <table class="striped">
            <thead>
              <tr>
                <th width="30%">Skill</th>
                <th width="30%">Language</th>
                <th width="30%">Level</th>
                <th width="10%">Years</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Wordpress</td>
                <td>PHP, MySQL, JavaScript, HTML, CSS</td>
                <td>Expert</td>
                <td>10+</td>
              </tr>
              <tr>
                <td>Joomla</td>
                <td>PHP, MySQL, JavaScript, HTML, CSS</td>
                <td>Expert</td>
                <td>10+</td>
              </tr>
            </tbody>
          </table>


          <h5 class="table-header">Databases</h5>

          <table class="striped">
            <thead>
              <tr>
                <th width="30%">Skill</th>
                <th width="60%">Level</th>
                <th width="10%">Years</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>MySQL</td>
                <td>Expert [MySQL Certified Developer, 2009]</td>
                <td>8+</td>
              </tr>
              <tr>
                <td>PostgreSQL</td>
                <td>Advanced</td>
                <td>4+</td>
              </tr>
              <tr>
                <td>Elasticsearch 🔥</td>
                <td>Intermediate</td>
                <td>3+</td>
              </tr>
              <tr>
                <td>MongoDB 🔥</td>
                <td>Intermediate</td>
                <td>4+</td>
              </tr>
              <tr>
                <td>Firebase 🔥</td>
                <td>Intermediate</td>
                <td>2+</td>
              </tr>
              <tr>
                <td>Redis, Memcache</td>
                <td>Intermediate</td>
                <td>3+</td>
              </tr>
              <tr>
                <td>Oracle</td>
                <td>Beginner</td>
                <td>2+</td>
              </tr>
            </tbody>
          </table>

          <p class="light">
            Most of my projects are currently hosted and implemented serverless (Firebase, AWS, etc.).
          </p>

          <h5 class="table-header">Web Servers, Load Balancers</h5>

          <table class="striped">
            <thead>
              <tr>
                <th width="30%">Skill</th>
                <th width="60%">Level</th>
                <th width="10%">Years</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>node.js, PM2 🔥</td>
                <td>Advanced</td>
                <td>5+</td>
              </tr>
              <tr>
                <td>Apache2</td>
                <td>Advanced</td>
                <td>15+</td>
              </tr>
              <tr>
                <td>Nginx</td>
                <td>Advanced</td>
                <td>8+</td>
              </tr>
              <tr>
                <td>HAProxy</td>
                <td>Intermediate</td>
                <td>3+</td>
              </tr>
              <tr>
                <td>Jetty, Netty</td>
                <td>Intermediate</td>
                <td>2+</td>
              </tr>
            </tbody>
          </table>

          <h5 class="table-header">Protocols</h5>

          <table class="striped">
            <thead>
              <tr>
                <th width="30%">Skill</th>
                <th width="60%">Level</th>
                <th width="10%">Years</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>HTTP(S), HTTP/2 🔥</td>
                <td>Expert</td>
                <td>20+</td>
              </tr>
              <tr>
                <td>RESTful, HATEOAS 🔥</td>
                <td>Advanced</td>
                <td>15+</td>
              </tr>
              <tr>
                <td>WebSocket, <a href="https://socket.io/" target="_blank" rel="noreferrer">socket.io</a></td>
                <td>Advanced</td>
                <td>10+</td>
              </tr>
              <tr>
                <td>SOAP, RSS and other ancient stuff</td>
                <td>Advanced</td>
                <td>4+</td>
              </tr>
              <tr>
                <td>Protobuf</td>
                <td>Beginner</td>
                <td>1</td>
              </tr>
              <tr>
                <td>GraphQL</td>
                <td>Intermediate</td>
                <td>1+</td>
              </tr>
            </tbody>
          </table>

          <h5 class="table-header">Software Tooling</h5>

          <table class="striped">
            <thead>
              <tr>
                <th width="30%">Skill</th>
                <th width="30%">Type</th>
                <th width="30%">Level</th>
                <th width="10%">Years</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>IntelliJ IDEA, Webstorm, PhpStorm, CLion</td>
                <td>IDE</td>
                <td>Expert</td>
                <td>10+</td>
              </tr>
              <tr>
                <td>Babel, Webpack, Parcel</td>
                <td>Transpiler, Bundler</td>
                <td>Expert <a href="https://github.com/springtype-org/st-start" target="_blank" rel="noreferrer">st-start, bundler &amp; DevServer</a></td>
                <td>4+</td>
              </tr>
              <tr>
                <td>Visual Studio Code</td>
                <td>IDE</td>
                <td>Advanced</td>
                <td>1+</td>
              </tr>
              <tr>
                <td>Git, Gitflow</td>
                <td>SCM</td>
                <td>Advanced</td>
                <td>10+</td>
              </tr>
              <tr>
                <td>SVN, Subversion</td>
                <td>SCM</td>
                <td>Advanced</td>
                <td>10+</td>
              </tr>
              <tr>
                <td>Gulp, Grunt</td>
                <td>Task automation</td>
                <td>Advanced</td>
                <td>10+</td>
              </tr>
              <tr>
                <td>Jira, Confluence</td>
                <td>Project management</td>
                <td>Advanced</td>
                <td>10+</td>
              </tr>
              <tr>
                <td>Jenkins</td>
                <td>Continuous Integration</td>
                <td>Advanced</td>
                <td>10+</td>
              </tr>
              <tr>
                <td>GitHub, Gitlab, Bitbucket</td>
                <td>SCM, Hosting</td>
                <td>Advanced</td>
                <td>10+</td>
              </tr>
              <tr>
                <td>Maven, Gradle, Ant</td>
                <td>Build tool</td>
                <td>Intermediate</td>
                <td>6+</td>
              </tr>
            </tbody>
          </table>


          <h5 class="table-header">Operating Systems</h5>

          <table class="striped">
            <thead>
              <tr>
                <th width="30%">Skill</th>
                <th width="60%">Level</th>
                <th width="10%">Years</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Linux 🔥</td>
                <td>Expert (LPIC-1 certificate, 2009), LFS, Gentoo, <a href="https://www.pling.com/p/1080931/" target="_blank" rel="noreferrer">KDE extensions</a></td>
                <td>20+</td>
              </tr>
              <tr>
                <td>MacOS 🔥</td>
                <td>Expert, MacOS port of the <a href="https://github.com/kyr0/PCemV14MacOSX" target="_blank" rel="noreferrer">PCem vitualization (C, sh, OpenGL 2/3 GLSL shader)</a>, <br />
                  <a href="https://github.com/kyr0/MacOS-Finder-Convert-Folder-To-CD-Image" target="_blank" rel="noreferrer">Folder to .ISO 9660 joliet image AppleScript extension</a></td>
                <td>10+</td>
              </tr>
              <tr>
                <td>Microsoft Windows</td>
                <td>Expert</td>
                <td>25+</td>
              </tr>
            </tbody>
          </table>
          
</div>
      </div>
    </div>

  </div>
</div>

<div class="parallax-container valign-wrapper noskew" style="min-height: 700px">
  <div class="section no-pad-bot">
    <div class="container">
      <div class="row center">
      </div>
    </div>
  </div>
  <div class="parallax"><img src={require("../assets/images/background1.jpg")} alt="Background" /></div>
</div>

<footer class="page-footer blue">
  <div class="container">
    <div class="row">
      <div class="col l6 s12">
        <h5 class="white-text">Legal notice</h5>
        <span class="grey-text text-lighten-4">
          This is a tracking-free website. Images used are either my own or licensed by unsplash.com.
        </span>

      </div>
      <div class="col l3 s12">
        <h5 class="white-text">Contact</h5>
          Aron Homberg<br />
          Wiegandweg 21<br />
          D-80937 Munich<br />
      </div>
      <div class="col l3 s12">
        <h5 class="white-text">&nbsp;</h5>

        Phone: +49 170 5474455<br />
          E-Mail: info@aron-homberg.de
      </div>
    </div>
  </div>
  <div class="footer-copyright">
    <div class="container">
      Made with ❤️ in Munich, Germany. | Powered by <a class="white-text text-lighten-3" target="_blank" rel="noreferrer" href="https://springtype.org">SpringType</a> &amp;&amp;&nbsp;
      <a target="_blank" rel="noreferrer" class="white-text text-lighten-3" href="https://materializecss.com">Materializecss.com</a>
    </div>
  </div>
</footer>

  <div id="thank-you-for-your-message" class="modal">
    <div class="modal-content">
      <h4>Thank you</h4>
      <p>Your message has been delivered to my email account.</p>
      <p>I'll get back to you as soon as possible.</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
    </div>
  </div>
</fragment>