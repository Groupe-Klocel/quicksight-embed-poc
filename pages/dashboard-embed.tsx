import Quicksight from "aws-sdk/clients/quicksight";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import React from "react";
import { QuicksightEmbed } from "../components/QuicksightEmbed";
import styles from "../styles/Home.module.css";

export const getServerSideProps: GetServerSideProps = async (context) => {
  /*
  Retrieves a Quicksight Embed URL on the server-side using the JS SDK,
  then exports the URL as a property to be used by the frontend

  See documentation:
  https://docs.aws.amazon.com/quicksight/latest/user/embedded-dashboards-for-authenticated-users-step-2.html
  */

  const quicksight = new Quicksight({
    region: process.env.AWS_REGION_NUAGE,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_NUAGE,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_NUAGE,
  });

  const generateEmbedUrl = () => {
    return new Promise((resolve, reject) => {
      quicksight.generateEmbedUrlForRegisteredUser(
        {
          AwsAccountId: process.env.AWS_ACCOUNT_ID!,
          ExperienceConfiguration: {
            Dashboard: {
              InitialDashboardId: process.env.QUICKSIGHT_DASHBOARD_ID!,
            },
          },
          UserArn: `arn:aws:quicksight:${process.env.AWS_REGION_NUAGE}:${process.env.AWS_ACCOUNT_ID}:user/default/${process.env.QUICKSIGHT_USER_EMAIL}` /* required */,
          SessionLifetimeInMinutes: 600,
        },
        function (err, data) {
          if (err) return reject(err);
          resolve(data.EmbedUrl);
        }
      );
    });
  };

  return {
    props: { url: await generateEmbedUrl() },
  };
};

function DashboarEmbedPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <>
      <Head>
        <title>Dashboard Embed</title>
        <meta name="description" content="Made with ❤️ in Bordeaux 🇫🇷" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Dashboard Embed</h1>
      </main>
      <QuicksightEmbed url={props.url} />
    </>
  );
}

export default DashboarEmbedPage;
