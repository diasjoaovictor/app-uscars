import { Button  } from '@chakra-ui/react';
import { useState } from 'react';

interface ArrowsProps{
  onClick: () => void;
  classProps: string;
}

export const Arrows = ({ classProps, onClick}: ArrowsProps) => {

  const [isMouseEnterActive, setIsMouseEnterActive] = useState(false)

  const handleClick = () => {
     onClick();
  }

  return(
        <Button
        textAlign="center"
        position="absolute"
        onClick={handleClick}
        boxShadow="0px 2.5px 3px 1px rgba(0, 0, 0, 0.4)"
        borderRadius={20}
        mt={[,,"100px"]}
        onMouseEnter={() => setIsMouseEnterActive(!isMouseEnterActive)}
        onMouseOut={() => setIsMouseEnterActive(!isMouseEnterActive)}
        backgroundColor={ isMouseEnterActive ? "#00008B !important" : "#add8e6 !important" }
        __css={{
          transition: "background-color 0.7s"
        }}
        className={classProps}
      />
  )
}
