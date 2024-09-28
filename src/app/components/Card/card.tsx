"use client";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { ProfileProps } from "~/app/utils/profiles";
import styles from "./card.module.css";

export default function Card({ username, name, quote }: ProfileProps) {
  return (
    <>
      <Tilt
        className={` ${styles.baseCard} h-[80vw] max-h-[350px] w-[80vw] max-w-[300px]`}
        tiltReverse={true}
      >
        <Image
          src={`https://github.com/${username}.png`}
          alt={`${name}'s Profile Image`}
          fill
          objectFit="cover"
          objectPosition="top"
          className="rounded-lg object-contain absolute"
        />
        <div
          className={`${styles.rised} cardContent absolute -bottom-8 w-full rounded-t-lg text-xl p-2 px-4 text-center font-semibold text-white`}
        >
          {name}
        </div>
        <div
          className={`${styles.rised2} cardContent absolute -bottom-14 text-lg w-full rounded-t-lg p-2 px-4 text-center font-semibold text-yellow-500/90`}
        >
          {" "}
          {quote}{" "}
        </div>
        <div
          className={`${styles.rised3} cardContent absolute -bottom-24 flex w-full justify-center gap-4 `}
        >
          <a href={`https://github.com/${username}`} target="_blank">
            <button className="bg-white px-4 py-2 rounded-md text-black">
              Visit Profile
            </button>
          </a>
        </div>
      </Tilt>
    </>
  );
}
