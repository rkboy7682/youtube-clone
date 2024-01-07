import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Music",
  "Video",
  "Live",
  "Cricate",
  "Movies",
  "Mix",
  "Shorts",
  "Computer",
  "Namste",
  "Whatsapp",
  "Insta",
];

const ButtonList = () => {
  return (
    <div className="flex flex-wrap">
      {list.map((item, key) => (
        <Button name={item} />
      ))}

      {/* <Button name="MUSIC" />
      <Button name="VIDEO" />
      <Button name="LIVE" />
      <Button name="CRICATE" />
      <Button name="MOVIES" />
      <Button name="MIX" />
      <Button name="SHORTS" />
      <Button name="COMPUTER" />
      <Button name="NAMSTE" />
      <Button name="WHATSAPP" />
      <Button name="INSTA" /> */}
    </div>
  );
};

export default ButtonList;
