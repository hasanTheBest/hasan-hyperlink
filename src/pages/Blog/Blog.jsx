import React from "react";

const Blog = () => {
  return (
    <section className="max-w-3xl mx-auto text-gray-600 py-12 px-6">
      <article className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          1. What are the difference between Authentication and Authorization?
        </h2>
        <p>
          Authorization and authentication are referred to the system of
          protecting resource being used by public.While often used
          interchangeably, authentication and authorization represent
          fundamentally different functions.
        </p>
        <h4 className="text-xl font-medium my-6">Authentication</h4>
        <p>
          Authentication is the process of verifying the credentials through
          passwords, biometrics, one-time pins or apps. It determines who the
          users are generally transmitting info through an ID token. Usually
          authentication is done before authorization, visible and partially
          changeable by users
        </p>
        <h4 className="text-xl font-medium my-6">Authorization</h4>
        <p className="mb-4">
          Authorization is the process of granting or denying the permission to
          the specific resource through access token. It is not visible and
          changeable by users. Authorization is maintained by organization or
          security teams through setting and perform after authentication.
        </p>
        <p>
          In short, access to a resource is secured by both authentication and
          authorization. If you can't claim your identity, you won't be
          permitted into a resource. And even if you can prove your identity, if
          you are not authorized for that resource, you will still be denied
          access.
        </p>
      </article>

      <article className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          2. Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <p>
          Firebase is cloud service provider owned by Google. It is mostly used
          to development mobile application while focusing user experience
          rather than maintaining server and program to communicating server.
          Firebase accelerate building serverless web and mobile application.
        </p>
        <h4 className="text-xl font-medium my-6">Firebase Authentication</h4>
        <p>
          We are using firebase for authentication purposes. Firebase provides
          flexibility of creating custom user with email, password and other
          meta information. As well as it support one click authentication
          allowing Google, Microsoft, Apple, GitHub, Facebook account's public
          information. There are many uses of firebase when one consider
          skipping backend functionality and grabbing ready-made one based on
          cloud.
        </p>
        <h4 className="text-xl font-medium my-6">
          Alternative to firebase authentication
        </h4>
        <p className="mb-4">
          There are several alternative to firebase authentication systems. The
          most common, competitor and popular alternatives to it are Auth0,
          Auth0, MongoDB, Passport and Okta, Amazon cognito, JSON Web token and
          keyloak.
        </p>
      </article>

      <article className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          3. What other services does firebase provide other than
          authentication?
        </h2>
        <p className="mb-4">
          The most common services of firebase besides authentication are cloud
          firestore, machine learning, cloud functions, hosting, cloud storage,
          remote configuration, crashlytics, realtime database, performance
          monitor, test lab, app distribution, google analytics, in-app
          messaging, cloud messaging and dynamics links. more.
        </p>
        <p>
          Firebase also provide extensional services such as searching with
          algolia, trigger email, shorten urls, sending invoice using stripe,
          translate text, marketing with mailchimp, making payments with google
          pay, sending message with twilio and meesagebrid, resizing images,
          streaming collection to bigQuery.
        </p>
      </article>
    </section>
  );
};

export default Blog;
