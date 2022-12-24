import { Suspense } from "react";
import { Layout } from "../components/Layout.server";
import FeaturedCollections from "../components/FeaturedCollections.server";
export default function Home() {
  return (
    <Layout>
      <div className="p-6 md:p-8 lg:p-12 text-center">
        <p className="font-bold mb-3">Day 1</p>
      </div>
        
      <Suspense>
      <FeaturedCollections />
      </Suspense>
    </Layout>
  );
}
