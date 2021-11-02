import "./topbar.css";

export default function Topbar() {
  return (
    <div className={"navbar"}>
      <ul>
        <li><a class="active" href="#intro">Home</a></li>
        <li><a href="mailto:shreyes@virgnia.edu">shreyes@virginia.edu</a></li>
      </ul>
    </div>
  );
}
