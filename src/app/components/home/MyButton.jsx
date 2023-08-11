import React from "react";
import {Button} from "@nextui-org/react";

export default function MyButton({className}) {
  return (
    <Button color="primary" className={`${className}` }>
      Log In
    </Button>
  );
}
