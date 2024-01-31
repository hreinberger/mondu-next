import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel, Container, Section } from "@radix-ui/themes";

import Navbar from "@/app/components/ui/navbar.js";
import Footer from "@/app/components/ui/footer.js";

export const metadata: Metadata = {
  title: "Mondu Demo App",
  description: "A demo app for Mondu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Theme
          appearance="dark"
          accentColor="purple"
          grayColor="slate"
          panelBackground="solid"
          scaling="110%"
          radius="small"
        >
          {/* <ThemePanel /> */}
          <Container size="4">
            <Section pt="0" pb="4">
              <Navbar />
            </Section>
            <Section pt="4" pb="4">
              {children}
            </Section>
            <Section pt="4" pb="0">
              <Footer />
            </Section>
          </Container>
        </Theme>
      </body>
    </html>
  );
}