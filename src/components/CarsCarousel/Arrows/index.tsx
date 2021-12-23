import { Button  } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

interface ArrowsProps{
  onClick: () => void;
  classProps: string;
}

export const Arrows = ({ classProps, onClick}: ArrowsProps) => {

  const [isMouseEnterActive, setIsMouseEnterActive] = useState(false)

  const handleClick = () => {
    console.log("O left button foi clicado, volta ae fio... função:")
    console.log(onClick);
     onClick();
  }

  return(
        <Button
        textAlign="center"
        position="absolute"
        onClick={handleClick}
        borderRadius={20}
        onMouseEnter={() => setIsMouseEnterActive(!isMouseEnterActive)}
        onMouseOut={() => setIsMouseEnterActive(!isMouseEnterActive)}
        backgroundColor={ isMouseEnterActive ? "#00008B !important" : "gray !important" }
        className={classProps}
      />
  )
}
