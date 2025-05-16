import { Container, Title } from "@/components";
import { Jumbotron, Options, Brands, About, Video } from "./components/home";

export default function Home() {
  return (
    <main>
      <Jumbotron />
      <Video />
      <About />
      <Container>
        <Brands />
      </Container>
      <Container backgroundBlack>
        <Options />
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
