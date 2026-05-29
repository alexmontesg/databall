import React from "react";

export default function PageTitle({ children }: React.PropsWithChildren) {
  return <h2 className="text-4xl font-bold tracking-wide">{children}</h2>;
}
