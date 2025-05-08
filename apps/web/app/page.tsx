"use client";

import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import TextInput from "@repo/ui/text-input";
import { useRouter } from "next/navigation";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;
  
  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  const router = useRouter();
  return (
   <div style={{
    height:"100vh",
    width:"100vw",
    display:"flex",
    alignItems : "center",
    justifyContent:"center"
   }}>
    <TextInput placeholder="Enter the number" onChange={() => {alert("hii")}}/>
    <button onClick={() =>router.push("/chat/123") }>Join room</button>
   </div>
  );
}
