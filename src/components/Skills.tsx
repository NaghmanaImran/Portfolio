import React from 'react';

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'data-aos="flip-up">
        <div>
          <h2 className='text-4xl md:text-5xl'> My Skills Specialization</h2>
          <p className='text-blue-500 pt-2'>
            I specialize in building modern web applications using a combination of powerful tools and frameworks, including React, Next.js, and TypeScript for robust and maintainable code, and Tailwind CSS for responsive, utility-first styling. With a solid foundation in HTML and CSS, I focus on creating user-friendly and visually appealing frontend experiences.
          </p>
        </div>
        <div className='grid grid-cols-2 text-3xl sm:text-4xl'data-aos="flip-up">
          <div className='space-y-2'>
            <h2>Node.js</h2>
            <h2>TypeScript</h2>
            <h2>Next.js</h2>
          </div>
          <div className='space-y-2'>
            <h2>Tailwind</h2>
            <h2>CSS</h2>
            <h2>HTML</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
