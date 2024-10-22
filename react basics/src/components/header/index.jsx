export default function Header() {
  return (
    <div>
      <h1>Logo</h1>

      <ul>
        <Link titles="Home" />
        <Link titles="About" />
        <Link titles="Contact" />
        <Link titles="Blogs" />
        <Link titles="Newsletter" />
      </ul>
    </div>
  );
}

function Link(props) {
  return <li className="links text-lg">{props.titles}</li>;
}
