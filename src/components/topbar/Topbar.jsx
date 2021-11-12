import "./topbar.css";
import { AppBar } from "@material-ui/core";
import Toggle from "../toggle/Toggle";
import Intro from "../intro/Intro";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub } from "@mui/icons-material";


export default function Topbar() {
  return (
    <AppBar position="fixed">
      <ul style={{ display: "flex", justifyContent: "start" }}>
        <li style={{ display: "flex" }}>
          <MailOutlineIcon
            style={{ padding: "15px 0px 15px 15px", cursor: "pointer" }}
            onClick={() => window.open("mailto:shreyes@virgnia.edu")}
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:shreyes@virgnia.edu"
          >
            shreyes@virginia.edu
          </a>
        </li>
        <li style={{ display: "flex" }}>
          <LinkedInIcon
            style={{ padding: "15px 0px 15px 15px", cursor: "pointer" }}
            onClick={() =>
              window.open("https://www.linkedin.com/in/shreyes-bhat-462633167/")
            }
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/shreyes-bhat-462633167/"
          >
            LinkedIn
          </a>
        </li>
        <li style={{ display: "flex" }}>
          <GitHub
            style={{ padding: "15px 0px 15px 15px", cursor: "pointer" }}
            onClick={() => window.open("https://github.com/ShreyesBhat")}
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ShreyesBhat"
          >
            GitHub
          </a>
        </li>
      </ul>

      <Toggle />
    </AppBar>
  );
}
