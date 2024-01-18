import { FC , ReactNode } from "react"
// import classNames from "classNames";

interface Props {
    children?: ReactNode,
    style?: React.CSSProperties,
    onClick?: () => void;
    className?: string 
}

const Box : FC<Props> = ({children , style ,onClick , className}) => {


  //using library 
  // const combinedClassName = classNames('item', className , {
  //   "target" : !!onClick
  // });
  const combinedClassName = `${className} item ${onClick ? "target" : ""}`;

  return (
    <div onClick={onClick} className={combinedClassName} style={style}>
        {children}
    </div>
  )
}

export default Box
