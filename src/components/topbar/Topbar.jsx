import "./topbar.css";
import { AppBar } from "@material-ui/core";
import Toggle from "../toggle/Toggle";


export default function Topbar() {
  return (
    <AppBar position="fixed">
      <ul>
        <li><a class="active" href="#intro">Home</a></li>
        <li><a href="mailto:shreyes@virgnia.edu">shreyes@virginia.edu</a></li>
      </ul>

      <Toggle />
    </AppBar>
  );
}
