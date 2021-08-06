import {
  GetDashboardEmbedUrlCommand,
  QuickSightClient,
} from "@aws-sdk/client-quicksight";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import { QuicksightEmbed } from "../components/QuicksightEmbed";

const quicksight = new QuickSightClient({ region: process.env.AWS_REGION });

export const getServerSideProps: GetServerSideProps = async (context) => {
  /*
  Retrieves a Quicksight Embed URL on the server-side using the JS SDK,
  then exports the URL as a property to be used by the frontend
  */
  const command = new GetDashboardEmbedUrlCommand({
    DashboardId: process.env.DASHBOARD_ID,
    IdentityType: "IAM",
    AwsAccountId: process.env.AWS_ACCOUNT_ID,
    Namespace: "default",
  });

  // const dashboardArn = `arn:aws:quicksight:${REGION}:${process.env.AWS_ACCOUNT_ID}:dashboard/${process.env.DASHBOARD_ID}`;

  // const command = new GenerateEmbedUrlForAnonymousUserCommand({
  //   AwsAccountId: process.env.AWS_ACCOUNT_ID,
  //   Namespace: "default",
  //   AuthorizedResourceArns: [dashboardArn],
  //   ExperienceConfiguration: {
  //     Dashboard: { InitialDashboardId: process.env.DASHBOARD_ID },
  //   },
  // });

  /*
  See documentation:
  https://docs.aws.amazon.com/quicksight/latest/user/embedded-dashboards-for-authenticated-users-step-2.html
  */

  // const command = new GenerateEmbedUrlForRegisteredUserCommand({
  //   AwsAccountId: process.env.AWS_ACCOUNT_ID,
  //   ExperienceConfiguration: {
  //     Dashboard: { InitialDashboardId: process.env.DASHBOARD_ID }
  //   },
  //   UserArn: "lol",
  //   SessionLifetimeInMinutes: 600
  // })

  const data = await quicksight.send(command);
  return {
    props: { url: data.EmbedUrl! },
  };
};

function DashboarEmbedPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  // Quicksight Embedding SDK
  // const QuicksightEmbedding = dynamic(
  //   async () => {
  //     const module = await import("amazon-quicksight-embedding-sdk");
  //     module.embedDashboard();
  //   },
  //   { ssr: false }
  // );

  // React.useEffect(() => {});

  // const containerRef = React.useRef();
  // const options = {
  //   container: containerRef.current,
  //   url: props.url,
  // };
  // const dashboard = embedDashboard(options);
  // console.log(props.url);
  // return <div ref={containerRef.current}>Hello, world.</div>;

  return <QuicksightEmbed url={props.url} />;
}

export default DashboarEmbedPage;
