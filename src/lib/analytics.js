import ReactGA from "react-ga4";

export const initGA = () => {
  console.log("GA init");
  ReactGA.initialize("your GA measurement id");
};

export const handlePageView = (pathname, title) => {
  ReactGA.send({
    hitType: "pageview",
    page: pathname,
    title: title,
  });
};

export const handleLogEvent = (category = "", action = "", label = "") => {
  // console.log("category", category, "action", action);
  if (category && action) {
    ReactGA.event({ category, action, label });
  }
};

export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.gtag("event", "exception", {
      description,
      fatal, // set to true if the error is fatal
    });
  }
};
