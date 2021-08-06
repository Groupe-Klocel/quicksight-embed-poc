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
    loader: true,
  };
  dashboardId = "quicksight-embed";

  componentDidMount() {
    this.setState({
      loader: false,
    });
    QuicksightEmbedding.embedDashboard({
      url: this.props.url,
      container: document.getElementById(this.dashboardId)!,
    });
  }

  render() {
    return <div id={this.dashboardId}></div>;
  }
}
