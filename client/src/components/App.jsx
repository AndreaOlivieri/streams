import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import StreamDelete from "./streams/StreamDelete";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/:id/edit" component={StreamEdit} />
          <Route path="/streams/:id/delete" component={StreamDelete} />
          <Route path="/streams/:id/show" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
