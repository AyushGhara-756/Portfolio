import myphoto from '../assets/profile/self.jpg'
import './styles/Home.css'
import coding from '../assets/hobby/coding.jpeg'
import explore from '../assets/hobby/explore.jpeg'
import Skill from './Skill'
import nature from '../assets/hobby/nature.jpg'
import Card from './Card'

const Home = () => {
    return (
        <>
            <div className="introduction">
                {/* display writeup and photo side by side */}
                <div className="intro">
                    <h2>Hi, I'm Ayush Ghara </h2>
                    <p>
                        Aspiring to become Full-Stack and DevOps Developer with a passion for building robust, scalable web applications.<br />
                        Currently pursuing my B.Tech in Computer Engineering at Fr. Conceicao Rodrigues College of Engineering (Fr. CRCE), I'm on a mission to master the full product lifecycle — from clean code to seamless deployment.
                    </p>
                </div>
                <div className="pic">
                    {/* the frame should be round and resize it */}
                    <img src={myphoto} alt="my_picture" />
                </div>
            </div>
            <div className="hobbies">
                <h2>Hobbies</h2>
                <p className="hobby-intro">Here's what keeps me inspired and energized outside of work:</p>
                <ul className='hobby-list'>
                    <li><Card src={coding} alt="code" desc="Learn new tech stacks" /></li>
                    <li><Card src={explore} alt="explore" desc="Explore new Places" /></li>
                    <li><Card src={nature} alt="nature" desc="Take pictures of nature" /></li>
                </ul>
            </div>
        </>
    )
}

export default Home
