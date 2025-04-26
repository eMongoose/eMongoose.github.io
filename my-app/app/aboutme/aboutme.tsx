import React from 'react'

import './aboutme.css'

import pfp from '../assets/pfp.jpg'
import github_pfp from '../assets/github-mark.png'
import linkedin_pfp from '../assets/LI-In-Bug.png'

export function Welcome() {
  const RedirectGitHub = () => {
    window.location.href = 'https://github.com/eMongoose';
  };

  const RedirectLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/emily-huang-529a6a322/';
  };

  return (
    <main >
      <section className='left'>
        <img src={pfp} />
      </section>
      <section className='right'>
        <h1>Hello there! 👁️👄👁️</h1>
        <article>
          <p>I am Emily — a <b>computing science</b> student at Simon Fraser University. 🦝</p>
          <p>Making pretty websites is my <i>passion</i>. I'm currently expanding my knowledge on HTML semantics beyond divs! 🤭</p>
          <p>If I'm not coding, I'm doing one or more of the following:</p>
          <ul>
            <li>Starting Projects ✏️</li>
            <li>Eating food 🍲</li>
            <li>Drawing silly characters 🪿</li>
          </ul>
        </article>
        <section className='contact'>
          <p>Feel free to get in touch with me!</p>
          <div className='contact-img'>
            <img src={github_pfp} onClick={RedirectGitHub} />
            <img src={linkedin_pfp} onClick={RedirectLinkedIn} />
          </div>
        </section>
      </section>
    </main>
  );
}
