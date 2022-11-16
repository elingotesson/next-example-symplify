import { getCookie, setCookie } from "cookies-next";

const sstsdk = require("@symplify-conversion/sst-sdk-nodejs");
const sst = new sstsdk(process.env.SYMPLIFY_WEBSITE_ID);

const cookieJar = (req: any, res: any) => {
  return {
    get: (key: string) => getCookie(key, { req, res }),
    set: (key: string, value: string, expiresInDays: number) => {
      const expires = new Date(Date.now() + expiresInDays * 24 * 3600 * 1000);
      setCookie(key, value, { req, res, expires });
    },
  };
};

interface Props {
  data: string;
}

function Page({ data }: Props) {
  return <h1>{data || "Data was not sent from the server"}</h1>;
}

// This gets called on every request
export async function getServerSideProps(context: any) {
  let variant = null;
  const testName = "Server side test acce";
  const testVariation = sst?.findVariation(
    testName,
    cookieJar(context.req, context.res)
  );

  if (testVariation) {
    switch (testVariation) {
      case "Original":
        variant = "original";
        break;
      case "Variant 1":
        variant = "variant-1";
        break;
    }
  }

  // Pass data to the page via props
  return { props: { data: variant } };
}

export default Page;
