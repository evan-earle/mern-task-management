import classes from "./Layout.module.scss";
import React from "react";

function Layout({ children }) {
  return <main className={classes.container}> {children} </main>;
}

export default Layout;
