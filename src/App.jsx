import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Banner from './components/Banner'
import BannerIcon from './components/BannerIcon'
import Card from './components/Card'
import CardIcon from './components/CardIcon'
import Testimonials from './components/Testimonials'
import TestimonialIcon from './components/TestimonialIcon'
import Photo from './assets/profile-photo.jpg'
import TestimonialPhoto from './components/TestimonialPhoto'
import TestimonialSign from './components/TestimonialSign'
import TooltipCloseIcon from './components/TooltipCloseIcon'
import TooltipPopup from './components/TooltipPopup'
import TooltipIcon from './components/TooltipIcon'
import TooltipArrow from './components/TooltipArrow'
import Toast from './components/Toast'
import ToastIcon from './components/ToastIcon'

function App() {

  return (
    <main>
      <section>
        <div className="square-btn">
          <Button variant="default" shape="square">Badge</Button>
          <Button variant="red" shape="square">Badge</Button>
          <Button variant="yellow" shape="square">Badge</Button>
          <Button variant="green" shape="square">Badge</Button>
          <Button variant="blue" shape="square">Badge</Button>
          <Button variant="indigo" shape="square">Badge</Button>
          <Button variant="purple" shape="square">Badge</Button>
          <Button variant="pink" shape="square">Badge</Button>
        </div>
        <div className="square-btn">
          <Button variant="default" shape="pill">Badge</Button>
          <Button variant="red" shape="pill">Badge</Button>
          <Button variant="yellow" shape="pill">Badge</Button>
          <Button variant="green" shape="pill">Badge</Button>
          <Button variant="blue" shape="pill">Badge</Button>
          <Button variant="indigo" shape="pill">Badge</Button>
          <Button variant="purple" shape="pill">Badge</Button>
          <Button variant="pink" shape="pill">Badge</Button>
        </div>
      </section>

      <section>
        <Banner variant="success">
          <BannerIcon iconType="success"/>
          <div className="banner-text">
            <h1>Congratulations!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
          </div>
        </Banner>
        <Banner variant="success" line="single">
          <BannerIcon iconType="success" />
          <div className="banner-text">
            <h1>Congratulations!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
          </div>
        </Banner>
        <Banner variant="warning">
          <BannerIcon iconType="warning" />
          <div className="banner-text">
            <h1>Attention</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
          </div>
        </Banner>
        <Banner variant="warning" line="single">
          <BannerIcon iconType="warning" />
          <div className="banner-text">
            <h1>Attention</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
          </div>
        </Banner>
        <Banner variant="error">
          <BannerIcon iconType="error" />
          <div className="banner-text">
            <h1>There is a problem with your application</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
          </div>
        </Banner>
        <Banner variant="error" line="single">
          <BannerIcon iconType="error" />
          <div className="banner-text">
            <h1>There is a problem with your application</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
          </div>
        </Banner>
        <Banner variant="neutral">
          <BannerIcon iconType="neutral" />
          <div className="banner-text">
            <h1>Update available</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
          </div>
        </Banner>
        <Banner variant="neutral" line="single">
          <BannerIcon iconType="neutral" />
          <div className="banner-text">
            <h1>Update available</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
          </div>
        </Banner>
      </section>

      <section>
        <Card className="card" variant="card-default">
          <CardIcon />
          <div className="card-text" >
            <h1>Easy Deployment</h1>
            <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
          </div>
        </Card>
        <Card className="card" variant="card-hover">
          <CardIcon />
          <div className="card-text" >
            <h1>Easy Deployment</h1>
            <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
          </div>
        </Card>
      </section>

      <section>
        <Testimonials variant="blue-pic-desktop">
          <TestimonialPhoto variant="picDesktop" src={Photo} alt='Women with glasses and curly short dark hair profile photo' />      
          <div className="testimonial-content">
            <TestimonialIcon iconVariant="quotes" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </p>
            <TestimonialSign signVariant="multiLine" name="May Anderson" position="Workcation, CTO" />
          </div>
        </Testimonials>

        <Testimonials variant="blue-pic-mobile">
           <TestimonialPhoto variant="picMobile" src={Photo} alt='Women with glasses and curly short dark hair profile photo' />
          <div className="testimonial-content">
            <TestimonialIcon iconVariant="quotes" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </p>
            <TestimonialSign signVariant="multiLine" name="May Anderson" position="Workcation, CTO" />
          </div>
        </Testimonials>

        <Testimonials variant="no-pic-desktop">
            <TestimonialIcon iconVariant="" />
          <div className="testimonial-content">
            <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.” </p>
            <TestimonialSign signVariant="singleLine" name="May Anderson" position="Workcation, CTO" />
          </div>
        </Testimonials>

        <Testimonials variant="no-pic-mobile">
            <TestimonialIcon iconVariant="" />
          <div className="testimonial-content">
            <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.” </p>
            <TestimonialSign signVariant="multiLine" name="May Anderson" position="Workcation, CTO" />
          </div>
        </Testimonials>
      </section>

      <section>
        <TooltipPopup variant="blackPopup">
          <TooltipIcon iconVariant="iconBlack" />

          <div>
            <h2>Archives notes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</p>
          </div>
          <TooltipCloseIcon closeVariant="closeBlack"/>
          <TooltipArrow arrowVariant="black" />

        </TooltipPopup>

        <TooltipPopup variant="indigoPopup">
          <TooltipIcon iconVariant="iconIndigo" />

          <div>
            <h2>Archives notes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</p>
          </div>
          <TooltipCloseIcon closeVariant="closeIndigo"/>
          <TooltipArrow arrowVariant="indigo" />

        </TooltipPopup>

        <TooltipPopup variant="purplePopup">
          <TooltipIcon iconVariant="iconPurple" />

          <div>
            <h2>Archives notes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</p>
          </div>
          <TooltipCloseIcon closeVariant="closePurple"/>
          <TooltipArrow arrowVariant="purple" />

        </TooltipPopup>

        <TooltipPopup variant="greenPopup">
          <TooltipIcon iconVariant="iconGreen" />

          <div>
            <h2>Archives notes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</p>
          </div>
          <TooltipCloseIcon closeVariant="closeGreen"/>
          <TooltipArrow arrowVariant="green" />

        </TooltipPopup>

        <TooltipPopup variant="greyPopup">
          <TooltipIcon iconVariant="iconWhite" />

          <div>
            <h2>Archives notes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</p>
          </div>
          <TooltipCloseIcon closeVariant="closeWhite"/>
          <TooltipArrow arrowVariant="white" />

        </TooltipPopup>

        <TooltipPopup variant="lilacPopup">
          <TooltipIcon iconVariant="iconBlue" />

          <div>
            <h2>Archives notes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</p>
          </div>
          <TooltipCloseIcon closeVariant="closeBlue"/>
          <TooltipArrow arrowVariant="blue" />

        </TooltipPopup>

        <TooltipPopup variant="pinkPopup">
          <TooltipIcon iconVariant="iconPink" />

          <div>
            <h2>Archives notes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</p>
          </div>
          <TooltipCloseIcon closeVariant="closePink"/>
          <TooltipArrow arrowVariant="pink" />

        </TooltipPopup>

        <TooltipPopup variant="lightGreenPopup">
          <TooltipIcon iconVariant="iconLightGreen" />

          <div>
            <h2>Archives notes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</p>
          </div>
          <TooltipCloseIcon closeVariant="closeLightGreen"/>
          <TooltipArrow arrowVariant="lightGreen" />

        </TooltipPopup>
      </section>

      <section>
        <Toast variant="success">
          <ToastIcon iconVariant="success"/>
          <div className="toast-content">
            <h2>Success</h2>
            <p>Your work has been saved</p>
          </div>
        </Toast>
        <Toast variant="warning">
          <ToastIcon iconVariant="warning"/>
          <div className="toast-content">
            <h2>Warning</h2>
            <p>A network error was detected</p>
          </div>
        </Toast>
        <Toast variant="info">
          <ToastIcon iconVariant="info"/>
          <div className="toast-content">
            <h2>Information</h2>
            <p>Please read updated information</p>
          </div>
        </Toast>
        <Toast variant="error">
          <ToastIcon iconVariant="error"/>
          <div className="toast-content">
            <h2>Error</h2>
            <p>Please re-save your work again</p>
          </div>
        </Toast>
      </section>

    </main>
  )
}

export default App
