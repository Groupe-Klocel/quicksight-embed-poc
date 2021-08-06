import * as QuicksightEmbedding from "amazon-quicksight-embedding-sdk";
import { Component } from "react";
interface Props {
  url: string;
}

interface State {
  loader: boolean;
}

export class QuicksightEmbed extends Component<Props, State> {
  // Before the component mounts, we initialise our state
  state: State = {
    // TODO: use the loader to show a spinner while it loads
    loader: true,
  };
  dashboardId = "quicksight-embed";

  componentDidMount() {
    QuicksightEmbedding.embedDashboard({
      url: this.props.url,
      container: document.getElementById(this.dashboardId)!,
      height: "AutoFit",
      loadingHeight: "600px",
      width: "100%",
      printEnabled: true,
      footerPaddingEnabled: true,
      locale: "fr-Fr",
      scrolling: "no",
      parameters: {},
    });
    this.setState({
      loader: false,
    });
  }

  render() {
    return <div id={this.dashboardId}></div>;
  }
}
