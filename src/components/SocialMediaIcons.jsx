import github_icon from '../assets/github.png';
import youtube_icon from '../assets/youtube.png';

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-5">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/myesha-mahazabeen-6a73a317a/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.youtube.com/@MyeshaMahazabeen"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="youtube-link" src={youtube_icon} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Myesha-Mahazabeen"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src={github_icon} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
