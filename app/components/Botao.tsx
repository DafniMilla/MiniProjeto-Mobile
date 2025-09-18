import React from 'react';
import { Button } from "react-native-elements";

interface BotaoProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  width?: number;
  disabled?: boolean;
}

export default function Botao({ 
  title, 
  onPress, 
  backgroundColor = "#fca49c",
  width = 200,
  disabled = false
}: BotaoProps) {
  return (
    <Button
      title={title}
      onPress={onPress}
      disabled={disabled}
      buttonStyle={{
        backgroundColor: backgroundColor,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 30,
      }}
      containerStyle={{
        width: width,
        marginHorizontal: 50,
        marginVertical: 10,
      }}
      titleStyle={{ fontWeight: "bold",
        color:"#f4e38c"
       }}
    />
  );
}
