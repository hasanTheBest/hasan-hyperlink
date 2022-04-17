import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, className, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const classes = match ? className.concat(" bg-emerald-700") : className;

  return (
    <Link className={classes} to={to} {...props}>
      {children}
    </Link>
  );
}

export default CustomLink;
