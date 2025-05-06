import { Container, Title } from "@/components";
import { Jumbotron, Options, Brands, About } from "./components/home";

export default function Home() {
  return (
    <main>
      <Jumbotron />
      <Container backgroundBlack>
        <About />
      </Container>
    </main>
  );
}

export const metadata = {
  title: "MULTIMEDIOS DIGITAL - INICIO",
  description: "MULTIMEDIOS DIGITAL",
  icons: {
    icon: "/assets/images/logo/logo.png",
  },
};
