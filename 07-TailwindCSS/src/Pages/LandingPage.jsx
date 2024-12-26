import {
  Card2,
  CardHeader,
  Container,
  Footer,
  Header,
  Navbar,
} from "../components/index";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Header />
      <Container classname={"w-full flex flex-wrap h-auto mb-5 p-10"}>
        <CardHeader title={"Social Animals"} />
        <Container classname='w-[90%] flex flex-wrap justify-around items-center mt-8 mx-auto gap-8'>
          <Card2
            imgUrl='https://cdn-icons-png.flaticon.com/128/18169/18169960.png'
            title={"First"}
            content={"lorem ipsum dolar"}
          />
          <Card2
            imgUrl='https://cdn-icons-png.flaticon.com/128/18169/18169926.png'
            title={"Second"}
            content={"lorem ipsum dolar"}
          />
          <Card2
            imgUrl='https://cdn-icons-png.flaticon.com/128/18169/18169960.png'
            title={"Third"}
            content={"lorem ipsum dolar"}
          />
          <Card2
            imgUrl='https://cdn-icons-png.flaticon.com/128/18169/18169923.png'
            title={"Fourth"}
            content={"lorem ipsum dolar"}
          />
        </Container>
      </Container>

      <Container classname={"w-full flex flex-wrap h-auto mb-5 p-10"}>
        <CardHeader title={"Halloween Costumes"} />
        <Container classname='w-full flex flex-wrap justify-around items-center mt-8 mx-auto gap-8'>
          <Card2
            imgUrl='https://cdn-icons-png.flaticon.com/128/17550/17550834.png'
            title={"First"}
            content={
              "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode."
            }
            className={
              "border-4 text-center border-white p-4 tracking-tight rounded-lg"
            }
          />
          <Card2
            imgUrl='https://cdn-icons-png.flaticon.com/128/17550/17550841.png'
            title={"Second"}
            content={
              "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode."
            }
            className={"text-center  p-4 tracking-tight rounded-lg"}
          />
          <Card2
            imgUrl='https://cdn-icons-png.flaticon.com/128/17550/17550849.png'
            title={"Third"}
            content={
              "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode."
            }
            className={"text-center  p-4 tracking-tight rounded-lg"}
          />
          <Card2
            imgUrl='https://cdn-icons-png.flaticon.com/128/17550/17550842.png'
            title={"Fourth"}
            content={
              "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode."
            }
            className={"text-center  p-4 tracking-tight rounded-lg"}
          />
          <Card2
            imgUrl='https://cdn-icons-png.flaticon.com/128/17550/17550852.png'
            title={"Fifth"}
            content={
              "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode."
            }
            className={"text-center  p-4 tracking-tight rounded-lg"}
          />
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default LandingPage;
