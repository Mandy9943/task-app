import Head from "next/head";
import { useRouter } from "next/router";
import { memo } from "react";

export interface MetaHeadProps {
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: string;
}

export const MetaHead = memo(
  ({ metaTitle, metaDescription, metaImage }: MetaHeadProps) => {
    const host = process.env.NEXT_PUBLIC_HOST;
    const canonicalURL = host + useRouter().asPath;
    const title = metaTitle;
    const defaultMetaTags = {
      title: "Aplicación de Tareas",
      description:
        "Una aplicación para crear, eliminar y completar tareas usando el localstorage.",
      image: host + "/thumbail.png",
    };
    return (
      <Head>
        <title key="titleTag">{title || defaultMetaTags.title}</title>

        <link rel="apple-touch-icon" href="/favicon.png"></link>
        <meta name="theme-color" content="#6600b9" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon.png" />
        <link rel="canonical" href={canonicalURL} />
        <meta charSet="utf-8" key="utf-8" />
        <meta key="REPLY-TO" name="REPLY-TO" content="armandoc9943@gmail.com" />
        <meta key="author" name="author" content="Armando Cesar Martin" />

        <meta key="robots" name="robots" content="index, follow" />
        <meta
          key="description"
          name="description"
          content={metaDescription || ""}
        />
        <meta charSet="utf-8" key="utf-8" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta key="copyright" name="copyright" content="Armando Cesar Martin" />
        <meta key="robots" name="robots" content="index, follow" />
        <meta
          key="Content-Type"
          httpEquiv="Content-Type"
          content="text/html; charset=utf-8"
        />

        <meta
          key="keywords"
          name="keywords"
          content="test, Next.js, tareas, completadas, eliminar, citas"
        />

        {/*   <!-- Open Graph data --> */}
        <meta key="og:type" property="og:type" content="website" />
        <meta
          key="og:title"
          property="og:title"
          content={title || defaultMetaTags.title}
        />
        <meta
          key="og:description"
          property="og:description"
          content={metaDescription || defaultMetaTags.description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={metaImage || defaultMetaTags.image}
        />
        <meta key="og:url" property="og:url" content={canonicalURL} />

        {/* <!-- Twitter Card data --> */}
        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={title || defaultMetaTags.title}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={metaDescription || defaultMetaTags.description}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={metaImage || defaultMetaTags.image}
        />
        <meta key="twitter:url" name="twitter:url" content={canonicalURL} />
      </Head>
    );
  }
);

MetaHead.displayName = "MetaHead";
