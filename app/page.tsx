'use client'
import Header from "./component/header";
import Hero from "./component/hero";
import Service from "./component/service";

export default function Home() {
  return (
    <main className="flex min-h-screen- flex-col items-center justify-between p-24-">
          <Header/>
          <Hero/>
          <Service/>

  </main>
  );
}
