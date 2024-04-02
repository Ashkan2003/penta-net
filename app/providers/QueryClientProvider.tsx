'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient } from '@tanstack/react-query';
import { useState } from 'react';

// Options
const queryClientOptions = {
  defaultOptions: {
    // 5 * 1000
    queries: {
      staleTime: 60000,
    },
  },
};

const ReactQueryPvorider: React.FC<PropsWithChildren> = ({ children }) => {
  // State
  const [queryClientStore] = useState(
    () => new QueryClient(queryClientOptions)
  );
  // Return Provider
  return (
    <QueryClientProvider client={queryClientStore}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ReactQueryPvorider;
// "use client";
// import {
//   QueryClient,
//   QueryClientProvider as ReactQueryClientProvider,
// } from "@tanstack/react-query";
// import { PropsWithChildren } from "react";

// const queryClient = new QueryClient();

// // this is the inital setup of react-query
// const QueryClientProvider = ({ children }: PropsWithChildren) => {
//   return (
//     <ReactQueryClientProvider client={queryClient}>
//       {children}
//     </ReactQueryClientProvider>
//   );
// };

// export default QueryClientProvider;
///////////////////////////////////////////////////////////////////
// "use client";

// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { useState } from "react";

// const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
//   const [queryClient] = useState(() => new QueryClient());

//   return (
//     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//   );
// };

// export default ReactQueryProvider;