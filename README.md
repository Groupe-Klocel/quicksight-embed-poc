# Quicksight Embed POC

References:

- [https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics.html](https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics.html)
- [amplify-quicksight-dashboard-embedded](https://github.com/aurbac/amplify-quicksight-dashboard-embedded#configure-the-react-application)
- [https://learnquicksight.workshop.aws/](https://learnquicksight.workshop.aws/)
- [https://docs.aws.amazon.com/quicksight/latest/user/example-prepared-data-set.html](https://docs.aws.amazon.com/quicksight/latest/user/example-prepared-data-set.html)

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

NB: in order for the actual Quicksight Embed to run locally, you'll need an SSL tunneling service (QS cannot run without HTTPS).
Take a look at [ngrok](https://ngrok.com/) to setup a public HTTPS domain for free :)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

```bash
vercel
or
vercel --prod
```
