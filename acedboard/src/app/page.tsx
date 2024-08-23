import Button from "./components/button";

export default function Home() {
  return (
    <>
      <h1>This is my homepage!</h1>
      <Button size="small" fontSize={8} fontWeight={300}>
        small
      </Button>
      <Button size="medium" fontSize={10} fontWeight={500}>
        medium 
      </Button>
      <Button size="large" fontSize={10} fontWeight="300">
        large 
      </Button>
    </>
  );
}
