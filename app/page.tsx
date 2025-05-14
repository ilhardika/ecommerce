import React from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";

const Home = () => {
  return (
    <Container className="p-10 bg-shop_light_pink">
      <h2 className="text-xl font-semibold">Home</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        voluptas obcaecati ratione tempore ut, reiciendis velit hic culpa sed
        ipsum, nostrum neque at consequuntur sequi, doloribus et! Et ipsum, unde
        accusantium odio veniam, nobis ratione suscipit minima facilis explicabo
        totam aliquid assumenda quae praesentium excepturi sit sapiente ullam
        nesciunt ex?
      </p>
      <Button>Click</Button>
    </Container>
  );
};

export default Home;
