import userImage from "../assets/user-image-2.jpg";
import reactIcon from "../assets/icons/react.png";
import jsIcon from "../assets/icons/js.png";
import tailwindIcon from "../assets/icons/tailwind.webp";
import githubIcon from "../assets/icons/github.png";
import ContactButton from "./ContactButton";

const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-between relative 
            bg-[linear-gradient(to_right,rgb(0,0,0)_66%,rgb(0,0,255)_50%,rgb(0,0,255)_100%)]
             text-white px-10 md:px-20 lg:px-40"
        >
            {/* Left Content */}
            <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold">
                    I’m <span className="text-blue-500">Jovan</span>
                </h1>
                <div className="text-2xl md:text-3xl flex items-center space-x-2">
                    <span>I’m a</span>
                    <span className="bg-blue-300 text-black px-2 py-1 font-bold rounded-xs">Frontend Developer</span>
                </div>
                <p>Let&apos;s build something great together!</p>
                <div className="flex space-x-4">
                    <ContactButton />
                    <a href="../assets/CV.pdf" download className="hidden md:block bg-blue-500
                     text-white px-6 py-2 rounded-xs font-medium hover:bg-blue-600 transitio"
                    >
                        Resume
                    </a>
                </div>

            </div>

            {/* Right Image */}
            <div className="">
                <img
                    src={userImage}
                    alt="user"
                    className="w-[300px] h-[400px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px] object-cover rounded-xs"
                />
            </div>

            {/* Stack Icons */}
            <div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4">
                <div className="flex flex-col space-y-5">
                    <img src={reactIcon} alt="React" className="w-16 h-16 bg-white rounded-full p-1" />
                    <img src={tailwindIcon} alt="tailwind" className="w-16 h-16 bg-white rounded-full p-1" />
                    <img src={jsIcon} alt="Javascript" className="w-16 h-16 bg-white rounded-full p-1" />
                    <img src={githubIcon} alt="github" className="w-16 h-16 bg-white rounded-full p-1" />
                </div>
            </div>
        </section>
    );
};

export default Home;
