import Button from "react-bootstrap/Button";
import "./Footer.css";

function MyFooter({ author, email, linkGithub }) {
  return (
    <footer>
      <p>Author: Trần Duy Minh Kha {author}</p>
      <p>Created by: khabt2005@gmail.com {email} </p>
      <p>&copy; {new Date().getFullYear()} {author}. All rights reserved </p>
      <Button variant="link" href="https://github.com/your-username/movie-management" target="_blank">
        My Link Github: {linkGithub}
      </Button>
    </footer>
  );
}
export default MyFooter;
