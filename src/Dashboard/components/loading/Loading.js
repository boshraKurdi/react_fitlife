import { cloneElement } from "react";
import Alert from '@mui/material/Alert';


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
          ) : error ? (
            <div style={{display:"flex" , flexDirection: 'column' , width: '100%'}}>
               <Alert sx={{marginBottom: '1rem' , display: 'flex' , alignItems: 'center' , fontSize:'1.5rem'}} variant="filled" severity="error">{error}</Alert>
              {children}
            </div>
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
        ) : error ? (
          <p>{error}</p>
        ) : (
          children
        )}
      </>
    );
  };
  return HandelRender();
}
