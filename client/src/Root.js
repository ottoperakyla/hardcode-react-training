import React from "react";
import App from "./containers/AppContainer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { TypographyStyle, GoogleFont } from "react-typography";
import typography from "./services/typography";

const Root = props => {
  const { store } = props;

  return (
    <>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default Root;
