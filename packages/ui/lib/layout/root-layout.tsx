
import "../../css/tailwind.css";
import "../../css/tailwind-output.css";

export const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html>
    <body>{children}</body>
  </html>
);
