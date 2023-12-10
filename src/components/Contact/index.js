import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

//   useEffect(() => {
//     return setTimeout(() => {
//       setLetterClass('text-animate-hover')
//     }, 3000)
//   }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_tnamdm4', refForm.current, 'ToteC8De5aLWnOSVP')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  const position = [51.505, -0.09]


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    type="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        {/* <div className='info-map'>
          Shivansh Sood,
          <br />
          Indirapuram Ghaziabad, <br />
          Uttar Pradesh <br />
          <span>shivansh2328.be22@chitkara.edu.in</span>
        </div> */}
        <div className='map-wrap'>
        {/* <MapContainer center={[44.96366, 19.61045]} zoom={12}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
        </MapContainer> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.76453929242!2d77.36368347547969!3d28.63681827566243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5949ffb482d%3A0x6c5cc4f85e406ddc!2sSPS%20RESIDENCY%20GATE%20NO.%202!5e0!3m2!1sen!2sin!4v1699386584444!5m2!1sen!2sin&amp;iwloc=near" width="100%" height="100%" style={{border: '0'}} allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact