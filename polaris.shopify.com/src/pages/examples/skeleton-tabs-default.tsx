import { Card, SkeletonTabs } from "@shopify/polaris";
import React from "react";
import { withPolarisExample } from "../../components/PolarisExampleWrapper";

function SkeletonExample() {
  return (
    <Card>
      <SkeletonTabs />
    </Card>
  );
}

export default withPolarisExample(SkeletonExample);
