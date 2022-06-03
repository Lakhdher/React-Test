import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div className='about'>
            <Logo/>
            <Navigation/>
            <br />
            <h1>About</h1>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, eum illum 
                fuga ipsa atque quasi dignissimos impedit aliquam labore minus laboriosam 
                nam officiis nostrum enim sit ea! Dolores consectetur exercitationem
                 facilis enim, laboriosam, labore eligendi corrupti aspernatur recusandae corporis
                , facere optio possimus quam
                  rerum accusamus. Recusandae voluptates nulla doloremque est velit, 
                error vitae praesentium pariatur numquam cumque enim reiciendis labore.</p>
        </div>
    );
};

export default About;