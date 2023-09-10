import useNavigations from "../hooks/use-navigation";

function Route({ path, children }) {
  const { currentPath } = useNavigations();

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;
