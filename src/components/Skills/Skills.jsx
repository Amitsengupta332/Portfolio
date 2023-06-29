import React from 'react';


const Skills = () => {
    return (
        <div>
            <h1 className='text-center text-4xl mt-4'>My Skills</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-4'>
                <div className='ml-5' data-aos="zoom-in"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                    <h2 className='text-center text-3xl'>Frontend:</h2>
                    <div className='mt-5'>
                        <h2>Html 5</h2>
                        <div className="progress-container">
                            <span className="progress-label mr-3">90%</span>
                            <progress className="progress progress-primary " value="90" max="100" style={{ width: '75%', marginTop: '10px' }}></progress>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h2>CSS 3</h2>
                        <div className="progress-container">
                            <span className="progress-label mr-3">80%</span>
                            <progress className="progress progress-primary " value="80" max="100" style={{ width: '75%', marginTop: '10px' }}></progress>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h2>JavaScript (ES6)</h2>
                        <div className="progress-container">
                            <span className="progress-label mr-3">70%</span>
                            <progress className="progress progress-primary " value="70" max="100" style={{ width: '75%', marginTop: '10px' }}></progress>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h2>React.js</h2>
                        <div className="progress-container">
                            <span className="progress-label mr-3">85%</span>
                            <progress className="progress progress-primary " value="85" max="100" style={{ width: '75%', marginTop: '10px' }}></progress>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h2>Tailwind CSS</h2>
                        <div className="progress-container">
                            <span className="progress-label mr-3">80%</span>
                            <progress className="progress progress-primary " value="80" max="100" style={{ width: '75%', marginTop: '10px' }}></progress>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h2>Bootstrap 5</h2>
                        <div className="progress-container">
                            <span className="progress-label mr-3">80%</span>
                            <progress className="progress progress-primary " value="80" max="100" style={{ width: '75%', marginTop: '10px' }}></progress>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h2>Firebase</h2>
                        <div className="progress-container">
                            <span className="progress-label mr-3">75%</span>
                            <progress className="progress progress-primary " value="75" max="100" style={{ width: '75%', marginTop: '10px' }}></progress>
                        </div>
                    </div>
                </div>
                {/* backend */}
                <div className='ml-5' data-aos="zoom-in"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                    <h2 className='text-center text-3xl'>Backend:</h2>
                    <div className='mt-5'  >
                        <h2>Node.js</h2>
                        <div className="progress-container">
                            <span className="progress-label mr-3">60%</span>
                            <progress className="progress progress-primary " value="60" max="100" style={{ width: '75%', marginTop: '10px' }}></progress>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h2>Express.js</h2>
                        <div className="progress-container">
                            <span className="progress-label mr-3">70%</span>
                            <progress className="progress progress-primary " value="70" max="100" style={{ width: '75%', marginTop: '10px' }}></progress>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h2>MongoDB</h2>
                        <div className="progress-container">
                            <span className="progress-label mr-3">65%</span>
                            <progress className="progress progress-primary " value="65" max="100" style={{ width: '75%', marginTop: '10px' }}></progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;