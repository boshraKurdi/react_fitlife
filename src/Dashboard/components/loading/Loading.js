import { cloneElement } from "react";


export default function Loading({ loading, error, children }) {
  const typeElement = children.type.render.name;
  const HandelRender = () => {
    if (typeElement === "Button") {
      const cloneButton = cloneElement(
        children,
        { disabled: true },
        "loading.."
      );
      return (
        <>
          {loading === "pending" ? (
            cloneButton
          ) : (
            children
          )}
        </>
      );
    }
    return (
      <>
        {loading === "pending" ? (
          <p>Loading ...</p>
        )  : (
          children
        )}
      </>
    );
  };
  return HandelRender();
}
