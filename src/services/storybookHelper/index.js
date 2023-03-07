import App from "./VirtualApp";

export const getWithFullscreen = (component) => {
  return (
    <div id="root">
      <App>{component}</App>
    </div>
  );
};
