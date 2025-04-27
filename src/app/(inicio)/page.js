import { Container, Title } from "@/components";
import { Jumbotron, Options, Brands } from "./components/home";

export default function Home() {
  return (
    <main>
      <Jumbotron />
      <Container backgroundBlack>
        <Options />
      </Container>
      <Container>
        <Title
          title="EL #1 DE PROPIEDADES DIGITALES EN MÉXICO"
          blackColor
          />
        <Brands />
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
